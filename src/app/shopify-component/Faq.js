'use client'
import OnWhatsapp from '@/app/components/OnWhatsapp';
import Link from 'next/link'
import React, { useState } from 'react'
import homePageFaq from "../../../data/faq/homePage";

const Faq = () => {
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
      <section className="w-full py-20 overflow-x-hidden md:py-24 lg:py-28 xl:py-[140px] anim font-onest">
        <div className="container">
           <div className="relative text-start mb-10 lg:mb-[60px]">
                        <h2 className="text-2xl font-semibold text-white md:text-[34px] xl:text-[48px] leading-[140%] ">Commonly asked by founders</h2>
            </div>

          <div className="w-full md:pt-12 relative z-40 flex flex-col gap-y-2.5" id="faqWrapper">
            {homePageFaq.map((faq, index) => (
              <div
                key={index}
                className="faq-item w-full border border-[#252B37] rounded-[4px] flex-shrink-0 justify-between cursor-pointer group anim py-3 px-4 lg:py-7 lg:px-8 bg-[#1B1C31]"
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-header flex items-center justify-between">
                  <button
                    type="button"
                    className={`text-base text-left font-light font-poppins tracking-[-1%] faq-title select-none text-white anim xl:text-2xl ${activeFaq === index ? 'opacity-100' : 'opacity-80'}`}
                  >
                    {faq.question}
                  </button>
                  <div className={`faq-action shrink-0 anim bg-[#101828] w-7 h-7 lg:w-10 lg:h-10 flex justify-center items-center rounded-[4px] group-hover:bg-white ${activeFaq === index && 'bg-white' }`}>
                    <svg className={`text-white anim group-hover:text-[#252B37] ${activeFaq === index && 'rotate-180 text-[#252B37]' }`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.530273 6L6.53027 12M6.53027 12L12.5303 6M6.53027 12L6.53027 2.62268e-07" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
                <div className={`faq-colapse anim ${activeFaq === index ? '' : 'hidden'}`}>
                  <div className="faq-body mt-4 lg:mt-6">
                    <p className="text-sm font-light leading-6 text-white opacity-90 xl:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

       
        </div>
      </section>
    </>
  )
}

export default Faq