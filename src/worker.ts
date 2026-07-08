/// <reference types="@cloudflare/workers-types" />

interface Env {
  ASSETS: Fetcher;
}

/**
 * Attach Cache-Control headers based on the request path. Vite emits
 * content-hashed files under /assets/, so those can be cached indefinitely
 * (immutable). HTML (index.html / SPA fallback) must always revalidate so a new
 * deploy is picked up immediately.
 */
function applyCacheHeaders(response: Response, url: URL): Response {
  if (response.headers.has('Cache-Control')) return response;

  const cached = new Response(response.body, response);
  const contentType = cached.headers.get('Content-Type') ?? '';

  if (/^\/assets\//.test(url.pathname)) {
    cached.headers.set('Cache-Control', 'public, max-age=3628800, immutable');
  } else if (contentType.includes('text/html')) {
    cached.headers.set('Cache-Control', 'no-cache');
  }

  return cached;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname === '/health') {
      return Response.json({ status: 'ok', timestamp: Date.now() });
    }

    try {
      const assetResponse = await env.ASSETS.fetch(request);
      return applyCacheHeaders(assetResponse, url);
    } catch {
      return new Response('Internal Server Error', { status: 500 });
    }
  },
} satisfies ExportedHandler<Env>;
