export default function BlogSchema({ blog }) {
  const description = blog.description || blog.excerpt || blog.content?.substring(0, 160);
  const keywords = blog.keywords?.length ? blog.keywords : [blog.category, 'Giopio', 'Web Development'].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://giopio.com/blog/${blog.slug}#article`,
        "headline": blog.title,
        "description": description,
        "keywords": keywords.join(', '),
        "image": blog.feature_thumbnail || 'https://giopio.com/assets/images/blog-details.webp',
        "datePublished": blog.date,
        "dateModified": blog.date,
        "author": {
          "@type": "Organization",
          "@id": `https://giopio.com/#organization`,
          "name": blog.author || "Giopio Team",
          "url": "https://giopio.com"
        },
        "publisher": {
          "@type": "Organization",
          "@id": `https://giopio.com/#organization`,
          "name": "Giopio",
          "logo": {
            "@type": "ImageObject",
            "url": "https://giopio.com/assets/images/logo.svg"
          },
          "url": "https://giopio.com",
          "sameAs": [
            "https://www.facebook.com/giopio",
            "https://www.twitter.com/giopio",
            "https://www.linkedin.com/company/giopio",
            "https://www.instagram.com/giopio"
          ]
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://giopio.com/blog/${blog.slug}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://giopio.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://giopio.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": blog.title,
            "item": `https://giopio.com/blog/${blog.slug}`
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://giopio.com/#organization",
        "name": "Giopio",
        "url": "https://giopio.com",
        "logo": "https://giopio.com/assets/images/logo.svg",
        "description": "Giopio - Web Development & SEO Agency helping businesses grow online",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "USA"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-880-1728-247398",
          "contactType": "Customer Service",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://giopio.com/blog/${blog.slug}#webpage`,
        "url": `https://giopio.com/blog/${blog.slug}`,
        "name": blog.title,
        "description": description,
        "keywords": keywords.join(', '),
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://giopio.com/#website",
          "url": "https://giopio.com",
          "name": "Giopio"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": blog.feature_thumbnail || 'https://giopio.com/assets/images/blog-details.webp'
        }
      }
    ]
  };

  // Add FAQ schema if sections contain FAQs
  const faqSection = blog.sections?.find(section =>
    section.title.toLowerCase().includes('faq') ||
    section.title.toLowerCase().includes('frequently asked')
  );

  if (faqSection) {
    const faqs = faqSection.content?.match(/###\s+(.*?)\n\n([\s\S]*?)(?=\n###|\n\n\n|$)/g) || [];

    if (faqs.length > 0) {
      const faqItems = faqs.map(faq => {
        const match = faq.match(/###\s+(.*?)\n\n([\s\S]*)/);
        if (match) {
          return {
            "@type": "Question",
            "name": match[1].trim(),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": match[2].trim().substring(0, 500)
            }
          };
        }
        return null;
      }).filter(Boolean);

      if (faqItems.length > 0) {
        schema["@graph"].push({
          "@type": "FAQPage",
          "mainEntity": faqItems
        });
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
