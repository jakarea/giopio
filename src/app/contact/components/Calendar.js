import Image from 'next/image'
import React from 'react'

const Calendar = () => {
    return (
        <>
            <div className="w-full py-10 relative z-40 xl:py-24">
                <div className="container">
                    {/* <!-- common-element start --> */}
                    <div className="w-full">
                        <Image
                            src="/assets/images/about-elem-02.svg"
                            alt="elem-01"
                            width={24}
                            height={24}
                            className="absolute left-[60px] top-[70px] z-30 xl:top-[304px] xl:left-[79%] xl:w-6 flying-elem-1" />
                        <Image
                            src="/assets/images/about-elem-01.svg"
                            alt="elem-02"
                            width={40}
                            height={39}
                            className="absolute right-5 top-8 z-30 xl:right-[14%] xl:top-12 flying-elem-2" />
                        <Image
                            src="/assets/images/about-elem-03.svg"
                            alt="elem-03"
                            width={133}
                            height={60}
                            className="hidden xl:flex absolute right-[75%] rotate-90 top-32 z-30 flying-elem-3" />
                        <Image
                            width={24}
                            height={24}
                            src="/assets/images/about-elem-04.svg"
                            alt="elem-04"
                            className="hidden xl:flex absolute left-[30%] top-[50px] z-30 flying-elem-4" />
                    </div>
                    {/* <!-- common-element end --> */}

                    <div className="text-center">
                        <div className="w-36 h-36 xl:w-[300px] xl:h-[300px] mx-auto">
                            <Image
                                src="/assets/images/team/jakarea-parvez.webp"
                                alt="jakarea-parvez"
                                width={300}
                                height={300}
                                layout='responsive'
                                className="rounded-full object-contain mx-auto w-full h-full"
                            />
                        </div>
                        <h1 className="font-medium text-2xl text-second my-4 xl:mt-[72px] xl:mb-[42px] xl:text-[42px] dark:text-d-fifth">Hi! I’m Jakarea,</h1>
                        <h2 className="font-bold text-second text-4xl xl:text-[72px] dark:text-white">Let’s Have A Talk</h2>
                    </div>

                    {/* <!-- calendar preview start --> */}
                    <div className="w-full my-8 max-w-5xl mx-auto xl:mt-[72px]">
                        <iframe
                            title="Calender"
                            src="https://calendly.com/jakareaparvez/30min?embed_domain=www.giopio.com&embed_type=Inline&hide_gdpr_banner=1&primary_color=FF9040"
                            className="w-full min-h-[670px]"
                        ></iframe>
                    </div>
                    {/* <!-- calendar preview end --> */}
                </div>
            </div>
        </>
    )
}

export default Calendar