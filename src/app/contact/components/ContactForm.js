import MainForm from '@/app/components/MainForm'
import React from 'react'
import companyProfile from '../../../../data/info/company-profile'
import Link from 'next/link'
import Image from 'next/image'

const ContactForm = () => {
    return (
        <>
            <section className="w-full py-20 relative md:py-24 lg:py-[150px] xl:py-[150px]">
                <div className="container">
                    <div className="text-start">
                        <h2
                            className="text-[28px] font-bold leading-9 text-second md:text-4xl lg:text-[50px] xl:text-[62px] xl:max-w-[60%] xl:leading-[78px] anim dark:text-white mb-[50px] md:mb-[70px] xl:mb-[100px]">
                            Have An Idea? Just Leave
                            a Message!</h2>

                        <Link href={`mailto:${companyProfile.email}`}
                            className="mt-16 text-2xl font-bold leading-8 text-first xl:text-[32px] md:mt-[70px] lg:mt-[80px] xl:mt-[100px]">
                            {companyProfile.email}</Link>

                        <div className="w-full mt-8 flex items-center gap-x-3 xl:mt-[62px] xl:block xl:max-w-[30%]">
                            <Image
                                src="/assets/images/gps-orange.svg"
                                alt="gps-orange"
                                width={30}
                                height={36}
                                layout='responsive'
                                className="xl:mb-6 xl:block object-contain max-w-8" />
                            <p className="font-medium text-second text-sm xl:font-semibold xl:text-2xl dark:text-d-fifth">
                                {companyProfile.location}</p>
                        </div>
                    </div>

                    {/* <!-- contact form start --> */}
                    <div className="w-full mt-20 xl:max-w-[70%] xl:ml-auto xl:-mt-[240px]">
                        <MainForm />
                    </div>
                    {/* <!-- contact form end --> */}
                </div>
            </section>
        </>
    )
}

export default ContactForm