import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paintfactory.lk';

const products = [
  {
    name: 'Aquashade Max',
    image: `${siteUrl}/products/product1.jpg`,
  },
  {
    name: 'Ultra Premium White',
    image: `${siteUrl}/products/product2.jpg`,
  },
  {
    name: 'Ultra Roof Coat',
    image: `${siteUrl}/products/product3.jpg`,
  },
  {
    name: 'Ultrashield White',
    image: `${siteUrl}/products/product4.jpg`,
  },
  {
    name: 'Standard Color',
    image: `${siteUrl}/products/product5.jpg`,
  },
  {
    name: 'Crack Bridging Premier',
    image: `${siteUrl}/products/product6.jpg`,
  },
];

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Discover our premium paint collection including Aquashade Max, Ultra Premium White, Ultra Roof Coat, Ultrashield White, Standard Color, and Crack Bridging Premier. High-quality paints manufactured in Sri Lanka.',
  keywords: [
    'Aquashade Max',
    'Ultra Premium White',
    'Ultra Roof Coat',
    'Ultrashield White',
    'Crack Bridging Premier',
    'paint products Sri Lanka',
    'premium paints',
  ],
  openGraph: {
    title: 'Our Products - Goldlac Paints Premium Collection',
    description:
      'Discover our premium paint collection including Aquashade Max, Ultra Premium White, Ultra Roof Coat, and more. High-quality paints manufactured in Sri Lanka.',
    url: `${siteUrl}/products`,
    images: [
      {
        url: `${siteUrl}/products/product1.jpg`,
        width: 1200,
        height: 628,
        alt: 'Goldlac Paints Products',
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/products`,
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  const productStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Goldlac Paints Products',
    description: 'Premium quality paint products manufactured in Sri Lanka',
    itemListElement: products.map((product, index) => ({
      '@type': 'Product',
      position: index + 1,
      name: product.name,
      image: product.image,
      brand: {
        '@type': 'Brand',
        name: 'Goldlac Paints',
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'Goldlac Paints',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kurunegala',
          addressCountry: 'LK',
        },
      },
      category: 'Paint & Coating',
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
      {children}
    </>
  );
}
