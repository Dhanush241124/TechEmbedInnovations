import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEOHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = 'https://techembedinnovation.in/og-image.png',
  ogUrl,
  canonicalUrl,
  author = 'TechEmbed Innovation',
}) {
  const fullTitle = `${title} | TechEmbed Innovation`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="TechEmbed Innovation" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  )
}
