import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Protocol = () => {
    return (
        <>
            <section className="w-full pt-20 relative md:pt-[86px] xl:pt-[130px]" id="aboutSection">
                <div className="container">

                    <div className="relative text-center mb-10 lg:mb-[60px]">
                        <h2 className="text-2xl font-semibold text-white md:text-[34px] xl:text-[48px] leading-[140%] font-onest">The Giopio accelerator protocol</h2>
                        <p className='font-normal text-sm lg:text-lg text-[#E9EAEB] mt-2'>Most Shopify stores fail in three hidden areas. We fix them all.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-x-6'>
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#26404C4D] p-6 xl:p-10 mt-8 relative group anim bg-[#F6F6F8] md:mt-0 anim
                             dark:bg-[#1B1C31] dark:border-[#252B37] dark:hover:bg-first">

                            <div className="relative z-40">
                                <h4 className="text-2xl xl:text-[32px] font-semibold leading-8 text-second group-hover:text-white anim dark:text-white">
                                    Audit &amp; Strip
                                </h4>

                                <p
                                    className={`mt-16 md:mt-18 lg:mt-[100px] font-poppins text-sm md:text-base xl:text-base font-normal leading-7 text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                    We analyze your Liquid code line-by-line. We remove unused JavaScript, compress assets, and fix Core Web Vitals errors (LCP/CLS) that apps can't touch.
                                </p>
                            </div>
                        </div>
                        {/* card */}
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#26404C4D] p-6 xl:p-10 mt-8 relative group anim bg-[#F6F6F8] md:mt-0 anim
                             dark:bg-[#1B1C31] dark:border-[#252B37] dark:hover:bg-first">

                            <div className="relative z-40">
                                <h4 className="text-2xl xl:text-[32px] font-semibold leading-8 text-second group-hover:text-white anim dark:text-white">
                                    Engineer & Secure
                                </h4>

                                <p
                                    className={`mt-16 md:mt-18 lg:mt-[100px] font-poppins text-sm md:text-base xl:text-base font-normal leading-7 text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                   We rebuild your theme's core infrastructure. We implement server-side tracking and a compliant cookie banner that maximizes data capture legally.

                                </p>
                            </div>
                        </div>
                        {/* card */}
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#26404C4D] p-6 xl:p-10 mt-8 relative group anim bg-[#F6F6F8] md:mt-0 anim
                             dark:bg-[#1B1C31] dark:border-[#252B37] dark:hover:bg-first">

                            <div className="relative z-40">
                                <h4 className="text-2xl xl:text-[32px] font-semibold leading-8 text-second group-hover:text-white anim dark:text-white">
                                   Neuro - Optimize
                                </h4>

                                <p
                                    className={`mt-16 md:mt-18 lg:mt-[100px] font-poppins text-sm md:text-base xl:text-base font-normal leading-7 text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                    We redesign your Product Page and Checkout flow using psychological triggers (Trust, Urgency, Clarity) specifically for the Dutch consumer.
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

export default Protocol