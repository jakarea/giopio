import Image from "next/image";
import AboutHero from "./components/About";
import Stats from "../home-components/Stats";
import Step from "./components/Step";
import CompanyProfile from "./components/CompanyProfile";
import Team from "./components/Team";
import meta from "../../../data/meta/about.json"

export const metadata = {
   ...meta
};
 
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": metadata.title,
  "description": metadata.description,
  "author": {
    "@type": "Person",
    "name": metadata.author,
  },
  "publisher": {
    "@type": "Organization",
    "name": metadata.openGraph.site_name,  
    "logo": {
      "@type": "ImageObject",
      "url": metadata.openGraph.images[0].url,  
    },
  },
  "datePublished": metadata.datePublished,  
  "dateModified": metadata.dateModified, 
  "image": metadata.openGraph.images[0].url,  
  "url": metadata.openGraph.url, 
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": metadata.openGraph.url, 
  },
};

export default function About() {
  return (
    <>
      {/* about hero */}
      <AboutHero />

      {/* stats */}
      <Stats />

      {/* step */}
      <Step />

      {/* company profile */}
      <CompanyProfile />

      {/* team */}
      <Team />

      {/* <script type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </script> */}

    </>
  );
}