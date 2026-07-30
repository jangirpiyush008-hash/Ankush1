import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '/', image = '/og-image.jpg', jsonLd }) {
  const url = `https://seniorchessacademy.com${path}`
  const fullTitle = title.includes('Senior Chess Academy') ? title : `${title} · Senior Chess Academy`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}
