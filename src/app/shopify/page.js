import Hero from "../home-components/Hero";
import About from "../shopify-component/About";   
import Contact from "../home-components/Contact";  
import ScrollDown from "../home-components/ScrollDown";
import meta from "../../../data/meta/home.json"
import StoreRevenueLeak from "../shopify-component/StoreRevenueLeak";
import Protocol from "../shopify-component/Protocol";

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


      <br />
      <br />
      <br />

    </>
  );
}