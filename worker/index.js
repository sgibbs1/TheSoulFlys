/**
 * Runs before static assets (assets.run_worker_first = true).
 * Logs page views so you can confirm band members hit the site.
 * Cloudflare Access email is included when Access is in front of the site.
 */

const SKIP_EXT =
  /\.(css|js|mjs|map|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|otf|mp4|webm|pdf)$/i;

export default {
  async fetch(request, env) {
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

    return env.ASSETS.fetch(request);
  },
};
