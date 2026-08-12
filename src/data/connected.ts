// ───────────────────────────────────────────────────────────────────
// CONNECTED 2026 - shared data + event config
// Edit content here and every section component updates automatically.
// ───────────────────────────────────────────────────────────────────

// Live Eventbrite event.
export const EVENTBRITE_URL =
  'https://www.eventbrite.co.uk/e/connected-2026-tickets-1984137264971';
export const EVENT_ID = '1984137264971';

// Embedded checkout (the in-page "buy window") requires Embedded Checkout
// to be switched on for this event in Eventbrite, and the event to be
// public/published. While it is off, the widget can fail with a CloudFront
// "Request blocked" error and leave a stuck loader, so we default to OFF:
// every ticket button simply opens the Eventbrite page in a new tab.
// Once Embedded Checkout is enabled in Eventbrite, set this to true.
export const EMBED_CHECKOUT = false;

// Optional prices. Leave '' to show a plain "Get tickets" CTA with no figure.
export const FULL_DAY_PRICE = '';
export const AFTERNOON_PRICE = '';

// Bar shots (used as the poster/background on individual sections).
export const boxShots = [
  '/images/box/Box1.webp',
  '/images/box/Box2.webp',
  '/images/box/Box3.webp',
  '/images/box/Box4.webp',
  '/images/box/Box5.webp',
];

// Hero carousel: bar shots interleaved with the people shots so the hero
// reads as an EVENT, not a bar. Used by the hero only.
export const heroShots = [
  '/images/box/people1.jpg',
  '/images/box/Box1.webp',
  '/images/box/people2.jpg',
  '/images/box/Box2.webp',
  '/images/box/people3.jpg',
  '/images/box/Box3.webp',
  '/images/box/Box4.webp',
  '/images/box/Box5.webp',
];

export interface Speaker {
  name: string;
  img: string;
  role?: string;
  talk?: string;
  bio?: string;
}
export const speakers: Speaker[] = [
  {
    name: 'Adam Oldfield',
    role: 'CEO, Fortitude Labs',
    img: '/images/box/speakers/Adam-Oldfield.jpeg',
    talk: 'Recruiters’ Marketing Guide, Staying Relevant and Not Boring People',
    bio: 'A bombastic marketing automation expert whose keynotes leave audiences motivated and ready to act. Widely regarded as one of the best new business minds in the industry, with digital marketing knowledge second to none, Adam delivers exactly what the title promises.',
  },
  {
    name: 'Amy Bathie',
    role: 'Head of Talent Management, Gattaca',
    img: '/images/box/speakers/Amy-Bathie.jpeg',
    talk: 'CTRL+ALT+CREATE',
    bio: 'A powerhouse Head of Talent Management at Gattaca, following roles at Morgan Hunt and Adecco, Amy has built her career shaping L&D that sticks in recruitment. Her session shows you how to reboot the way your business grows talent.',
  },
  {
    name: 'Barum Jeffries',
    role: 'Chief Ideas Officer, reclearn',
    img: '/images/box/Barum-Jeffries.jpeg',
    talk: 'The Science of Curiosity',
    bio: 'A gregarious trainer and consultant with 19 years in recruitment, Barum has trained 12,500+ consultants and 1,500+ managers across 60 recruitment businesses, turning good instincts into great questions. He brings his ICF coaching craft to the one skill that changes everything.',
  },
  {
    name: 'Ellie Hibberd',
    role: 'Tech Specialist, Keybridge IT Solutions',
    img: '/images/box/speakers/Ellie-Hibberd.jpeg',
    talk: 'IT: You Can Run but You Can’t Hide',
    bio: 'The new kid on the block. A dynamic, tech-savvy consultant who makes IT make sense: reliable support, straight-talking advice, zero jargon. Ellie reveals how rec tech stacks will evolve to meet what’s coming.',
  },
  {
    name: 'Donna Kennedy',
    role: 'Fractional CPO & M&A Integration Specialist',
    img: '/images/box/speakers/Donna-Kennedy.jpeg',
    talk: 'If You Got Hit by a Bus Tomorrow, What Would Your Agency Be Worth?',
    bio: 'An astute Fractional CPO and M&A integration specialist with 17 years’ board-level HR experience across 10+ acquisitions, Donna helps SMEs build the people infrastructure that drives valuation premiums pre-exit. She asks the question every owner avoids.',
  },
  {
    name: 'Michelle Flynn',
    role: 'Health & Performance Coach',
    img: '/images/box/speakers/Michelle-Flynn.jpg',
    talk: 'I Don’t Have Time. Yes, You Do',
    bio: 'An effervescent Health and Performance Coach and Breathwork Instructor, following 20 years in HR and recruitment. Trusted by Google, YouTube and Dell across 450+ talks, Michelle reveals the hidden levers behind sustainable high performance, minus the burnout.',
  },
  {
    name: 'Mike Ames',
    role: 'Recruitment Legend',
    img: '/images/box/mike-ames.jpg',
    talk: 'Building to Sell is a Mug’s Game. Here’s the Alternative',
    bio: 'A titan of recruitment, having grown and sold two multi-million-pound firms, Mike now helps SME owners build businesses that make them wealthy without ever having to sell, the alternative to the exit-or-bust mindset. He shares how.',
  },
  {
    name: 'Jaye Haynes & Louise Wrench',
    role: 'Co-founders, HarKaye Core Talent',
    img: '/images/box/HarKaye.png',
    talk: 'Crossing the Desk: Two Sides. One Truth',
    bio: 'Sagacious People Leaders with vast experience across Talent Acquisition, L&D and Talent Strategy in complex, international organisations. Both drive transformational people agendas and high-performing teams. On stage, they meet in the middle.',
  },
];

// Master of ceremonies (hosts the day, not a speaker).
export const mc: Speaker = { name: 'Simon Lewis', role: 'Your MC for the day', img: '/images/box/simon-lewis.png' };

export interface AgendaItem {
  time: string;
  label: string;
  note: string;
}
export const agenda: AgendaItem[] = [
  { time: '09:30', label: 'Arrival', note: 'Doors open, coffee, first connections' },
  { time: '10:00', label: 'Kick-off & Keynote', note: 'The big opening to set the tone' },
  { time: '10:30', label: 'PechaKucha', note: 'Fast, punchy ideas, no PowerPoint!' },
  { time: '12:00', label: 'Collaboration', note: 'Heads together, challenges cracked' },
  { time: '13:00', label: 'Lunch', note: 'A proper, varied spread' },
  { time: '14:00', label: 'Entertainment', note: 'Live KOSI podcast, band, DJ, magician and games, through to 5pm' },
];

export interface Highlight {
  title: string;
  body: string;
  logo?: string;
}
export const highlights: Highlight[] = [
  { title: 'Powerful stories', body: 'Real moments from people who have been there, told properly.' },
  { title: 'Impactful networking', body: 'The kind of room where the right conversation finds you.' },
  { title: 'Unique insights', body: 'Fresh thinking you cannot get from another slide deck.' },
  { title: 'Lasting connections', body: 'Relationships that keep paying off long after you leave.' },
  { title: 'Live entertainment', body: 'A live band, a DJ, a magician and games running right through the afternoon.' },
  { title: 'Live KOSI podcast', body: 'Kate O\'Neill and Saeed Bor recording live KOSI sessions on the day. Recruitment chat, no corporate waffle.', logo: '/images/box/kosipodcast_logo.jpeg' },
  { title: 'Pure energy', body: 'High tempo from the first handshake to the last track.' },
];

export interface Faq {
  q: string;
  a: string;
}
export const faqs: Faq[] = [
  {
    q: 'Who should attend?',
    a: 'Anyone working within a recruitment agency. Much of the content is aimed at business owners, directors, ops managers and heads of marketing, but there is something here for every role.',
  },
  {
    q: "What's the deal with the afternoon tickets?",
    a: 'Afternoon tickets are for those who cannot make the morning but still want to be part of the action, the live music, the DJ and the magic.',
  },
  {
    q: 'Is lunch included?',
    a: 'Yes. Everyone with a full-day pass enjoys a varied lunch.',
  },
  {
    q: 'Can I bring my team?',
    a: 'Absolutely. This event is built for teams, so bring the whole crew.',
  },
  {
    q: 'Is this open to suppliers?',
    a: 'For industry service providers the event is invite only. Drop us a line if you would like to be considered.',
  },
];
