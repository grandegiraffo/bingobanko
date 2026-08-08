import { describe, it, expect, vi } from 'vitest';
import worker from './worker';

interface Env {
  ASSETS: Fetcher;
}

/**
 * Assets binding stub: serves an HTML shell at "/", a hashed asset under
 * /assets/, and a real 404 for anything else (matching wrangler.jsonc with SPA
 * fallback disabled).
 */
function createEnv(): Env {
  return {
    ASSETS: {
      fetch: vi.fn().mockImplementation((req: Request | string) => {
        const { pathname } = new URL(typeof req === 'string' ? req : req.url);
        if (pathname === '/') {
          return new Response('<html>bingo</html>', {
            status: 200,
            headers: { 'Content-Type': 'text/html' },
          });
        }
        if (pathname.startsWith('/assets/')) {
          return new Response('console.log(1)', {
            status: 200,
            headers: { 'Content-Type': 'application/javascript' },
          });
        }
        if (pathname === '/favicon.svg') {
          return new Response('<svg/>', {
            status: 200,
            headers: { 'Content-Type': 'image/svg+xml' },
          });
        }
        return new Response('Not Found', { status: 404 });
      }),
    } as unknown as Fetcher,
  };
}

function makeRequest(url: string, method = 'GET'): Request {
  return { url, method, headers: { get: () => null } } as unknown as Request;
}

describe('worker method gate', () => {
  it('rejects a POST with 405 before it reaches the assets binding', async () => {
    const env = createEnv();
    const assetsFetch = (env.ASSETS as unknown as { fetch: ReturnType<typeof vi.fn> }).fetch;
    const response = await worker.fetch(
      makeRequest('https://bingo.duhn.net/api/graphql', 'POST'),
      env,
    );
    expect(response.status).toBe(405);
    expect(response.headers.get('Allow')).toBe('GET, HEAD');
    expect(response.headers.get('Cache-Control')).toBe('no-store');
    expect(assetsFetch).not.toHaveBeenCalled();
  });

  it.each(['PUT', 'DELETE', 'PATCH', 'OPTIONS'])(
    'rejects a %s request with 405',
    async (method) => {
      const env = createEnv();
      const response = await worker.fetch(makeRequest('https://bingo.duhn.net/', method), env);
      expect(response.status).toBe(405);
    },
  );

  it('allows HEAD through to the assets binding', async () => {
    const env = createEnv();
    const assetsFetch = (env.ASSETS as unknown as { fetch: ReturnType<typeof vi.fn> }).fetch;
    const response = await worker.fetch(makeRequest('https://bingo.duhn.net/', 'HEAD'), env);
    expect(response.status).toBe(200);
    expect(assetsFetch).toHaveBeenCalled();
  });
});

describe('worker asset serving (no SPA rewrite)', () => {
  it('serves index.html at the root with a revalidate cache header', async () => {
    const env = createEnv();
    const response = await worker.fetch(makeRequest('https://bingo.duhn.net/'), env);
    expect(response.status).toBe(200);
    expect(await response.text()).toContain('bingo');
    expect(response.headers.get('Cache-Control')).toBe('no-cache');
  });

  it('marks hashed assets immutable', async () => {
    const env = createEnv();
    const response = await worker.fetch(
      makeRequest('https://bingo.duhn.net/assets/app.abc123.js'),
      env,
    );
    expect(response.status).toBe(200);
    expect(response.headers.get('Cache-Control')).toBe('public, max-age=3628800, immutable');
  });

  it('returns a cached 404 for scanner probes instead of a 200 shell', async () => {
    const env = createEnv();
    const response = await worker.fetch(makeRequest('https://bingo.duhn.net/.git/config'), env);
    expect(response.status).toBe(404);
    expect(response.headers.get('Cache-Control')).toBe('public, max-age=7200');
  });

  it('serves favicon.svg for the implicit /favicon.ico request', async () => {
    const env = createEnv();
    const response = await worker.fetch(makeRequest('https://bingo.duhn.net/favicon.ico'), env);
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('image/svg+xml');
    expect(response.headers.get('Cache-Control')).toBe('public, max-age=86400');
  });
});

describe('worker health check', () => {
  it('answers GET /health with 200 before hitting the assets binding', async () => {
    const env = createEnv();
    const assetsFetch = (env.ASSETS as unknown as { fetch: ReturnType<typeof vi.fn> }).fetch;
    const response = await worker.fetch(makeRequest('https://bingo.duhn.net/health'), env);
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ status: 'ok' });
    expect(assetsFetch).not.toHaveBeenCalled();
  });

  it('rejects a non-GET/HEAD /health request with 405 (method gate runs first)', async () => {
    const env = createEnv();
    const response = await worker.fetch(makeRequest('https://bingo.duhn.net/health', 'POST'), env);
    expect(response.status).toBe(405);
    expect(response.headers.get('Allow')).toBe('GET, HEAD');
  });
});
