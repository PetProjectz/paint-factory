import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paintfactory.lk';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Goldlac Paints - Established in 2018, we are a Sri Lankan paint manufacturer committed to excellence. IDB verified business delivering premium quality paints with superior durability and professional finish.',
  openGraph: {
    title: 'About Goldlac Paints - Excellence of New Generation',
    description:
      'Established in 2018, Goldlac Paints is a Sri Lankan paint manufacturer committed to delivering premium quality paints. IDB verified business.',
    url: `${siteUrl}/about`,
    images: [
      {
        url: `${siteUrl}/hero.jpg`,
        width: 1200,
        height: 628,
        alt: 'About Goldlac Paints',
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
