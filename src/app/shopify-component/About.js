import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <>
            <section className="w-full pt-20 relative md:pt-[86px] xl:pt-[130px]" id="aboutSection">
                <div className="container">
                    <div className='text-center bg-black rounded-[4px] p-8 lg:p-10 xl:p-[42px] grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 lg:gap-x-6 items-end border border-[#252B37] xl:gap-x-20'>
                        <div className='w-full relative lg:col-span-5 flex items-center justify-center'>
                            <img src="/assets/images/shopify/person.png" alt="Person" className='w-full h-full' />

                            <div className='absolute cursor-pointer flex items-center justify-center w-16 h-16 lg:w-[90px] lg:h-[90px] bg-first rounded-full play-icon hover:scale-110 transition-transform duration-300'>
                                <Image src="/assets/images/shopify/play-icon.svg" alt="quote icon" width={24} height={24} />
                            </div>
                        </div>
                        <div className='w-full lg:col-span-7 text-start font-onest'>
                            <h2 className='font-semibold text-2xl md:text-[34px] lg:text-[42px] text-white leading-[140%]'>
                                Trusted in the {" "} <br/> Netherlands
                            </h2>
                            <p className='text-sm lg:text-lg text-[#D5D7DA] font-normal mt-3 lg:mt-5'>
                                <span className='text-white font-semibold'>Dutch Quote:</span> Ik gaf hen een opdracht om iets in Shopify te ontwikkelen en zij hebben dit heel snel en professioneel opgepakt. Ik ben erg tevreden over hun service.
                            </p>

                            <p className='text-sm lg:text-base text-[#A4A7AE] font-normal mt-4 lg:mt-8'>
                                <span className='text-white font-medium'>“ Translation:</span> I gave them an assignment with developing in Shopify and they took care of it very quickly and professionally. I am very happy with their service.“
                            </p>

                            <h5 className='mt-12 lg:mt-[72px] text-first font-medium text-xl lg:text-2xl'> 
                                Jawad Doroe
                            </h5>
                            <h6 className='text-sm lg:text-lg text-[#D5D7DA] font-normal mt-1'>
                                Founder of laminaatspecialist.nl
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About