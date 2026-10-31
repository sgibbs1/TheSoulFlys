export type GalleryImage = {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  /** Show the full photo with less crop */
  zoomOut?: boolean;
  /** Tighter crop focused on the subject */
  zoomIn?: boolean;
  /** Sit at half width (for side-by-side zoom-out pairs) */
  half?: boolean;
};

export type GalleryVideo = {
  type: 'video';
  provider: 'youtube' | 'vimeo';
  /** YouTube video id or Vimeo numeric id */
  id: string;
  title: string;
};

export type GalleryItem = GalleryImage | GalleryVideo;

/**
 * Curated gallery — strongest live shots only.
 * Newer outdoor-set photos are g37–g45.
 */
export const galleryItems: GalleryItem[] = [
  {
    type: 'image',
    src: '/gallery/g37.jpg',
    alt: 'The Soul Flys full band performing outdoors',
    caption: 'All in together',
  },
  {
    type: 'image',
    src: '/gallery/g13.jpg',
    alt: 'Cheryl Christmas singing live with The Soul Flys',
    caption: 'Soul at the mic',
    zoomOut: true,
  },
  {
    type: 'image',
    src: '/gallery/g42.jpg',
    alt: 'Cheryl Christmas mid-performance with arm raised',
    caption: 'Raise it up',
  },
  {
    type: 'image',
    src: '/gallery/g41.jpg',
    alt: 'Cheryl Christmas singing in profile outdoors',
    caption: 'Hit that note',
  },
  {
    type: 'image',
    src: '/gallery/g45.jpg',
    alt: 'Cheryl Christmas with hair flying mid-vocal',
    caption: 'Wind in the mic',
  },
  {
    type: 'image',
    src: '/gallery/g14.jpg',
    alt: 'Cheryl Christmas leaning back into a vocal moment',
    caption: 'Feel that note',
    zoomOut: true,
    half: true,
  },
  {
    type: 'image',
    src: '/gallery/g44.jpg',
    alt: 'Cheryl Christmas singing with The Soul Flys banner and SF drum logo',
    caption: 'Name on the kit',
    zoomOut: true,
    half: true,
  },
  {
    type: 'image',
    src: '/gallery/g38.jpg',
    alt: 'Shawn Gibbs playing a blue Les Paul with slide',
    caption: 'Slide lines',
  },
  {
    type: 'image',
    src: '/gallery/g18.jpg',
    alt: 'Shawn Gibbs playing lead guitar',
    caption: 'Front and center',
    zoomIn: true,
  },
  {
    type: 'image',
    src: '/gallery/g15.jpg',
    alt: 'Shawn Gibbs on Telecaster under purple stage lights',
    caption: 'Telecaster talk',
    zoomOut: true,
    half: true,
  },
  {
    type: 'image',
    src: '/gallery/g29.jpg',
    alt: 'Shawn Gibbs at the mic with guitar',
    caption: 'Amped',
    zoomOut: true,
    half: true,
  },
  {
    type: 'image',
    src: '/gallery/g43.jpg',
    alt: 'TJ Cox on drums mid-set outdoors',
    caption: 'Stick work',
  },
  {
    type: 'image',
    src: '/gallery/g28.jpg',
    alt: 'TJ Cox at the drum kit',
    caption: 'Heartbeat',
    zoomIn: true,
  },
  {
    type: 'image',
    src: '/gallery/g03.jpg',
    alt: 'TJ Cox on drums with Billy Bass on the right',
    caption: 'Rhythm section',
  },
  {
    type: 'image',
    src: '/gallery/g39.jpg',
    alt: 'TJ Cox and Billy Bass with The Soul Flys banner',
    caption: 'Pocket & banner',
  },
  {
    type: 'image',
    src: '/gallery/g40.jpg',
    alt: 'Cody Collum at the keys from behind',
    caption: 'From the bench',
  },
  {
    type: 'image',
    src: '/gallery/g16.jpg',
    alt: 'Cody Collum at the Korg Kronos under green lights',
    caption: 'Kronos time',
  },
  {
    type: 'image',
    src: '/gallery/g22.jpg',
    alt: 'Cody Collum on keys in magenta stage fog',
    caption: 'Keys in the fog',
  },
  {
    type: 'image',
    src: '/gallery/g20.jpg',
    alt: 'Billy Bass focused on five-string bass',
    caption: 'Low end',
  },
  {
    type: 'image',
    src: '/gallery/g11.jpg',
    alt: 'The Soul Flys live energy',
    caption: 'Contagious',
    zoomOut: true,
    half: true,
  },
  {
    type: 'image',
    src: '/gallery/g33.jpg',
    alt: 'The Soul Flys full lineup on stage',
    caption: 'Full frequency',
    zoomOut: true,
    half: true,
  },
  {
    type: 'image',
    src: '/gallery/g36.jpg',
    alt: 'The Soul Flys full band under purple stage lights',
    caption: 'The whole crew',
  },
  {
    type: 'image',
    src: '/gallery/g21.jpg',
    alt: 'Shawn Gibbs and TJ Cox on guitar and drums',
    caption: 'Waterfront night',
  },
];

export function videoEmbedUrl(item: GalleryVideo): string {
  if (item.provider === 'vimeo') {
    return `https://player.vimeo.com/video/${item.id}`;
  }
  return `https://www.youtube-nocookie.com/embed/${item.id}`;
}
