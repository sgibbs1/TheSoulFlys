/**
 * Runs before static assets only for HTML page paths
 * (see assets.run_worker_first in wrangler.toml).
 * Logs once per successful HTML document response.
 */

function shouldLogVisit(request, response) {
  if (request.method !== 'GET') return false;
  if (response.status !== 200) return false;

  const dest = request.headers.get('Sec-Fetch-Dest');
  if (dest && dest !== 'document') return false;
  if (!dest) {
    const accept = request.headers.get('Accept') || '';
    if (!accept.startsWith('text/html')) return false;
  }

  const contentType = response.headers.get('content-type') || '';
  return contentType.includes('text/html');
}

function logVisit(request) {
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

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (shouldLogVisit(request, response)) {
      logVisit(request);
    }

    return response;
  },
};
