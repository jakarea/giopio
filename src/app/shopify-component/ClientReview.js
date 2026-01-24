import Image from 'next/image' 
import React from 'react'

const ClientReview = () => {
    return (
        <>
            <section className="w-full pt-20 relative md:pt-[86px] xl:pt-[130px]" id="aboutSection">
                <div className="container">
                    <div className='text-center bg-black rounded-[4px] p-8 lg:p-10 xl:p-[42px] grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 lg:gap-x-6 items-end border border-[#252B37] xl:gap-x-20'> 
                        <div className='w-full lg:col-span-7 text-start font-onest'>
                            <h2 className='font-semibold text-2xl md:text-[34px] lg:text-[40px] text-white leading-[140%]'>
                                Built by <span className='text-[#FF9040]'>Engineers</span>, not salesmen.
                            </h2>
                            <p className='text-sm lg:text-lg text-[#D5D7DA] font-normal mt-3 lg:mt-5'>
                               We are a team of senior Laravel & Shopify architects operating from Dhaka with European engineering standards.
                            </p>

                            <p className='text-sm lg:text-base text-[#A4A7AE] font-normal mt-4 lg:mt-8'>
                               Most agencies use drag-and-drop page builders that bloat your code. We don't. We write clean, semantic Liquid and JavaScript. We believe that a strong technical foundation is the best marketing strategy. If the code is clean, the sales will follow.
                            </p>

                            <div className='flex items-center gap-x-3 lg:gap-x-5 mt-12 lg:mt-[72px]'>
                                <ul className='flex items-center'>
                                    <li>
                                        <img src="/assets/images/jeff.webp" className='w-10 h-10 lg:w-[52px] lg:h-[52px] border-2 border-white rounded-full object-cover' />
                                    </li>
                                    <li className='-ml-5'>
                                        <img src="/assets/images/sem.webp" className='w-10 h-10 lg:w-[52px] lg:h-[52px] border-2 border-white rounded-full object-cover' />
                                    </li>
                                    <li className='-ml-5'>
                                        <img src="/assets/images/renzo.webp" className='w-10 h-10 lg:w-[52px] lg:h-[52px] border-2 border-white rounded-full object-cover' />
                                    </li>
                                    <li className='-ml-5'>
                                        <img src="/assets/images/roy-dolan.webp" className='w-10 h-10 lg:w-[52px] lg:h-[52px] border-2 border-white rounded-full object-cover' />
                                    </li>
                                     <li className='-ml-5'>
                                        <img src=" /assets/images/anthony-pearson.webp" className='w-10 h-10 lg:w-[52px] lg:h-[52px] border-2 border-white rounded-full object-cover' />
                                    </li>
                                   
                                </ul>
                                <div>
                                     <h5 className='text-white font-medium text-xl lg:text-2xl'> 
                               100+
                                </h5>
                                <h6 className='text-sm  text-[#A4A7AE] font-normal'>
                                    Trusted Customers
                                </h6>
                                </div>
                            </div> 
                        </div>
                         <div className='w-full relative lg:col-span-5 flex items-center justify-center'>
                            <img src="/assets/images/shopify/jakarea-parvez.jpeg" alt="Person" className='w-full h-[450px] object-cover' /> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClientReview