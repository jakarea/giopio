import Link from 'next/link'
import React from 'react'
import menus from '../../../data/navbar/items';
import info from '../../../data/info/details';
import Image from 'next/image';
import NewslaterEmail from './SubscribeEmail';

const Footer = () => {
    return (
        <> 
        {/* dark:bg-[#222338] */}
            <footer
                className="w-full relative bg-second -mt-[150px] pt-[195px] pb-8 xl:mb-[50px] xl:max-w-[95%] xl:mx-auto xl:pt-[220px] anim">
                <div className="container">
                    <div className="w-full md:grid md:grid-cols-2 xl:grid-cols-4 relative z-30">

                        <div className="text-center md:col-span-2 xl:text-start">
                            <Link href="#" className="block">
                                <Image
                                    src="/assets/images/logo-white.svg"
                                    width={200}
                                    height={120}
                                    loading='lazy'
                                    alt="logo"
                                    className="mx-auto object-fill xl:w-[200px] xl:ml-0 max-w-[200px]" />
                            </Link>

                            <p className="my-8 text-white font-jakarta text-sm font-light leading-[25px] mx-6 xl:mx-0 xl:w-[68%]">
                                {info?.footer_description}
                            </p>
                            <p
                                className="text-white text-base font-normal leading-7 flex items-center gap-x-[6px] justify-center xl:mt-12 xl:justify-start">
                                <Image src="/assets/images/gps-icon.svg" alt="gps" width="20" height="20" />{info?.city}
                            </p>
                        </div>
                        <div className="w-[65%] mx-auto grid grid-cols-2 mt-[60px] sm:w-[50%] md:w-[90%] xl:mt-0 ">
                            <div className="text-start">
                                <p className="text-[20px] font-jakarta font-semibold leading-6 text-white pb-8">Pages</p>

                                <ul className="flex flex-col gap-y-[20px]">
                                    {menus.map((menu) => (
                                        <li key={menu.id}>
                                            <Link href={menu.url} className="text-sm font-normal text-white leading-5 block xl:font-light">{menu.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-start">
                                <p className="text-[20px] font-jakarta font-semibold leading-6 text-white pb-8">Support</p>
                                <ul className="flex flex-col gap-y-[20px]">
                                    <li><Link href="#" className="text-sm font-normal text-white leading-5 block xl:font-light">Terms &amp;
                                        Policy</Link></li>
                                    <li><Link href="#" className="text-sm font-normal text-white leading-5 block xl:font-light">24/7 Support</Link></li>
                                    <li><Link href="#" className="text-sm font-normal text-white leading-5 block xl:font-light">Easy Payments</Link>
                                    </li>
                                    <li><Link href="#" className="text-sm font-normal text-white leading-5 block xl:font-light">Security</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full text-center mt-[50px] xl:mt-0">
                            <p className="text-xl font-jakarta font-semibold text-white leading-6">Contact</p>

                            <ul className="mt-10 flex justify-center items-center gap-x-5 xl:pb-2">
                                {info?.social_media?.map((media, index) => (
                                    <li key={index}>
                                        <Link href={media.url} target='_blank'>
                                            <img src={`/assets/images/${media.name}-icon.svg`} alt={media.name} className='object-contain w-full h-full' />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="flex justify-center items-center gap-x-5 mt-[18px] xl:flex-col xl:gap-y-6 xl:ml-[64px] ">
                                <li>
                                    <Link href="#" className="flex items-center text-white font-normal text-sm gap-x-3 xl:font-light"><img
                                        src="/assets/images/call-icon.svg" alt="call symbol" width="14" height="15" />
                                        {info?.mobile}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:info@giopio.com" className="flex items-center text-white font-normal text-sm gap-x-3 xl:font-light"><img
                                        src="/assets/images/mail-icon.svg" alt="a" width={"100%"} height={"100%"} />
                                        {info?.email}
                                    </Link>
                                </li>
                            </ul>

                            {/* footer email box */}
                            <NewslaterEmail />
                            {/* footer email box */}
                        </div>
                    </div>
                    <div
                        className="text-center mt-10 pt-8 xl:pt-[50px] lg:mt-[60px] xl:mt-[100px] border-t border-white border-opacity-10 xl:pb-6">
                        <p className="text-xs font-normal text-white leading-5 xl:text-sm">&copy; 2025 . <span className="font-semibold">Giopio. All rights reserved</span></p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer