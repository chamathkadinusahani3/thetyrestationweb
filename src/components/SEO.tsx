import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../utils/seo-config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: object | object[];
  canonical?: string;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  schema,
  canonical,
  noindex = false,
}) => {
  const siteTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.defaultTitle;
  const siteDescription = description || siteConfig.defaultDescription;
  const siteKeywords = keywords || siteConfig.defaultKeywords;
  const siteImage = image || siteConfig.ogImage;
  const siteUrl = url ? `${siteConfig.siteUrl}${url}` : siteConfig.siteUrl;
  const canonicalUrl = canonical || siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      {author && <meta name="author" content={author} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />

      {/* Additional SEO tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="LK" />
      <meta name="geo.placename" content="Colombo, Sri Lanka" />
      <meta name="geo.position" content={`${siteConfig.business.geo.latitude};${siteConfig.business.geo.longitude}`} />
      <meta name="ICBM" content={`${siteConfig.business.geo.latitude}, ${siteConfig.business.geo.longitude}`} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;