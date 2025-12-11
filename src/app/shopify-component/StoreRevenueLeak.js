import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StoreRevenueLeak = () => {
    return (
        <>
            <section className="w-full pt-20 relative md:pt-[86px] xl:pt-[130px]" id="aboutSection">
                <div className="container">

                    <div className="relative text-center mb-10 lg:mb-[60px]">
                        <h2 className="text-2xl font-semibold text-white md:text-[34px] xl:text-[48px] leading-[140%] font-onest">Is your store leaking revenue?</h2>
                        <p className='font-normal text-sm lg:text-lg text-[#E9EAEB] mt-2'>Most Shopify stores fail in three hidden areas. We fix them all.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-x-6'>
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#26404C4D] p-6 xl:p-10 mt-8 relative group anim bg-[#F6F6F8] md:mt-0 anim
                             dark:bg-[#1B1C31] dark:border-[#252B37] dark:hover:bg-first">
                            <img src='/assets/images/shopify/leak-icon-01.svg' alt='icon' />
                            <div className="relative z-40">
                                <h4 className="text-xl xl:text-2xl font-semibold leading-8 text-second group-hover:text-white anim dark:text-white mt-6 lg:mt-[42px]">
                                    Mobile Lag
                                </h4>

                                <p
                                    className={`mt-3.5 font-poppins text-sm xl:text-base font-normal leading-7 tracking-[-1%] text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                    53% of Dutch visitors leave if your site takes {'>'} 3 seconds to load. We cut bloat to get you under 1.5s.
                                </p>
                            </div>
                        </div>
                        {/* card */}
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#26404C4D] p-6 xl:p-10 mt-8 relative group anim bg-[#F6F6F8] md:mt-0 anim
                             dark:bg-[#1B1C31] dark:border-[#252B37] dark:hover:bg-first">
                            <img src='/assets/images/shopify/leak-icon-02.svg' alt='icon' />
                            <div className="relative z-40">
                                <h4 className="text-xl xl:text-2xl font-semibold leading-8 text-second group-hover:text-white anim dark:text-white mt-6 lg:mt-[42px]">
                                    GDPR & Tracking
                                </h4>

                                <p
                                    className={`mt-3.5 font-poppins text-sm xl:text-base font-normal leading-7 tracking-[-1%] text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                   Google Ads now blocks data for non-compliant stores. We implement Consent Mode V2 so you keep your data safe.

                                </p>
                            </div>
                        </div>
                        {/* card */}
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#26404C4D] p-6 xl:p-10 mt-8 relative group anim bg-[#F6F6F8] md:mt-0 anim
                             dark:bg-[#1B1C31] dark:border-[#252B37] dark:hover:bg-first">
                            <img src='/assets/images/shopify/leak-icon-03.svg' alt='icon' />
                            <div className="relative z-40">
                                <h4 className="text-xl xl:text-2xl font-semibold leading-8 text-second group-hover:text-white anim dark:text-white mt-6 lg:mt-[42px]">
                                   Checkout Drop-off
                                </h4>

                                <p
                                    className={`mt-3.5 font-poppins text-sm xl:text-base font-normal leading-7 tracking-[-1%] text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                   Confusing layouts kill sales. We apply neuromarketing UX tweaks to smooth the path to payment.
                                </p>
                            </div>
                        </div>
                        {/* card */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default StoreRevenueLeak