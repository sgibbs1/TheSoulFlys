/**
 * Tip / support links.
 * Venmo QR decodes to user_id 3542512463513174907 → @Cheryl-Christmas-1.
 * PayPal, Cash App, and business profiles can replace these later.
 */
export type TipMethod = {
  id: string;
  label: string;
  status: 'live' | 'soon';
  href: string | null;
  cta?: string;
  note: string;
  qrImage?: string;
  qrAlt?: string;
};

export const tips = {
  headline: 'Tip the band',
  intro:
    'Loved the show? Send a tip to keep the frequency flying. Venmo is live now — PayPal, Cash App, and more land when the business profiles are ready.',
  methods: [
    {
      id: 'venmo',
      label: 'Venmo',
      status: 'live',
      href: 'https://account.venmo.com/u/Cheryl-Christmas-1',
      cta: 'Open Venmo',
      qrImage: '/images/tips/venmo-qr.png',
      qrAlt: 'Venmo QR code for tipping The Soul Flys',
      note: 'Scan the code in the Venmo app, or open Cheryl’s Venmo profile with the button.',
    },
    {
      id: 'paypal',
      label: 'PayPal',
      status: 'soon',
      href: null,
      note: 'Business PayPal link coming once the profile is set up.',
    },
    {
      id: 'cashapp',
      label: 'Cash App',
      status: 'soon',
      href: null,
      note: 'Cash App $cashtag coming once the business profile is set up.',
    },
  ] satisfies TipMethod[],
} as const;
