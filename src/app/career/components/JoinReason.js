import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const JoinReason = () => {
    return (
        <>
            <div className="w-full py-10 xl:py-[150px] xl:bg-white dark:bg-[#222338] anim">
                <div className="container">
                    <div className="grid xl:grid-cols-2 xl:gap-x-[140px]">
                        <div className="txt mt-10 order-2 xl:order-1 xl:mt-0">
                            <h2 className="font-bold text-2xl text-second xl:text-4xl xl:leading-[45px] dark:text-white">Why you Should Join Our
                                Awesome Team</h2>
                            <p className="common-para mt-4 mb-8 !text-sm !leading-7 xl:mb-16 dark:text-d-sixth">we want to feel like home when you are working at JMC(Japan
                                Marketing &
                                Consultancy Limited) & for that we have curated a great set of benefits for you.It all starts with the free
                                lunch!</p>

                            <Link href="#" className="btn-second !text-second !border-second relative group anim overflow-hidden !pr-8 xl:text-xl dark:!text-white dark:!border-white">Discover more about Giopio
                            </Link>
                        </div>
                        <div className="order-1 xl:order-2">
                            <Image
                                src="/assets/images/team-photo.webp"
                                alt="team photo"
                                width={550}
                                height={350}
                                quality={100}
                                layout='responsive'
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinReason