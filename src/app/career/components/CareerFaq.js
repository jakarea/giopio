'use client'
import OnWhatsapp from '@/app/components/OnWhatsapp';
import faqData from "../../../../data/faq/careerPage";
import React, { useState } from 'react';
import Image from 'next/image';

const CareerFaq = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq((prevActive) => (prevActive === index ? null : index));
  };

  return (
    <>
      <section className="w-full py-20 overflow-x-hidden md:py-24 lg:py-28 xl:py-[160px] anim dark:bg-[#222338] bg-white">
        <div className="container">
          <div className="text-center mb-12 relative xl:mb-24">
            <h2 className="text-4xl font-bold leading-[46px] text-second uppercase relative z-50 md:text-5xl xl:text-[100px] dark:text-white">FAQ</h2>
            <h3 className="text-[80px] font-extrabold text-[#F4F4F4] uppercase absolute left-[50%] translate-x-[-50%] top-[-90%] text-stroke md:text-[110px] md:top-[-130%] lg:text-[140px] lg:top-[-180%] xl:text-[20rem] xl:top-[-200%]">Questions</h3>
          </div>

          <div className="w-full md:pt-12 xl:max-w-[85%] xl:mx-auto relative z-40" id="faqWrapper">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="faq-item w-full border-b border-third dark:border-d-fifth flex-shrink-0 justify-between cursor-pointer mb-5 pb-5 group anim hover:border-second xl:pb-8 xl:mb-8"
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-header flex items-center justify-between">
                  <button
                    type="button"
                    className={`text-lg text-left font-light font-poppins tracking-[-1%] faq-title select-none text-second anim group-hover:opacity-100 xl:text-2xl dark:text-white ${activeFaq === index ? 'opacity-100' : 'opacity-80'}`}
                  >
                    {faq.question}
                  </button>
                  <div className={`faq-action anim shrink-0 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <Image
                      src="/assets/images/angle-bottom-icon-b.svg"
                      alt="^"
                      width={16}
                      height={16}
                      className="opacity-80 anim group-hover:opacity-100 w-4 ltd anim object-contain" />
                    <Image
                      src="/assets/images/angle-bottom-icon.svg"
                      alt="^"
                      width={16}
                      height={16}
                      className="opacity-80 anim group-hover:opacity-100 w-4 dtl anim object-contain" />
                  </div>
                </div>
                <div className={`faq-colapse anim ${activeFaq === index ? '' : 'hidden'}`}>
                  <div className="faq-body mt-4">
                    <p className="text-sm font-light leading-6 text-third xl:text-base dark:text-d-fifth">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* we are on whatsapp */}
          <div className="w-full mt-14 sm:mt-16 md:mt-20 lg:mt-[120px] xl:mt-[150px] sm:max-w-xs md:max-w-md sm:mx-auto xl:max-w-[85%] xl:mx-auto">
            <OnWhatsapp />
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerFaq;
