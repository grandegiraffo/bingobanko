/// <reference types="@cloudflare/workers-types" />

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/health") {
      return Response.json({ status: "ok", timestamp: Date.now() });
    }

    try {
      return await env.ASSETS.fetch(request);
    } catch {
      return new Response("Internal Server Error", { status: 500 });
    }
  },
} satisfies ExportedHandler<Env>;
