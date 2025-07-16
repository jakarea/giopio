'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import teamData from '../../../../data/team/members.json';
import Image from 'next/image';

const Team = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    return (
        <>
            <div className="w-full pt-20 pb-[60px] xl:py-[150px]">
                <div className="container">
                    <div className="text-center mb-[42px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px]">
                        <h3 className="text-[32px] font-semibold text-second leading-8 xl:text-[52px] xl:leading-[65px] anim dark:text-white">
                            Our <br /> Amazing Creators
                        </h3>
                    </div>
                    {/* <!-- team members --> */}
                    <div className="w-full grid relative z-50 gap-y-[60px] xl:grid-cols-12 xl:gap-y-[150px]">
                        {teamData.map((member, index) => (
                            <div key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(0)}
                                className="w-full flex items-center justify-start xl:col-span-6 xl:items-start">
                                <div className={`w-full group ${index % 2 !== 0 ? 'text-end' : ''}`}>
                                    <h4 className={`text-[28px] font-semibold leading-10  xl:text-[58px] dark:text-white group-hover:text-first anim ${index === hoveredIndex ? '!text-first' : 'text-second'}`}>{member.name}</h4>
                                    <h5
                                        className="text-lg font-normal leading-7 text-third font-poppins mt-2 xl:text-4xl xl:mt-9 anim dark:text-d-fifth">
                                        {member.designation}
                                    </h5>
                                    <ul
                                        className="mt-6 bg-[#F3F4F9] inline-flex px-6 py-[14px] border border-[#E8EBF0] rounded-full gap-x-[14px] xl:mt-[42px] xl:py-4 xl:px-8 xl:gap-x-[29px] anim dark:bg-[#FFFFFF0D] dark:border-[#E8EBF01A]">
                                        {member.social?.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.url} target="_blank">
                                                    <Image
                                                        src={`/assets/images/social/${item.platform}.svg`}
                                                        width="18"
                                                        height="14"
                                                        alt={item.platform} className="xl:w-[18px] ltd anim"
                                                    />
                                                    <Image
                                                        src={`/assets/images/social/${item.platform}-w.svg`}
                                                        alt={item.platform}
                                                        width="18"
                                                        height="14"
                                                        className="xl:w-[18px] dtl anim" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {/* Display the hovered member's image */}
                        <div className="hidden xl:block absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                            <Image
                                src={teamData[hoveredIndex]?.image}
                                alt={teamData[hoveredIndex]?.name}
                                title={teamData[hoveredIndex]?.name}
                                width={275}
                                height={300}
                                className="w-[125px] h-[125px] object-cover rounded-none xl:w-[275px] xl:h-[300px] border border-first anim"
                            />
                        </div>
                    </div>
                    {/* <!-- team members --> */}
                </div>
            </div>
        </>
    )
}

export default Team