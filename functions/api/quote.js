/**
 * POST /api/quote — receive quote form and email via Resend.
 *
 * Cloudflare secrets / env vars:
 *   RESEND_API_KEY  (required) — from https://resend.com/api-keys
 *   QUOTE_TO        (optional) — inbox that receives quotes
 *                               default: thesoulflys@gmail.com
 *   QUOTE_FROM      (optional) — verified Resend from-address
 *                               default: The Soul Flys <onboarding@resend.dev>
 */

const FIELD_MAX = {
  name: 120,
  phone: 40,
  email: 160,
  organization: 160,
  eventType: 80,
  venueSize: 80,
  location: 200,
  eventDate: 40,
  startTime: 40,
  setLength: 120,
  setting: 40,
  sound: 200,
  lighting: 200,
  power: 120,
  budget: 80,
  songs: 2000,
  notes: 4000,
  website: 200, // honeypot
};

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function clip(value, max) {
  return String(value ?? '')
    .trim()
    .slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildBody(fields) {
  return [
    'New quote request from thesoulflys.com',
    '',
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email}`,
    `Organization / couple: ${fields.organization || '—'}`,
    '',
    `Type of event: ${fields.eventType}`,
    `Venue size / guest count: ${fields.venueSize}`,
    `Location: ${fields.location}`,
    `Date of event: ${fields.eventDate}`,
    `Start time: ${fields.startTime || '—'}`,
    `Set length / end time: ${fields.setLength || '—'}`,
    `Indoor / outdoor: ${fields.setting}`,
    '',
    `Sound: ${fields.sound}`,
    `Lighting: ${fields.lighting}`,
    `Power: ${fields.power || '—'}`,
    `Budget range: ${fields.budget || '—'}`,
    '',
    'Special song requests:',
    fields.songs || '—',
    '',
    'Additional notes:',
    fields.notes || '—',
  ].join('\n');
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.RESEND_API_KEY) {
    return json(500, {
      error: 'Quote delivery is not configured yet (missing RESEND_API_KEY).',
    });
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return json(400, { error: 'Invalid form submission.' });
  }

  const fields = {};
  for (const [key, max] of Object.entries(FIELD_MAX)) {
    fields[key] = clip(form.get(key), max);
  }

  // Honeypot — bots fill hidden "website"; humans leave it blank
  if (fields.website) {
    return json(200, { ok: true });
  }

  const required = [
    'name',
    'phone',
    'email',
    'eventType',
    'venueSize',
    'location',
    'eventDate',
    'setting',
    'sound',
    'lighting',
  ];
  for (const key of required) {
    if (!fields[key]) {
      return json(400, { error: `Missing required field: ${key}` });
    }
  }

  if (!isEmail(fields.email)) {
    return json(400, { error: 'Please enter a valid email address.' });
  }

  const to = clip(env.QUOTE_TO, 160) || 'thesoulflys@gmail.com';
  const from =
    clip(env.QUOTE_FROM, 200) || 'The Soul Flys <onboarding@resend.dev>';
  const subject = `Quote request — ${fields.eventType} on ${fields.eventDate}`;
  const text = buildBody(fields);

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: fields.email,
      subject,
      text,
    }),
  });

  if (!resendResponse.ok) {
    const detail = await resendResponse.text();
    console.log(
      JSON.stringify({
        type: 'quote_email_failed',
        status: resendResponse.status,
        detail: detail.slice(0, 500),
      }),
    );
    return json(502, {
      error: 'Could not send your quote request. Please try again or call us.',
    });
  }

  console.log(
    JSON.stringify({
      type: 'quote_email_sent',
      to,
      eventType: fields.eventType,
      eventDate: fields.eventDate,
    }),
  );

  return json(200, { ok: true });
}

export async function onRequest(context) {
  if (context.request.method === 'POST') {
    return onRequestPost(context);
  }
  return json(405, { error: 'Method not allowed' });
}
