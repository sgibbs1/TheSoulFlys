/**
 * Cloudflare Pages Functions middleware — runs before static assets.
 * Same visit logging as worker/index.js (for Workers + run_worker_first).
 */

const SKIP_EXT =
  /\.(css|js|mjs|map|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|otf|mp4|webm|pdf)$/i;

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  if (!SKIP_EXT.test(path)) {
    const email =
      request.headers.get('cf-access-authenticated-user-email') ||
      request.headers.get('Cf-Access-Authenticated-User-Email') ||
      null;

    console.log(
      JSON.stringify({
        type: 'site_visit',
        ts: new Date().toISOString(),
        method: request.method,
        path,
        email,
        country: request.cf?.country ?? null,
        city: request.cf?.city ?? null,
        ua: request.headers.get('user-agent'),
      }),
    );
  }

  return context.next();
}
