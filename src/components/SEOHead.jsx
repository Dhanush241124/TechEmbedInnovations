import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEOHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = 'https://techembedinnovation.in/public/images/favicon.svg',
  ogUrl,
  canonicalUrl,
  author = 'TechEmbed Innovation',
  imageAlt = 'TechEmbed Innovation'
}) {
  const fullTitle = `${title} | TechEmbed Innovation`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />

      {/* Open Graph Tags - Works on all platforms */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="TechEmbed Innovation" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content="@techembed" />
      <meta name="twitter:creator" content="@techembed" />

      {/* Apple Tags - iOS optimization */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="TechEmbed" />

      {/* Android Tags */}
      <meta name="theme-color" content="#667eea" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  )
}
