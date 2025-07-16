import Image from 'next/image'
import React from 'react'

const CareerHero = () => {
    return (
        <>
            <div className="w-full bg-[#f4efeb] py-14 xl:py-0 dark:bg-[#1B1C31] anim">
                <div className="container">
                    <div className="grid xl:grid-cols-2 xl:-ml-32">
                        <div className="img order-2 xl:order-1 xl:text-start">
                            <Image
                             src="/assets/images/chair.webp" 
                             width={600}
                             height={672}
                             layout='responsive'
                             loading="eager"
                             alt="chair image" />
                        </div>
                        <div className="txt order-1 text-center mb-4 xl:order-2 xl:mb-0 xl:flex xl:justify-center xl:items-center">
                            <h1 className="text-[40px] leading-[50px] font-aclonica relative xl:text-[120px] xl:leading-[140px] dark:text-white anim">
                                <Image
                                    src="/assets/images/career-title-icons.svg"
                                    alt="career-title-icons"
                                    width={20}
                                    height={30}
                                    layout='responsive'
                                    className="absolute left-0 -top-[55px] z-30 rotate-[-3deg]" />
                                We Are Growing
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerHero