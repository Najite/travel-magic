import Head from 'next/head';

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function Meta({
  title = '✈️ TravelMagic Plan Your Next Adventure with AI ',
  description = 'Discover, plan, and visualize your dream trips with AI.',
  image = '/public/carousel/travel.jpg',
  url = 'https://travel-magic-lovat.vercel.app/',
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OG Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Tags
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> */}
    </Head>
  );
}
