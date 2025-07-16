import Link from 'next/link'
import React from 'react'

const Cta = () => {
    return (
        <>
            <section className="w-full relative z-40">
                <div className="container">
                    <div className="w-full bg-first py-[30px] px-[23px] md:p-[28px] lg:p-9 xl:pt-[99.50px] xl:pb-[87.50px] xl:px-[100px]">
                        <div className="text-center xl:text-start xl:grid xl:items-center xl:grid-cols-6 xl:gap-x-[100px]">
                            <div className="xl:col-span-4">
                                <p className="text-2xl font-semibold font-jakarta leading-8 xl:leading-10 text-new mx-4 xl:text-[32px] xl:ml-0">Have an amaizing idea
                                    in your mind?</p>

                                <p className="mt-4 xl:mt-5 text-sm leading-5 font-light text-new mb-4 xl:text-base xl:leading-7 xl:mb-0">We're here to
                                    help and answer any question you might have. We look forward to hearing from you.</p>
                            </div>

                            <Link href="/book-a-call"
                                className="btnz bg-second rounded-[1px] py-3 px-[18px] text-lg font-bold text-white inline-flex items-center justify-center anim hover:bg-white hover:text-second xl:text-[20px] xl:py-4 xl:px-5 xl:w-[60%] xl:col-span-2 xl:ml-auto xl:mb-0 gap-x-4">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Book a Call
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta