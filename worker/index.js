/**
 * Runs before static assets (assets.run_worker_first = true).
 * Logs one entry per top-level page navigation (not CSS/JS/images/etc.).
 */

function isPageNavigation(request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return false;

  const dest = request.headers.get('Sec-Fetch-Dest');
  // Modern browsers mark real page loads as document
  if (dest === 'document') return true;
  // Fallback for older clients / some previews: HTML navigations only
  if (!dest) {
    const accept = request.headers.get('Accept') || '';
    return accept.includes('text/html');
  }
  return false;
}

export default {
  async fetch(request, env) {
    if (isPageNavigation(request)) {
      const url = new URL(request.url);
      const user = request.headers.get('X-User') || 'anonymous';
      const email =
        request.headers.get('cf-access-authenticated-user-email') ||
        request.headers.get('Cf-Access-Authenticated-User-Email') ||
        null;

      console.log(
        JSON.stringify({
          type: 'site_visit',
          ts: new Date().toISOString(),
          method: request.method,
          path: url.pathname,
          user,
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
