import DataDontLie from "../shopify-component/DataDontLie";
import RevenueForm from "./RevenueForm";
import meta from "../../../data/meta/home.json"

export const metadata = {
  ...meta
};

export default function Revenue() {
  return (
    <>
          <section className="w-full pt-16 relative md:pt-20 xl:pt-32 xl:mb-32">
        <div className="container">
          <div className="text-center">
            <h1
              className="text-[30px] font-extrabold text-white sm:text-[60px] md:text-[70px] md:mt-3 lg:text-[82px] leading-[120%]">
              STOP LOSING REVENUE TO POOR CODE.
            </h1>

            <p className="mt-6 lg:mt-8 text-sm text-center font-normal leading-[21px] text-[#E9EAEB] sm:text-base dark:text-[#E9EAEB]anim lg:text-xl lg:max-w-[80%] lg:mx-auto">
              We don't use automated bots. Our Senior Laravel Engineers manually analyze your theme's Liquid code, Mobile Speed, and GDPR gaps to find hidden revenue leaks.</p>
          </div>
        </div>
      </section>
      <DataDontLie />
      <RevenueForm />
    </>
  );
}
