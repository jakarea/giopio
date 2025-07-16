"use client";

import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Draggable from 'react-draggable'

const FloatingBox = () => {
    return (
        <Draggable>
            <div id="floating-box" className="fixed right-4 bottom-4 z-[9999] cursor-move">
                <div className="flex bg-[#fbfafdfb] px-[14px] py-[10px] rounded-full w-full max-w-[330px] gap-x-3 border border-gray-200 shadow-two 
                items-center anim dark:bg-second dark:border-[#152933]">
                    <div className="text-start">
                        <Image 
                            src="/assets/images/team/jakarea-parvez.webp" 
                            alt="jakarea-parvez"
                            className="w-12 h-12 xl:w-20 xl:h-20 rounded-full object-cover" 
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="text-start pr-4 xl:pr-6">
                        <h4 className="text-2xl font-medium text-[#26404C] leading-6 anim dark:text-white">
                            Jakarea Parvez 
                        </h4>
                        <h5 className="text-sm font-normal text-[#26404C] opacity-80 leading-3 font-poppins mb-1 mt-1 anim dark:text-white">
                            Founder &amp; CEO
                        </h5>
                        <Link 
                            href="https://calendly.com/jakareaparvez/30min" 
                            target="_blank"
                            className="inline-flex bg-[#FF9040] py-[6px] px-[14px] rounded-full text-sm font-medium text-white mt-[6px] anim hover:bg-second dark:hover:!bg-white dark:hover:!text-second"
                        >
                            Book a Call
                        </Link>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default FloatingBox