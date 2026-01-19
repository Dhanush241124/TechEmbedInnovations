import React from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * SchemaMarkup Component
 * Adds structured data (JSON-LD) to your website for search engines
 * This helps search engines better understand your content
 */
export default function SchemaMarkup() {
  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'TechEmbed Innovation',
    'url': 'https://techembedinnovation.in',
    'logo': 'https://techembedinnovation.in/logo.png',
    'description': 'Leading provider of IT solutions, AI training, and full-stack development',
    'foundingDate': '2023',
    'founder': [
      {
        '@type': 'Person',
        'name': 'Darshan'
      },
      {
        '@type': 'Person',
        'name': 'Dhanush'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/techembedinnovation',
      'https://twitter.com/techembedinnovation',
      'https://linkedin.com/company/techembedinnovation',
      'https://instagram.com/techembedinnovation'
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Support',
      'telephone': '+919008405328',
      'email': 'techembedinnovations@gmail.com'
    },
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN',
      'addressLocality': 'Bangalore',
      'postalCode': 'XXXXX' // Add your postal code
    }
  }

  // LocalBusiness schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'TechEmbed Innovation',
    'image': 'https://techembedinnovation.in/logo.png',
    'description': 'IT training, AI development, and full-stack development company',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Your Street Address', // Add your street address
      'addressLocality': 'Bangalore',
      'addressRegion': 'KA',
      'postalCode': 'XXXXX', // Add your postal code
      'addressCountry': 'IN'
    },
    'telephone': '+919008405328',
    'email': 'techembedinnovations@gmail.com',
    'url': 'https://techembedinnovation.in'
  }

  // Course/Education schema
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'TechEmbed Innovation',
    'url': 'https://techembedinnovation.in',
    'offers': [
      {
        '@type': 'Course',
        'name': 'AI & Machine Learning Training',
        'description': 'Comprehensive training in artificial intelligence and machine learning',
        'provider': {
          '@type': 'Organization',
          'name': 'TechEmbed Innovation'
        }
      },
      {
        '@type': 'Course',
        'name': 'Full-Stack Development',
        'description': 'Learn full-stack web development with modern frameworks',
        'provider': {
          '@type': 'Organization',
          'name': 'TechEmbed Innovation'
        }
      },
      {
        '@type': 'Course',
        'name': 'Embedded Systems',
        'description': 'Master IoT and embedded programming with real projects',
        'provider': {
          '@type': 'Organization',
          'name': 'TechEmbed Innovation'
        }
      }
    ]
  }

  return (
    <>
      <Helmet>
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        {/* Course/Education Schema */}
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      </Helmet>
    </>
  )
}

/**
 * HOW TO USE:
 * 
 * 1. Import this component in your App.jsx:
 *    import SchemaMarkup from './components/SchemaMarkup'
 * 
 * 2. Add it to your App component:
 *    <HelmetProvider>
 *      <SchemaMarkup />
 *      ... rest of your app
 *    </HelmetProvider>
 * 
 * 3. Update the schema fields:
 *    - Replace logo URL with your logo path
 *    - Add your physical address
 *    - Update founder names if needed
 *    - Add social media links
 *    - Add your street address and postal code
 * 
 * TESTING:
 * - Use Google's Rich Results Test: https://search.google.com/test/rich-results
 * - Paste your website URL and check for errors
 * 
 * BENEFITS:
 * - Improves search engine understanding of your content
 * - Enables rich snippets in search results
 * - Can improve click-through rates (CTR)
 * - Helps with voice search optimization
 * - Appears in Google Knowledge Graph
 */
