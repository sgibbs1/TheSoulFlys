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
 * Gallery photos from Best Shots.
 * g01–g15 are singer-approved IMG_* files; remaining are other Best Shots.
 */
export const galleryItems: GalleryItem[] = [
  {
    type: 'image',
    src: '/gallery/g13.jpg',
    alt: 'Cheryl Christmas singing live with The Soul Flys',
    caption: 'Soul at the mic',
    zoomOut: true,
  },
  {
    type: 'image',
    src: '/gallery/g16.jpg',
    alt: 'Cody Collum at the Korg Kronos under green lights',
    caption: 'Kronos time',
  },
  {
    type: 'image',
    src: '/gallery/g03.jpg',
    alt: 'TJ Cox on drums with Billy Bass on the right',
    caption: 'Rhythm section',
  },
  {
    type: 'image',
    src: '/gallery/g06.jpg',
    alt: 'TJ Cox behind the kit under green and purple lights',
    caption: 'Keep the pocket',
  },
  {
    type: 'image',
    src: '/gallery/g19.jpg',
    alt: 'Cody Collum and Shawn Gibbs mid-set',
    caption: 'Locked in',
  },
  {
    type: 'image',
    src: '/gallery/g17.jpg',
    alt: 'Billy Bass and TJ Cox — bass and drums',
    caption: 'Foundation',
  },
  {
    type: 'image',
    src: '/gallery/g05.jpg',
    alt: 'Billy Bass on stage with high-energy movement in the foreground',
    caption: 'High vibe',
    zoomOut: true,
    half: true,
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
    src: '/gallery/g22.jpg',
    alt: 'Cody Collum on keys in magenta stage fog',
    caption: 'Keys in the fog',
  },
  {
    type: 'image',
    src: '/gallery/g02.jpg',
    alt: 'Live performance moment from The Soul Flys',
    caption: 'On the deck',
  },
  {
    type: 'image',
    src: '/gallery/g20.jpg',
    alt: 'Billy Bass focused on five-string bass',
    caption: 'Low end',
  },
  {
    type: 'image',
    src: '/gallery/g07.jpg',
    alt: 'The Soul Flys live under stage lights',
    caption: 'Set the vibe',
  },
  {
    type: 'image',
    src: '/gallery/g01.jpg',
    alt: 'The Soul Flys live performance',
    caption: 'Night frequency',
  },
  {
    type: 'image',
    src: '/gallery/g25.jpg',
    alt: 'Cody Collum and TJ Cox on keys and drums',
    caption: 'Groove machine',
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
    src: '/gallery/g23.jpg',
    alt: 'Billy Bass performing live',
    caption: 'Bass face',
    zoomOut: true,
    half: true,
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
    src: '/gallery/g28.jpg',
    alt: 'TJ Cox at the drum kit',
    caption: 'Heartbeat',
    zoomIn: true,
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
    src: '/gallery/g29.jpg',
    alt: 'Shawn Gibbs at the mic with guitar',
    caption: 'Amped',
    zoomOut: true,
    half: true,
  },
  {
    type: 'image',
    src: '/gallery/g04.jpg',
    alt: 'Approved live shot of The Soul Flys',
    caption: 'Purple haze',
  },
  {
    type: 'image',
    src: '/gallery/g24.jpg',
    alt: 'Shawn Gibbs and Cody Collum on stage',
    caption: 'Six-string & keys',
  },
  {
    type: 'image',
    src: '/gallery/g26.jpg',
    alt: 'Billy Bass and TJ Cox under blue lights',
    caption: 'Hold the groove',
  },
  {
    type: 'image',
    src: '/gallery/g12.jpg',
    alt: 'The Soul Flys on stage at night',
    caption: 'Stage glow',
  },
  {
    type: 'image',
    src: '/gallery/g27.jpg',
    alt: 'Shawn Gibbs under purple stage lights',
    caption: 'Lead lines',
  },
  {
    type: 'image',
    src: '/gallery/g32.jpg',
    alt: 'The Soul Flys full band performing live',
    caption: 'All flys on deck',
  },
  {
    type: 'image',
    src: '/gallery/g21.jpg',
    alt: 'Shawn Gibbs and TJ Cox on guitar and drums',
    caption: 'Waterfront night',
  },
  {
    type: 'image',
    src: '/gallery/g33.jpg',
    alt: 'The Soul Flys full lineup on stage',
    caption: 'Full frequency',
  },
  {
    type: 'image',
    src: '/gallery/g30.jpg',
    alt: 'Shawn Gibbs and Cody Collum performing',
    caption: 'Side by side',
  },
  {
    type: 'image',
    src: '/gallery/g34.jpg',
    alt: 'The Soul Flys live on the wooden deck',
    caption: 'Deck show',
  },
  {
    type: 'image',
    src: '/gallery/g31.jpg',
    alt: 'Billy Bass on bass guitar',
    caption: 'Hold that note',
  },
  {
    type: 'image',
    src: '/gallery/g35.jpg',
    alt: 'The Soul Flys full band under the canopy',
    caption: 'Live on the deck',
  },
  {
    type: 'image',
    src: '/gallery/g36.jpg',
    alt: 'The Soul Flys full band under purple stage lights',
    caption: 'The whole crew',
  },
];

export function videoEmbedUrl(item: GalleryVideo): string {
  if (item.provider === 'vimeo') {
    return `https://player.vimeo.com/video/${item.id}`;
  }
  return `https://www.youtube-nocookie.com/embed/${item.id}`;
}
