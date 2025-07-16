import AnimatedText from '@/app/components/AnimatedText'
import Link from 'next/link'
import React from 'react'
import companyProfile from '../../../../data/info/company-profile.json'

const CompanyProfile = () => {
    return (
        <>
            <section className="w-full pt-20 relative md:pt-24 lg:pt-32 xl:pt-[210px]">
                <div className="container">
                    <div className="flex justify-between items-center relative">

                        <h2
                            className="absolute left-0 -top-[205%] md:-top-[235%] lg:-top-[105%] -z-30 bg-title xl:left-[-12%] xl:title-profile">
                            PROFILE</h2>
                        <h3 className="text-2xl font-medium text-first leading-[20px] lg:text-3xl xl:text-[42px]">Company
                            Profile
                        </h3>
                        <div
                            className="flex max-w-[45%] min-w-[45%] sm:min-w-[55%] sm:max-w-[55%] lg:min-w-[65%] lg:max-w-[65%] relative text-right justify-end pr-4 xl:min-w-[72%]">
                            <hr
                                className="h-[1px] w-full bg-second border-0 block absolute right-0 top-[50%] dark:bg-white anim xl:top-[52%]" />
                            {/* animated text */}
                            <AnimatedText numbers='01' />
                        </div>
                    </div>
                    <div className="flex mt-8 sm:mt-10 lg:mt-14">
                        <p className="common-para !text-second anim dark:!text-white max-w-[85%] lg:max-w-[50%] xl:max-w-[35%] anim">We are
                            constantly showing our awesome
                            works
                            in different kind of industries daily, see what
                            we’ve been up to!</p>
                    </div>

                    <div className="w-full mt-[42px] xl:mt-[50px]">
                        <table className="w-full lg:max-w-[70%] lg:ml-auto xl:max-w-[65%]">
                            <tbody>
                                <tr>
                                    <td className="w-[35%] xl:w-[30%] border-b border-[#26404C] pb-[30px] align-top">
                                        <p className="text-sm font-normal text-second leading-6 md:text-xl xl:text-2xl anim dark:text-white">Company
                                            Name</p>
                                    </td>
                                    <td className="border-b border-[#26404C] pb-[30px]">
                                        <h4
                                            className="text-base font-medium text-second leading-7 font-poppins md:text-2xl xl:text-[28px] xl:leading-[42px] anim dark:text-white">
                                            {companyProfile.name}
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px] align-top">
                                        <p className="text-sm font-normal text-second leading-6 md:text-xl xl:text-2xl anim dark:text-white">Location
                                        </p>
                                    </td>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px]">
                                        <h5
                                            className="text-base font-medium text-second leading-7 font-poppins md:text-2xl xl:text-[28px] xl:leading-[42px] anim dark:text-white">
                                            {companyProfile.location}
                                        </h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px] align-top">
                                        <p className="text-sm font-normal text-second leading-6 md:text-xl xl:text-2xl anim dark:text-white">
                                            Representative</p>
                                    </td>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px]">
                                        <h5
                                            className="text-base font-medium text-second leading-7 font-poppins md:text-2xl xl:text-[28px] xl:leading-[42px] anim dark:text-white">
                                            {companyProfile.representative}</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px] align-top">
                                        <p className="text-sm font-normal text-second leading-6 md:text-xl xl:text-2xl anim dark:text-white">Tin</p>
                                    </td>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px]">
                                        <h5
                                            className="text-base font-medium text-second leading-7 font-poppins md:text-2xl xl:text-[28px] xl:leading-[42px] anim dark:text-white">
                                            {companyProfile.tin}</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px] align-top">
                                        <p className="text-sm font-normal text-second leading-6 md:text-xl xl:text-2xl anim dark:text-white">Main
                                            Business</p>
                                    </td>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px]">
                                        <h5
                                            className="text-base font-medium text-second leading-7 font-poppins md:text-2xl xl:text-[28px] xl:leading-[42px] anim dark:text-white">
                                            {companyProfile.main_business}</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px] align-top">
                                        <p className="text-sm font-normal text-second leading-6 md:text-xl xl:text-2xl anim dark:text-white">Contact
                                            Number</p>
                                    </td>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px]">
                                        <h5
                                            className="text-base font-medium text-second leading-7 font-poppins md:text-2xl xl:text-[28px] xl:leading-[42px] anim dark:text-white">

                                            <Link href={`https://wa.me/${companyProfile.contact_number}`} target="_blank">
                                            +88 {companyProfile.contact_number}
                                            </Link>
                                        </h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px] align-top">
                                        <p className="text-sm font-normal text-second leading-6 md:text-xl xl:text-2xl anim dark:text-white">E-mail
                                        </p>
                                    </td>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px]">
                                        <h5
                                            className="text-base font-medium text-second leading-7 font-poppins md:text-2xl xl:text-[28px] xl:leading-[42px] anim dark:text-white">
                                            <Link href={`mailto:${companyProfile.email}`}>{companyProfile.email}</Link>
                                        </h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px] align-top">
                                        <p className="text-sm font-normal text-second leading-6 md:text-xl xl:text-2xl anim dark:text-white">Website
                                        </p>
                                    </td>
                                    <td className="border-b border-[#26404C] pt-[30px] pb-5 xl:pb-[30px]">
                                        <h5
                                            className="text-base font-medium text-second leading-7 font-poppins md:text-2xl xl:text-[28px] xl:leading-[42px] anim dark:text-white">
                                            <Link href={companyProfile.website}>{companyProfile.website}</Link>
                                        </h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- address area --> */}
                </div>
            </section>
        </>
    )
}

export default CompanyProfile