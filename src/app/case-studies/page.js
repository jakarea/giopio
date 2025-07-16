import Faq from "../home-components/Faq";
import resourcePageFaq from "../../../data/faq/resourcePage";
import Contact from "../home-components/Contact";
import CaseStudy from './components/CaseStudy';
import meta from "../../../data/meta/case-study/index.json"

export const metadata = {
    ...meta
};

export default function Resource() {

    return (
        <>
            {/* resourse main */}
            <CaseStudy />

            {/* faq */}
            <Faq faqData={resourcePageFaq} />

            {/* contact */}
            <Contact />
        </>
    );
}
