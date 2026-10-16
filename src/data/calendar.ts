/**
 * Paste your public Google Calendar embed URL here.
 * Google Calendar → Settings → Integrate calendar → Embed code → copy the iframe src.
 *
 * Example:
 * https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FChicago
 */
export const calendar = {
  /** Replace with your public calendar embed src when ready. */
  embedUrl:
    'https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FChicago',
  title: 'Upcoming Shows',
  description:
    'See where The Soul Flys are playing next. Updates happen in Google Calendar — no website rebuild needed.',
  timezoneNote: 'Times shown in Central Time (America/Chicago).',
  isPlaceholder: true,
} as const;
