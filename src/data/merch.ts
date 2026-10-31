export type MerchProduct = {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  image: string;
  imageAlt: string;
};

export const merch = {
  currency: 'usd',
  checkoutReady: false,
  products: [
    {
      id: 'tee-gold',
      name: 'Gold Letter Tee',
      description: 'Black short-sleeve tee with THE SOUL FLYS stacked in gold glitter lettering.',
      priceCents: 2500,
      image: '/images/merch/tee-gold.jpg',
      imageAlt: 'Black The Soul Flys t-shirt with gold glitter lettering',
    },
    {
      id: 'tee-psychedelic',
      name: 'Psychedelic Flame Tee',
      description: 'Black short-sleeve tee with fiery psychedelic THE SOUL FLYS script.',
      priceCents: 2500,
      image: '/images/merch/tee-psychedelic.jpg',
      imageAlt: 'Black The Soul Flys t-shirt with orange psychedelic flame lettering',
    },
    {
      id: 'tee-circle',
      name: 'Circle Logo Tee',
      description: 'Black short-sleeve tee with the rainbow circle The Soul Flys logo.',
      priceCents: 2500,
      image: '/images/merch/tee-circle.jpg',
      imageAlt: 'Black The Soul Flys t-shirt with multicolor circle logo',
    },
  ] satisfies MerchProduct[],
} as const;

export function formatPrice(cents: number, currency = merch.currency): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
  }).format(cents / 100);
}
