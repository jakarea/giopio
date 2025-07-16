import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <>
            <section className="w-full pt-20 relative md:pt-[86px] xl:pt-[130px]" id="aboutSection">
                <div className="container">
                    <div className="w-full">
                        <img src="/assets/images/about-elem-02.svg" alt="elem-01"
                            className="absolute left-[60px] top-[70px] z-30 xl:top-[304px] xl:left-[79%] xl:w-6 flying-elem-1" />
                        <img src="/assets/images/about-elem-01.svg" alt="elem-01"
                            className="absolute right-5 top-8 z-30 xl:right-[28%] xl:top-12 flying-elem-2" />
                        <img src="/assets/images/about-elem-03.svg" alt="elem-01"
                            className="hidden xl:flex absolute right-[40%] top-48 z-30 flying-elem-3" />
                        <img src="/assets/images/about-elem-04.svg" alt="elem-01"
                            className="hidden xl:flex absolute left-[30%] top-[50px] z-30 flying-elem-4" />
                    </div>

                    <div className="text-center xl:text-start">
                        <h2 className="text-lg font-medium text-first leading-[20px] sm:text-[20px] md:text-[24px] xl:text-[42px]">About
                            Giopio</h2>
                    </div>
                    <div className="w-full text-center xl:text-start mt-[18px] md:mt-8 xl:mt-11 2xl:mt-12">
                        <h3
                            className="text-2xl font-semibold leading-8 text-second max-w-[75%] mx-auto xl:mx-0 md:text-4xl xl:text-[52px] xl:leading-[65px] xl:max-w-[50%] anim dark:text-white">
                            Web Development
                            Agency <span className="sr-only">In Europe</span> With Decade
                            Year of Experience</h3>

                        <div className="xl:grid xl:items-end xl:grid-cols-2">
                            {/* <!-- only for desktop --> */}
                            <div className="hidden xl:flex xl:flex-col xl:gap-y-7 xl:mb-4 stats-container">
                                <div className="text-start stat">
                                    <h4
                                        className="text-2xl font-medium text-second leading-8 mb-1 md:text-[32px] anim dark:text-white subscribers-odometer odometer plus">
                                        90 +</h4>
                                    <p className="text-sm font-light text-fourth leading-5 anim dark:text-d-sixth">Project Complete</p>
                                </div>
                                <div className="text-start stat">
                                    <h4
                                        className="text-2xl font-medium text-second leading-8 mb-1 md:text-[32px] anim dark:text-white videos-odometer odometer plus">
                                        10 +</h4>
                                    <p className="text-sm font-light text-fourth leading-5 anim dark:text-d-sixth">In Progress</p>
                                </div>
                                <div className="text-start stat">
                                    <h4
                                        className="text-2xl font-medium text-second leading-8 mb-1 md:text-[32px] anim dark:text-white projects-odometer odometer plus">
                                        20 +</h4>
                                    <p className="text-sm font-light text-fourth leading-5 anim dark:text-d-sixth">Client Worldwide</p>
                                </div>
                            </div>
                            {/* <!-- only for desktop --> */}

                            <div className="xl:w-[80%] xl:ml-auto">
                                <p className="mt-8 common-para xl:mt-0 anim dark:text-d-fifth">When y​ou ch​oose Giopio, yo​u’re cho​osing
                                    e​xcellence.
                                    Wi​th a dec​ade of exp​erience, we’ve established
                                    oursel ves as a trus​ted we​bsite develo​pment agency
                                    in the US​A. O​ur t​eam has been recognized for deliverin​g
                                    exce​ptional results and un​matched service.</p>

                                <p className="mt-8 common-para anim dark:text-d-fifth">Giopio is a lead​ing nam​e in the re​alm of cust​om web
                                    ap​plication de​velopment, specializing in PHP web
                                    develop​ment an​d Laravel web dev​elopment. We of​fer
                                    a ra​nge of ser​vices, including outsource w​eb
                                    deve​lopment, e-com​merce dev​elopment solu​tions
                                    Faceb​ook app development, a​nd WordPr​ess
                                    theme dev​elopment</p>

                                <a href="/assets/images/document/giopio-business-profile-2025.pdf" download="giopio-business-profile-2025.pdf"
                                    className="btn-second relative group anim overflow-hidden px-4 xl:pl-0 xl:pr-8 xl:text-2xl">Download
                                    Company Profile
                                    <img src="/assets/images/angle-right.svg" alt=">"
                                        className="absolute w-[45px] -bottom-[22px] -left-12 group-hover:left-[90.5%] transition-all duration-300 ease-linear" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About