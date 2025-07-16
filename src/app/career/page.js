import CareerFaq from "./components/CareerFaq";
import CareerHero from "./components/CareerHero";
import CareerList from "./components/CareerList";
import JoinReason from "./components/JoinReason"; 
import meta from "../../../data/meta/career/index.json"
 
export const metadata = {
   ...meta
};

export default function Career() { 

  return (
    <>
      {/* career hero */}
      <CareerHero />

      {/* join reason */}
      <JoinReason />

      {/* career list */}
      <CareerList />

      {/* career faq */}
      <CareerFaq />
    </>
  );
}