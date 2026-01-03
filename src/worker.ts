/// <reference types="@cloudflare/workers-types" />

interface Env {
  ASSETS: Fetcher
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url)

    if (pathname === '/health') {
      return new Response('ok', { status: 200 })
    }

    // Try to serve the requested asset; fall back to index.html for SPA routing.
    const assetResponse = await env.ASSETS.fetch(request)
    if (assetResponse.status !== 404 || !acceptsHtml(request)) {
      return assetResponse
    }

    const originUrl = new URL(request.url)
    const rootUrl = new URL('/index.html', originUrl)
    return env.ASSETS.fetch(new Request(rootUrl.toString(), request))
  },
}

function acceptsHtml(request: Request): boolean {
  const accept = request.headers.get('accept')
  return !!accept && accept.includes('text/html')
}
