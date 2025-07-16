// src/pages/blog/index.js
import BlogList from "@/app/blogs/components/BlogList";  
import meta from "../../../data/meta/blog/index.json"

export const metadata = {
   ...meta
};

export default function Blog() {  

  return (
    <>
      <section className="w-full pt-24 pb-20 relative md:pt-28 lg:pt-32 xl:pt-[160px] xl:pb-[160px]">
        <div className="container">
          <div className="w-full">
            <img src="/assets/images/about-elem-02.svg" alt="elem-01"
              className="absolute left-[60px] top-[70px] z-30 xl:top-[304px] xl:left-[79%] xl:w-6 flying-elem-1" />
            <img src="/assets/images/about-elem-01.svg" alt="elem-01"
              className="absolute right-5 top-8 z-30 xl:right-[14%] xl:top-12 flying-elem-2" />
            <img src="/assets/images/about-elem-03.svg" alt="elem-01"
              className="hidden xl:flex absolute right-[75%] rotate-90 top-32 z-30 flying-elem-3" />
            <img src="/assets/images/about-elem-04.svg" alt="elem-01"
              className="hidden xl:flex absolute left-[30%] top-[50px] z-30 flying-elem-4" />
          </div>

          <div className="text-center mb-10 xl:mb-20 relative">
            <h2
              className="text-2xl font-bold leading-8 text-second sm:text-3xl md:text-4xl lg:text-6xl xl:text-[100px] anim dark:text-white">
              Recent Post
            </h2>
          </div>

          <BlogList /> 
        </div>
      </section>
    </>
  );
}