/**
 * Cloudflare Pages Functions middleware.
 * Invocations are limited to HTML pages via public/_routes.json.
 * Logs once per successful HTML document response.
 */

function shouldLogVisit(request, response) {
  if (request.method !== 'GET') return false;
  if (response.status !== 200) return false;

  const dest = request.headers.get('Sec-Fetch-Dest');
  // Prefer real browser navigations; allow no dest only for HTML-first Accept
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

export async function onRequest(context) {
  const response = await context.next();

  if (shouldLogVisit(context.request, response)) {
    logVisit(context.request);
  }

  return response;
}
