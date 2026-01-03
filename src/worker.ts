/// <reference types="@cloudflare/workers-types" />

interface Env {
  ASSETS: Fetcher
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const pathname = stripGhPagesPrefix(url.pathname)

    // Normalize request if it was built with a /bingobanko/ base (GitHub Pages) but deployed at root.
    const normalizedUrl = pathname === url.pathname ? url : new URL(`${pathname}${url.search}`, url)
    const normalizedRequest = pathname === url.pathname ? request : new Request(normalizedUrl.toString(), request)

    if (pathname === '/health') {
      return new Response('ok', { status: 200 })
    }

    // Try to serve the requested asset; fall back to index.html for SPA routing.
    const assetResponse = await env.ASSETS.fetch(normalizedRequest)
    if (assetResponse.status !== 404 || !acceptsHtml(request)) {
      return assetResponse
    }

    const rootUrl = new URL('/index.html', normalizedUrl)
    return env.ASSETS.fetch(new Request(rootUrl.toString(), request))
  },
}

function acceptsHtml(request: Request): boolean {
  const accept = request.headers.get('accept')
  return !!accept && accept.includes('text/html')
}

function stripGhPagesPrefix(pathname: string): string {
  if (!pathname.startsWith('/bingobanko/')) return pathname
  const stripped = pathname.replace('/bingobanko', '') || '/'
  return stripped.startsWith('/') ? stripped : `/${stripped}`
}
