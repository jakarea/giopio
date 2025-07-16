'use client'
import OnWhatsapp from '@/app/components/OnWhatsapp';
import Link from 'next/link'
import React, { useState } from 'react'

const Faq = ({ faqData }) => {
  const [activeFaq, setActiveFaq] = useState(null);
 
  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <>
      <section className="w-full bg-second py-20 overflow-x-hidden md:py-24 lg:py-28 xl:py-[160px] anim dark:bg-[#222338]">
        <div className="container">
          <div className="text-center mb-12 relative xl:mb-24">
            <h2 className="text-4xl font-bold leading-[46px] text-white uppercase relative md:text-5xl xl:text-[100px]">FAQ</h2>
            <h3 className="text-[80px] font-extrabold text-[#F4F4F4] uppercase absolute left-[50%] translate-x-[-50%] top-[-90%] text-stroke-3 md:text-[110px] md:top-[-130%] lg:text-[140px] lg:top-[-180%] xl:text-[20rem] xl:top-[-200%]">
              Questions
            </h3>
          </div>

          <div className="w-full md:pt-12 xl:max-w-[85%] xl:mx-auto relative z-40" id="faqWrapper">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="faq-item w-full border-b border-half flex-shrink-0 justify-between cursor-pointer mb-4 pb-4 md:mb-6 md:pb-6 xl:mb-8 xl:pb-8 group anim hover:border-white"
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-header flex items-center justify-between">
                  <button
                    type="button"
                    className={`text-base text-left font-light font-poppins tracking-[-1%] faq-title select-none text-white anim xl:text-2xl ${activeFaq === index ? 'opacity-100' : 'opacity-80'}`}
                  >
                    {faq.question}
                  </button>
                  <div className={`faq-action shrink-0 anim ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <img src="/assets/images/angle-bottom-icon.svg" alt="^" className="opacity-80 anim group-hover:opacity-100 w-4 h-4 object-contain xl:h-5 xl:w-5" />
                  </div>
                </div>
                <div className={`faq-colapse anim ${activeFaq === index ? '' : 'hidden'}`}>
                  <div className="faq-body mt-4">
                    <p className="text-sm font-light leading-6 text-white opacity-90 xl:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* we are on whatsapp */}
          {/* <div className="w-full mt-14 sm:mt-16 md:mt-20 lg:mt-[120px] xl:mt-[150px] sm:max-w-xs md:max-w-md sm:mx-auto xl:max-w-[85%] xl:mx-auto">
            <OnWhatsapp />
          </div> */}
          

        </div>
      </section>
    </>
  )
}

export default Faq