import Hero from "../home-components/Hero";
import About from "../shopify-component/About";    
import ScrollDown from "../home-components/ScrollDown";
import meta from "../../../data/meta/home.json"
import StoreRevenueLeak from "../shopify-component/StoreRevenueLeak";
import Protocol from "../shopify-component/Protocol";
import DataDontLie from "../shopify-component/DataDontLie";
import ClientReview from "../shopify-component/ClientReview";

export const metadata = {
  ...meta
};

export default function Shopify() {
  return (
    <>
      {/* hero */}
      <Hero />

      {/* scroll down */}
      <ScrollDown />

      {/* about */}
      <About /> 

      {/* stoe evenue leak */}
      <StoreRevenueLeak />

      {/* services */}
       <Protocol /> 

       <DataDontLie />

       <ClientReview />


      <br />
      <br />
      <br />

    </>
  );
}