// SEO Configuration for The Tyre Station Pvt Limited
export const siteConfig = {
  siteName: "The Tyre Station Pvt Limited",
  siteUrl: "https://www.thetyrestation.lk",
  defaultTitle: "The Tyre Station | Premium Tyre Import, Export & Distribution in Sri Lanka",
  defaultDescription: "Leading tyre importer, exporter & distributor in Sri Lanka led by Managing Director Lilan Fernando. Wholesale tyre supplier for dealers, retailers & fleet operators. 42+ years of excellence.",
  defaultKeywords: "tyre importer Sri Lanka, tyre distributor Colombo, wholesale tyres Sri Lanka, Lilan Fernando, Lilan Fernando Managing Director, The Tyre Station Lilan Fernando, bulk tyre supplier, tyre exporter Sri Lanka, commercial tyre distributor",
  
  // Business Information
  business: {
    name: "The Tyre Station (Private) Limited",
    legalName: "The Tyre Station (Pvt) Ltd",
    foundedYear: 1983,
    director: {
      name: "Lilan Fernando",
      fullName: "Mr. Lilan Fernando",
      title: "Managing Director",
      description: "Leading The Tyre Station with over 42 years of expertise in tyre import, export and distribution"
    },
    phone: "+94 71 3 885 885",
    email: "info@thetyrestation.lk",
    address: {
      street: "Pannipitiya",
      city: "Colombo",
      region: "Western Province",
      country: "Sri Lanka",
      postalCode: "10230"
    },
    geo: {
      latitude: "6.8650",
      longitude: "79.9300"
    },
    hours: "Mo-Su 07:00-22:30",
    priceRange: "$$",
  },

  // Social Media
  social: {
    facebook: "https://www.facebook.com/TTSpvtLtd/",
    linkedin: "",
    twitter: "",
    instagram: "",
    youtube: ""
  },

  // UK Office
  ukOffice: {
    name: "NUTYRE",
    address: "132, Great North Road, Hatfield, AL9 5JN, UK",
    phone: "07311 694 631",
    website: "https://www.nutyre.co.uk"
  },

  // Services
  services: [
    "Tyre Import & Export",
    "Wholesale Tyre Distribution",
    "Bulk Tyre Supply",
    "Commercial Tyre Supply",
    "Fleet Tyre Solutions",
    "International Tyre Trading"
  ],

  // Target Markets
  targetMarkets: [
    "Tyre Dealers & Retailers",
    "Auto Spare Parts Shops",
    "Fleet Operators",
    "Transport Companies",
    "International Buyers"
  ],

  // Brands
  brands: [
    "KINTO Tyres",
    // Add other brands here
  ],

  // Languages
  languages: ["en"],
  
  // Default OG Image
  ogImage: "https://www.thetyrestation.lk/og-image.jpg",
};

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: "The Tyre Station | Sri Lanka's Leading Tyre Importer Led by Lilan Fernando",
    description: "Trusted tyre import, export & wholesale distribution in Sri Lanka since 1983. Led by Managing Director Lilan Fernando. Premium quality tyres for dealers, retailers & fleet operators. Island-wide delivery.",
    keywords: "tyre importer Sri Lanka, Lilan Fernando, Lilan Fernando Tyre Station, wholesale tyre distributor, tyre supplier Colombo, Managing Director Lilan Fernando, bulk tyres Sri Lanka, The Tyre Station",
    path: "/",
  },
  about: {
    title: "About The Tyre Station | Led by Managing Director Lilan Fernando",
    description: "Learn about The Tyre Station (Pvt) Ltd - Sri Lanka's trusted tyre importer & distributor since 1983. Led by Managing Director Mr. Lilan Fernando. Award-winning service and 42+ years of excellence.",
    keywords: "The Tyre Station, Lilan Fernando, Lilan Fernando Managing Director, Lilan Fernando Tyre Station, Managing Director Lilan Fernando Sri Lanka, tyre distributor Sri Lanka, KINTO Tyres Sri Lanka, tyre import company",
    path: "/about",
  },
  services: {
    title: "Tyre Import, Export & Distribution Services | The Tyre Station",
    description: "Professional tyre import, export & wholesale distribution services in Sri Lanka. Premium quality tyres, competitive pricing, island-wide delivery for B2B clients.",
    keywords: "tyre import services Sri Lanka, tyre export company, wholesale tyre distribution, bulk tyre supply, commercial tyre supplier, B2B tyre trading",
    path: "/services",
  },
  brands: {
    title: "Premium Tyre Brands We Distribute | The Tyre Station Sri Lanka",
    description: "Authorized distributor of KINTO Tyres and other premium international tyre brands in Sri Lanka. Quality assured, competitively priced wholesale tyres.",
    keywords: "KINTO Tyres Sri Lanka, tyre brands Sri Lanka, premium tyres distributor, authorized tyre dealer, wholesale tyre brands",
    path: "/brands",
  },
  tyres: {
    title: "Premium Tyres Catalog | The Tyre Station - Wholesale Supplier",
    description: "Browse our extensive catalog of premium tyres for all vehicle types. Wholesale pricing for dealers and bulk buyers. Quality guaranteed.",
    keywords: "tyre catalog Sri Lanka, wholesale tyre prices, bulk tyres, commercial tyres, passenger car tyres, SUV tyres, truck tyres",
    path: "/tyres",
  },
  contact: {
    title: "Contact The Tyre Station | Tyre Import & Distribution Inquiries",
    description: "Contact The Tyre Station for tyre import, export and wholesale distribution inquiries. Serving dealers, retailers and fleet operators across Sri Lanka.",
    keywords: "contact tyre distributor Sri Lanka, tyre wholesale inquiry, bulk tyre order, The Tyre Station contact, tyre supplier Colombo",
    path: "/contact",
  },
  events: {
    title: "Latest Events & Promotions | The Tyre Station Sri Lanka",
    description: "Stay updated with The Tyre Station's latest events, dealer promotions, product launches and industry news. Premium tyre solutions and special offers.",
    keywords: "tyre promotions Sri Lanka, dealer events, tyre industry news, product launches, The Tyre Station updates",
    path: "/events",
  },
  dealerMap: {
    title: "Find Authorized Dealers | The Tyre Station Network Sri Lanka",
    description: "Locate authorized The Tyre Station dealers across Sri Lanka. Our nationwide network ensures quality tyre solutions near you.",
    keywords: "tyre dealers Sri Lanka, The Tyre Station dealers, authorized tyre retailer, tyre shop near me, dealer locations",
    path: "/dealer-map",
  },
};

// Schema.org structured data generators
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.siteUrl}/#organization`,
  name: siteConfig.business.name,
  legalName: siteConfig.business.legalName,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/logo.png`,
  description: siteConfig.defaultDescription,
  foundingDate: `${siteConfig.business.foundedYear}`,
  email: siteConfig.business.email,
  telephone: siteConfig.business.phone,
  founder: {
    "@type": "Person",
    name: siteConfig.business.director.name,
    jobTitle: siteConfig.business.director.title,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.business.address.street,
    addressLocality: siteConfig.business.address.city,
    addressRegion: siteConfig.business.address.region,
    addressCountry: siteConfig.business.address.country,
    postalCode: siteConfig.business.address.postalCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.business.geo.latitude,
    longitude: siteConfig.business.geo.longitude,
  },
  sameAs: Object.values(siteConfig.social).filter(Boolean),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.business.phone,
    contactType: "Customer Service",
    email: siteConfig.business.email,
    availableLanguage: ["English"],
  },
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  "@id": `${siteConfig.siteUrl}/#localbusiness`,
  name: siteConfig.business.name,
  image: `${siteConfig.siteUrl}/og-image.jpg`,
  url: siteConfig.siteUrl,
  telephone: siteConfig.business.phone,
  email: siteConfig.business.email,
  priceRange: siteConfig.business.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.business.address.street,
    addressLocality: siteConfig.business.address.city,
    addressRegion: siteConfig.business.address.region,
    postalCode: siteConfig.business.address.postalCode,
    addressCountry: siteConfig.business.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.business.geo.latitude,
    longitude: siteConfig.business.geo.longitude,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    opens: "07:00",
    closes: "22:30",
  },
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteConfig.siteUrl}${item.url}`,
  })),
});

export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  brand: string;
  price?: number;
  currency?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  brand: {
    "@type": "Brand",
    name: product.brand,
  },
  ...(product.price && {
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency || "LKR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.business.name,
      },
    },
  }),
});

export const generatePersonSchema = (person: {
  name: string;
  jobTitle: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.jobTitle,
  ...(person.image && { image: person.image }),
  worksFor: {
    "@type": "Organization",
    name: siteConfig.business.name,
  },
});

export const generateWebPageSchema = (page: {
  title: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.siteUrl}${page.url}`,
  url: `${siteConfig.siteUrl}${page.url}`,
  name: page.title,
  description: page.description,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.siteName,
  },
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});