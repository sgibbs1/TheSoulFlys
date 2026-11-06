export const band = {
  name: 'The Soul Flys',
  tagline: 'Psychedelic Soul Fusion',
  roots: 'High Energy · Soul-Infused Rock · Funkadelic Blues · Positive Vibe',
  heroLead:
    'High Energy · Soul-Infused Rock · Funkadelic Blues · Positive Vibe. Specializing in honest, soulful expression and immersive live shows. Hailing from North Alabama.',
  /** Short site / Open Graph description */
  shortDescription:
    "We are The Soul Flys, a Psychedelic Soul Fusion band with deep roots in Jazz, Rock, Funk, and Classic Punk. We don't just play a set—we build an entire world from the first note. Every show is a high-energy, contagious experience designed to pull you straight into the music.",
  phone: '(205) 855-8318',
  phoneHref: 'tel:+12058558318',
  bookingEmail: 'booking@thesoulflys.com',
  contactEmail: 'contact@thesoulflys.com',
  location: 'North Alabama',
  booking: {
    headline: 'Available for booking',
    intro:
      'Looking for a high-vibe live band? The Soul Flys bring psychedelic soul fusion to stages of every size.',
    events: [
      'Corporate and Private Events',
      'Live Music Venues',
      'Festivals',
      'Weddings',
    ],
  },
  award: {
    title: "People's Choice Band of the Year",
    detail:
      'Voted Best Band by The Sand Mountain Reporter — 1st place in the People\'s Choice Best Band category.',
  },
  journey: {
    headline: 'Our Journey',
    body: [
      "We are The Soul Flys, a Psychedelic Soul Fusion band with deep roots in Jazz, Rock, Funk, and Classic Punk. We don't just play a set—we build an entire world from the first note. Every show is a high-energy, contagious experience designed to pull you straight into the music.",
      'Our mission is to spread love and absolute freedom of self-expression while doing what we love. Join the journey, catch a show, and become part of a community that lives for the power of music.',
    ],
  },
  about: {
    headline: 'Psychedelic Funk & Soul-Infused Blues',
    intro:
      'The Soul Flys are a Psychedelic Funk & Soul-Infused Blues band with deep roots in Rock and Jazz. They set the vibe and create an immersive audio experience that resonates with your soul.',
    motto:
      'Life is too short to live without a bit of fun and funky vibes. The band is dedicated to bringing an unforgettable musical experience that blends soul, funk, and groove.',
    leftOfCenter: {
      title: 'Find your frequency',
      body:
        'We’re all about raw, honest music and a great time. By mixing the sounds we love and playing straight from the heart, we invite everyone to lose themselves in the groove with us—no rules, just vibe.',
    },
  },
  members: [
    {
      name: 'Cheryl Christmas',
      role: 'Lead Vocalist',
      photo: '/images/members/cheryl.jpg',
      photoAlt: 'Cheryl Christmas singing live',
      blurb:
        'Classically trained powerhouse with a deep penchant for Rock, Soul, and Blues.',
      details: ['Rhythm Guitar', 'Songwriter / Lyricist'],
    },
    {
      name: 'Shawn Gibbs',
      role: 'Lead Guitar',
      photo: '/images/members/shawn.jpg',
      photoAlt: 'Shawn Gibbs playing guitar live',
      blurb:
        "Weaving together searing leads and atmospheric textures to shape the core of the band's fusion sound.",
      details: [
        'Backup Vocalist',
        'Piano',
        'Violin',
        'Mandolin',
        'Saxophone',
      ],
    },
    {
      name: 'TJ Cox',
      role: 'Drums',
      photo: '/images/members/tj.jpg',
      photoAlt: 'TJ Cox on drums live',
      blurb:
        "The pocket-groove engine driving the band's rhythm with multi-instrumental instinct.",
      details: ['Bass', 'Guitar'],
    },
    {
      name: 'Cody Collum',
      role: 'Keyboard',
      photo: '/images/members/cody.jpg',
      photoAlt: 'Cody Collum at the keys live',
      blurb:
        'A multi-instrumental wizard layering soulful keys with roots-driven acoustic textures.',
      details: [
        'Backup Vocalist',
        'Guitar',
        'Banjo',
        'Melodica',
        'Harmonica',
        'Bass',
      ],
    },
    {
      name: 'Billy Christmas',
      role: 'Bass',
      photo: '/images/members/billy.jpg',
      photoAlt: 'Billy Christmas playing bass live',
      blurb:
        'The driving force at the low end, locking down a heavy, infectious pocket that keeps the room moving.',
      details: ['Rhythm Guitar', 'Trumpet'],
    },
  ],
} as const;

export const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/TheSoulFlys',
    label: 'Facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/cherylandthesoulflys',
    label: 'Instagram',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@the_soul_flys',
    label: 'TikTok',
  },
] as const;
