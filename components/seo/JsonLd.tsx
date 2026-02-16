import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "One and Only Furniture",
  "description": "Premium office furniture solutions provider specializing in workstations, seating, meeting tables, and custom installations.",
  "url": "https://oneandonlyfurniture.com",
  "logo": "https://oneandonlyfurniture.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0123",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/oneandonlyfurniture",
    "https://www.facebook.com/oneandonlyfurniture"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "One and Only Furniture",
  "url": "https://oneandonlyfurniture.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://oneandonlyfurniture.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
