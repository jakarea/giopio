'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const ServiceCard = ({ service }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <div
                className="w-full border border-[#26404C4D] p-6 xl:p-10 mt-8 relative group anim bg-[#F6F6F8] md:mt-0 anim dark:bg-[#1B1C31] dark:border-[#FFFFFF1A]">
                <div
                    className="absolute left-0 top-0 w-full h-full bg-first z-20 anim scale-0 group-hover:scale-100 xl:left-[2.5%] xl:top-[2.5%] xl:w-[95%] xl:h-[95%]">
                </div>
                <div className="relative z-40">
                    <h4 className="text-xl xl:text-2xl font-semibold leading-8 text-second group-hover:text-white anim dark:text-white">
                        {service.title}
                    </h4>

                    <p
                        className={`mt-12 font-poppins text-sm xl:text-base font-normal leading-7 tracking-[-1%] text-third group-hover:text-white anim xl:mt-[100px] dark:text-d-fifth ${showMore ? '' : 'line-clamp-3'
                            }`}>
                        {service.description}
                    </p>

                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="anim inline-block mt-10 text-sm xl:text-lg font-semibold leading-6 text-second border-b-2 border-second pb-2 pr-8 group-hover:text-white group-hover:border-white relative group anim overflow-hidden dark:text-white dark:border-white"
                    >
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default ServiceCard