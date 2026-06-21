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
}
export const speakers: Speaker[] = [
  { name: 'Adam Oldfield', role: 'CEO, Fortitude Labs', img: '/images/box/speakers/Adam-Oldfield.jpeg' },
  { name: 'Amy Bathie', role: 'Head of Talent, Gattaca', img: '/images/box/speakers/Amy-Bathie.jpeg' },
  { name: 'Ellie Hibberd', role: 'Tech Specialist, Keybridge', img: '/images/box/speakers/Ellie-Hibberd.jpeg' },
  { name: 'Louise Wrench', role: 'COO, HarKaye Core Talent', img: '/images/box/speakers/Louise-Wrench.jpeg' },
  { name: 'Michelle Flynn', role: 'Health & Performance Coach', img: '/images/box/speakers/Michelle-Flynn.jpg' },
  { name: 'Rohan Shah', role: 'Co-founder, Reuben Sinclair', img: '/images/box/speakers/rohan-shah.webp' },
];

export interface AgendaItem {
  time: string;
  label: string;
  note: string;
}
export const agenda: AgendaItem[] = [
  { time: '09:30', label: 'Arrival', note: 'Doors open, coffee, first connections' },
  { time: '10:00', label: 'Kick-off & Keynote', note: 'The big opening to set the tone' },
  { time: '11:00', label: 'PechaKucha', note: 'Fast, punchy ideas, no waffle' },
  { time: '12:30', label: 'Collaboration', note: 'Heads together, problems cracked' },
  { time: '13:00', label: 'Lunch', note: 'A proper, varied spread' },
  { time: '14:00', label: 'Entertainment', note: 'Live music, DJ, magic, through to 5pm' },
];

export interface Highlight {
  title: string;
  body: string;
}
export const highlights: Highlight[] = [
  { title: 'Powerful stories', body: 'Real moments from people who have been there, told properly.' },
  { title: 'Impactful networking', body: 'The kind of room where the right conversation finds you.' },
  { title: 'Unique insights', body: 'Fresh thinking you cannot get from another slide deck.' },
  { title: 'Lasting connections', body: 'Relationships that keep paying off long after you leave.' },
  { title: 'Live entertainment', body: 'Live music, a DJ and close-up magic woven through the day.' },
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
