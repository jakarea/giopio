import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Cta = () => {
    return (
        <>
            <section className="w-full relative z-40 bg-[#222338] pt-16 lg:pt-[162px] ">
                <div className="container">
                    <div className="w-ful border-b border-[#414651] pb-10 lg:pb-[62px]">
                        <div className="text-start xl:grid xl:items-center xl:grid-cols-12">
                            <div className="xl:col-span-9">
                                <p className="text-2xl font-semibold font-jakarta leading-8 xl:leading-10 text-white xl:text-[48px]">Stop guessing start scaling</p>

                                <p className="mt-4 xl:mt-8 text-sm leading-5 font-light text-white/70 xl:max-w-[80%] mb-4 xl:leading-7 xl:mb-0 xl:text-lg">Get a manual video audit of your store’s Speed and Compliance gaps. No obligation.
</p>
                            </div>

                            <Link href="/contact" className="relative xl:col-span-3 w-fit ml-auto group anim overflow-hidden anim bg-white rounded-[4px] py-2.5 px-3 lg:py-3.5 lg:px-5 font-medium text-black text-sm lg:text-lg inline-flex items-center gap-x-4">Get my free audit
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0.53125L12 6.53125M12 6.53125L6 12.5312M12 6.53125L0 6.53125" stroke="#101828" stroke-width="1.5"/>
</svg>

                                </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta