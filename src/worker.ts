/// <reference types="@cloudflare/workers-types" />

interface Env {
  ASSETS: Fetcher;
}

/**
 * Attach Cache-Control headers based on the request path. Vite emits
 * content-hashed files under /assets/, so those can be cached indefinitely
 * (immutable). HTML (index.html) must always revalidate so a new deploy is
 * picked up immediately. 404s (junk-scanner probes for /.git, /.env, etc.) are
 * cached briefly so repeat probes are absorbed at the edge instead of billing a
 * worker invocation each time.
 */
function applyCacheHeaders(response: Response, url: URL): Response {
  if (response.headers.has('Cache-Control')) return response;

  const cached = new Response(response.body, response);
  const contentType = cached.headers.get('Content-Type') ?? '';

  if (/^\/assets\//.test(url.pathname)) {
    cached.headers.set('Cache-Control', 'public, max-age=3628800, immutable');
  } else if (contentType.includes('text/html')) {
    cached.headers.set('Cache-Control', 'no-cache');
  } else if (cached.status === 404) {
    cached.headers.set('Cache-Control', 'public, max-age=7200');
  }

  return cached;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;

    // Method gate, before any routing or asset lookup. This is a read-only
    // static site, so only GET/HEAD are ever legitimate. Scanners fire bursts of
    // POST/PUT/etc. at random paths (e.g. POST /api/graphql) — reject them here
    // with a cheap 405. Short-circuiting before env.ASSETS.fetch() also means a
    // probe's request body is never forwarded and left unread, which is what
    // triggered "Can't read from request stream after response has been sent".
    const method = request.method.toUpperCase();
    if (method !== 'GET' && method !== 'HEAD') {
      return new Response('Method Not Allowed', {
        status: 405,
        headers: { Allow: 'GET, HEAD', 'Cache-Control': 'no-store' },
      });
    }

    if (pathname === '/health') {
      return Response.json({ status: 'ok', timestamp: Date.now() });
    }

    // Browsers request /favicon.ico implicitly, regardless of the <link
    // rel="icon"> in index.html. We only ship favicon.svg, and with the SPA
    // fallback disabled that request now 404s, so serve the SVG under the .ico
    // path instead of emitting a 404 on every first page view.
    if (pathname === '/favicon.ico') {
      try {
        const icon = await env.ASSETS.fetch(new URL('/favicon.svg', url).toString(), { method });
        const response = new Response(icon.body, icon);
        response.headers.set('Cache-Control', 'public, max-age=86400');
        return response;
      } catch {
        return new Response('Internal Server Error', { status: 500 });
      }
    }

    // Serve static assets. With SPA fallback disabled in wrangler.jsonc the
    // assets binding returns a real 404 for unknown paths instead of a 200
    // index.html shell, so probes for /.git/config, /.env, etc. can't
    // fingerprint the app or inflate cache/analytics with bogus "pages". This
    // app has no client-side router — every real navigation is "/" with query
    // params — so nothing legitimate relies on the fallback.
    try {
      const assetResponse = await env.ASSETS.fetch(request);
      return applyCacheHeaders(assetResponse, url);
    } catch {
      return new Response('Internal Server Error', { status: 500 });
    }
  },
} satisfies ExportedHandler<Env>;
