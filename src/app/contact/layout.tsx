import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paintfactory.lk';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Goldlac Paints. Located at 310/2, Kuliyapitiya Road, Kithalawa, Kurunegala, Sri Lanka. Contact us via email at goldlac@yahoo.com or WhatsApp at +94772500061.',
  openGraph: {
    title: 'Contact Goldlac Paints - Get in Touch',
    description:
      'Get in touch with Goldlac Paints. Located in Kurunegala, Sri Lanka. Contact us via email or WhatsApp.',
    url: `${siteUrl}/contact`,
    images: [
      {
        url: `${siteUrl}/hero.jpg`,
        width: 1200,
        height: 628,
        alt: 'Contact Goldlac Paints',
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const localBusinessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: 'Goldlac Paints',
    image: `${siteUrl}/logo.jpg`,
    description:
      'Premium quality paints and coatings manufacturer in Sri Lanka. Excellence of New Generation.',
    url: siteUrl,
    telephone: '+94772500061',
    email: 'goldlac@yahoo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '310/2, Kuliyapitiya Road, Kithalawa',
      addressLocality: 'Kurunegala',
      addressRegion: 'North Western Province',
      postalCode: '60000',
      addressCountry: 'LK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '7.4813',
      longitude: '80.3650',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Sri Lanka',
    },
    sameAs: [
      'https://bizconnect.idb.gov.lk/listing/kurunegala/inks-chemicals-printing-materials/goldlac-paint-and-coating/',
      'https://www.facebook.com/profile.php?id=61556343994194',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessStructuredData),
        }}
      />
      {children}
    </>
  );
}
