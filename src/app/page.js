import Hero from "./home-components/Hero";
import About from "./about/components/About";
import Stats from "./home-components/Stats";
import Services from "./home-components/Services";
import RecentProject from "./home-components/RecentProject";
import RecentPost from "./home-components/RecentPost";
import Faq from "./home-components/Faq";
import Contact from "./home-components/Contact";
import homePageFaq from "../../data/faq/homePage";
import blogListData from "../../data/blog/items";
import ScrollDown from "./home-components/ScrollDown";
import meta from "../../data/meta/home.json"

export const metadata = {
  ...meta
};

export default function Home() {
  return (
    <>
      {/* hero */}
      <Hero />

      {/* scroll down */}
      <ScrollDown />

      {/* about */}
      <About />

      {/* stats */}
      <Stats />

      {/* services */}
      <Services />

      {/* recent project */}
      <RecentProject />

      {/* recent post */}
      <RecentPost blogData={blogListData} />

      {/* faq start */}
      <Faq faqData={homePageFaq} />

      {/* contact */}
      <Contact />

    </>
  );
}