export type GalleryImage = {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
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
 * Add photos under /public/gallery/ and list them here.
 * For videos, paste YouTube or Vimeo IDs (not full URLs).
 */
export const galleryItems: GalleryItem[] = [
  {
    type: 'image',
    src: '/gallery/placeholder-1.svg',
    alt: 'The Soul Flys on stage — placeholder',
    caption: 'Live energy — replace with your photos',
  },
  {
    type: 'image',
    src: '/gallery/placeholder-2.svg',
    alt: 'Band atmosphere — placeholder',
    caption: 'Soul fusion vibes',
  },
  {
    type: 'image',
    src: '/gallery/placeholder-3.svg',
    alt: 'Performance moment — placeholder',
    caption: 'High vibe nights',
  },
  // Example video entry — uncomment and set your YouTube (or Vimeo) id:
  // {
  //   type: 'video',
  //   provider: 'youtube',
  //   id: 'YOUR_YOUTUBE_VIDEO_ID',
  //   title: 'Live at …',
  // },
];

export function videoEmbedUrl(item: GalleryVideo): string {
  if (item.provider === 'vimeo') {
    return `https://player.vimeo.com/video/${item.id}`;
  }
  return `https://www.youtube-nocookie.com/embed/${item.id}`;
}
