import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OnWhatsapp = () => {
    return (
        <>
            <div className="flex xl:inline-flex gap-y-4 flex-col xl:flex-row bg-[#2C4855] p-4 rounded-lg xl:rounded-full items-center gap-x-[14px] xl:pl-[32px] relative z-50 !font-jakarta anim dark:bg-[#2B2C42]">
                <p className="text-white font-normal text-lg md:text-2xl xl:text-[32px]">Quick Question? We're on</p>
                <Link target='_blank' href="https://api.whatsapp.com/send/?phone=8801728247398&text&type=phone_number&app_absent=0" className="group flex xl:inline-flex w-full xl:w-auto items-center justify-center bg-[#00CD62] h-[50px] lg:h-[68px] px-[18px] rounded-full text-base xl:text-2xl font-medium text-new hover:text-[#26404C] dark:text-[#26404C] dark:hover:text-opacity-80">
                    <Image
                        src="/assets/images/whatsapp.svg"
                        width={32}
                        height={32}
                        alt="whatsapp icon"
                        className="mr-2 w-6 xl:w-auto anim" />
                    WhatsApp
                </Link>
            </div>
        </>
    )
}

export default OnWhatsapp