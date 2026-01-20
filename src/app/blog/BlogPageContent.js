'use client'
import { useState } from 'react';
import BlogList from "@/app/blog/components/BlogList";

export default function BlogPageContent() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <>
      <section className="w-full pt-16 relative md:pt-20 xl:pt-32 xl:pb-[60px]">
        <div className="container">
          <div className="text-center">
            <div className="flex items-center gap-x-3 justify-center">
              <h1
                className="text-stroke text-[30px] font-extrabold leading-[120%] sm:text-[43px] md:text-[65px] lg:text-[82px] uppercase xl:font-black">OUR </h1>

              <h2
                className="text-[30px] font-extrabold leading-[120%] text-first sm:text-[43px] md:text-[65px]">
                BLOG
              </h2>
            </div>

            <p className="mt-6 lg:mt-8 text-sm text-center font-normal leading-[21px] text-third sm:text-base lg:text-xl lg:max-w-[70%] lg:mx-auto anim dark:text-d-fifth">
              Insights from Giopio's Shopify experts. We share proven strategies, technical guides, and growth ideas to help ambitious brands build powerful, scalable Shopify stores.
            </p>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto relative mt-8 lg:mt-10">
              <input
                type="text"
                placeholder="Search articles by title, category, or keywords..."
                value={searchTerm}
                onChange={handleSearch}
                className="h-[58px] rounded-full py-[10px] pl-[30px] pr-14 bg-[#101828] block w-full text-white font-normal text-sm focus-visible:outline-none border border-transparent focus-within:border-first xl:h-[60px] xl:pl-[25px] anim dark:bg-[#101828] dark:text-white dark:placeholder:text-white/50"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-[60px] top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                type="button"
                className="group absolute right-[10px] top-[7px] py-3 focus-visible:outline-none h-[44px] rounded-full inline-flex justify-center items-center text-white font-normal px-4 leading-5 bg-first anim hover:bg-white hover:text-second"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {searchTerm && (
              <div className="mt-4 text-sm text-third dark:text-d-fifth">
                Showing results for: <span className="font-semibold text-first">"{searchTerm}"</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="w-full pb-12 md:pb-20 lg:pb-[120px]">
        <div className="container">
          <BlogList searchTerm={searchTerm} />
        </div>
      </section>
    </>
  );
}
