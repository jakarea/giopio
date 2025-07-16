import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="w-full pt-16 relative md:pt-20 xl:pt-12 2xl:pt-36">
                <div className="container">
                    <div className="text-start">
                        <div className="block xl:relative">
                            <h1
                                className="text-stroke text-[44px] font-extrabold leading-[60px] sm:text-[53px] md:text-[65px] lg:text-[100px] lg:leading-[110px] xl:text-[140px] xl:leading-[150px] xl:inline-block uppercase xl:font-black">
                                YOUR PARTNER <br className="hidden xl:inline-block" />
                                IN WEB</h1>

                            <p
                                className="mt-8 text-sm font-light leading-[21px] text-third sm:text-base xl:text-lg xl:leading-7 hidden xl:inline-block xl:absolute xl:left-[33rem] xl:bottom-4 xl:mt-0 dark:text-d-fifth anim">
                                Are you looking for top-tier web design services and a reliable website development agency? Look no
                                further. Giopio is your dedicated partner in the digital realm, offering cutting-edge solutions tailored
                                to your specific needs, including extensive <strong>white-label services.</strong></p>
                        </div>

                        <h2
                            className="text-[44px] xl:min-h-[140px] font-extrabold leading-[60px] text-first sm:text-[60px] md:text-[70px] md:mt-3 lg:text-[100px] lg:leading-[110px] xl:text-[140px] xl:leading-[140px]">
                            DEVELOPMENT</h2>

                        {/* <p className="mt-8 text-sm font-light leading-[21px] text-third sm:text-base xl:hidden dark:text-d-fifth anim min-h-[105px]">
                            Are you looking for top-tier web design services and a reliable website development agency? Look no further.
                            Giopio is your dedicated partner in the digital realm, offering cutting-edge solutions tailored to your
                            specific needs, including extensive <strong>white-label services.</strong></p> */}

                        <ul
                            className="flex items-center mt-8 gap-x-4 mb-[52px] md:gap-x-8 lg:gap-x-10 xl:gap-x-[60px] md:mb-20 lg:mb-24 xl:mb-[120px] flex-wrap xl:flex-nowrap gap-y-3 xl:gap-y-0">
                            <li>
                                <p className="text-base font-light text-fourth dark:text-d-sixth anim leading-5 xl:text-[22px]"><span
                                    className="font-bold">01. </span>
                                    Design</p>
                            </li>
                            <li>
                                <p className="text-base font-light text-fourth dark:text-d-sixth anim leading-5 xl:text-[22px]"><span
                                    className="font-bold">02. </span>
                                    Development</p>
                            </li>
                            <li>
                                <p className="text-base font-light text-fourth dark:text-d-sixth anim leading-5 xl:text-[22px]"><span
                                    className="font-bold"> 03. </span>
                                    Maintenance</p>
                            </li>
                        </ul>

                        <Link href="/contact" className="btn-first relative group anim overflow-hidden anim">Get Started
                            <Image src="/assets/images/angle-right.svg" alt="angle right" width={55} height={55}
                                className="absolute w-[55px] -bottom-[28px] -left-12 group-hover:left-[82.5%] transition-all duration-300 ease-linear" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero