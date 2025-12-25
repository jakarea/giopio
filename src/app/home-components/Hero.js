import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="w-full pt-16 relative md:pt-20 xl:pt-32 2xl:pt-48 ">
                <div className="container">
                    <div className="text-start">
                        <div className="block xl:relative">
                            <div className='text-start flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:items-center gap-x-3 lg:gap-x-4 mb-2 lg:mb-2.5'>
                                <img src="/assets/images/trusted-badge.svg" alt="tusted badge" className="w-16 lg:w-[90px]" />
                                <p className='bg-white/5 border-white/10 border rounded-full py-2.5 text-white font-normal text-xs md:text-sm lg:text-base text-center w-fit px-8'>★★★★★ Rated 5/5 Dutch Founders
                                </p>
                            </div>
                            <h1
                                className="text-stroke text-[40px] font-extrabold leading-[50px] sm:text-[53px] md:text-[65px] lg:text-[100px] lg:leading-[110px] xl:text-[130px] xl:leading-[150px] xl:inline-block uppercase xl:font-black">SHOPIFY SCALING ENGINEERED</h1>
                        </div>

                        <h2
                            className="text-[40px] xl:min-h-[140px] font-extrabold leading-[60px] text-first sm:text-[60px] md:text-[70px] md:mt-3 lg:text-[100px] lg:leading-[110px] xl:text-[120px] xl:leading-[140px]">
                            &amp; COMPLIANT</h2>

                        <p className="mt-6 lg:mt-8 text-sm text-start font-light leading-[21px] text-third sm:text-base dark:text-d-fifth anim lg:text-xl">
                            Stop losing sales to slow mobile loading times and GDPR risks. We are the technical growth {" "} <br /> partner for Health & Wellness brands in the Netherlands.</p>

                        <div className='flex items-center mt-10 lg:mt-14 lg:justify-between flex-col lg:flex-row gap-y-10 lg:gap-y-0'>

                            <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 items-center gap-x-3'>
                                <Link href="/contact" className="relative group anim overflow-hidden anim bg-white rounded-[4px] py-2.5 px-3 lg:py-3.5 lg:px-5 font-medium text-black text-sm lg:text-lg inline-flex items-center gap-x-4">Get Free Speed Audit
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0.53125L12 6.53125M12 6.53125L6 12.5312M12 6.53125L0 6.53125" stroke="#101828" strokeWidth="1.5"/>
</svg>

                                </Link>
                                <Link href="/contact" className="relative group anim overflow-hidden anim bg-[#101828] rounded-[4px] py-2.5 px-3 lg:py-3.5 lg:px-5 font-medium text-white text-sm lg:text-lg inline-flex items-center gap-x-4 border border-[#414651]">Watch Client Results
                                    <Image src="/assets/images/arrow-right-w.svg" alt="angle right" className="w-3 lg:w-4 text-black" width={20} height="20" />
                                </Link>
                            </div>

                            <ul
                                className="flex items-center gap-x-3 md:gap-x-8 lg:gap-x-10 xl:gap-x-[42px] flex-wrap xl:flex-nowrap gap-y-3 xl:gap-y-0 font-onest feat-line py-2 lg:py-4 border-t border-white/20 border-b px-4 lg:px-11 justify-center">
                                <li>
                                    <p className="text-xs font-light text-fourth dark:text-seconday anim leading-5 xl:text-base">01. MOBILE SPEED</p>
                                </li>
                                <li>
                                    <p className="text-xs font-light text-fourth dark:text-seconday anim leading-5 xl:text-base">02. GDPR SHIELD</p>
                                </li>
                                <li>
                                    <p className="text-xs font-light text-fourth dark:text-seconday anim leading-5 xl:text-base">03. REVENUE UX</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero