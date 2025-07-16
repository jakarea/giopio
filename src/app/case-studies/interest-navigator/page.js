import React from 'react'
import FloatingBox from '../components/FloatingBox';
import meta from "../../../../data/meta/case-study/interest-navigator.json"

export const metadata = {
   ...meta
};

export default function DailyDealsDiscount() {

    return (
        <>
            {/* <FloatingBox /> */}

            <section className="relative overflow-hidden">
                {/* <!-- header-all-dots --> */}
                <div className="hidden xl:inline-block absolute top-[12%] left-[8%]">
                    <img src="/assets/images/case-status/header-dot-01.svg" alt="icon" />
                </div>
                <div className="hidden xl:inline-block absolute bottom-[24%] left-[6%]">
                    <img src="/assets/images/case-status/header-dot-02.svg" alt="icon" />
                </div>
                <div className="hidden xl:inline-block absolute bottom-[18%] right-[10%]">
                    <img src="/assets/images/case-status/header-dot-03.svg" alt="icon" />
                </div>
                {/* <!-- header-all-dots --> */}
                {/* <!-- gradient-linear-bg --> */}
                <div className="absolute z-0 top-0 left-0">
                    <img src="/assets/images/case-status/header-pc-bg-02.png" alt="img" />
                </div>
                <div className="w-full absolute z-10 top-[24%] left-0">
                    <img className="w-full hidden xl:inline-block dark:hidden" src="/assets/images/case-status/header-bg.png" alt="img" />
                </div>
                {/* <!-- gradient-linear-bg --> */}
                <div className="max-w-[1612px] mx-auto px-8">
                    <div
                        className="relative z-20 pt-[42px] lg:pt-[68px] xl:pt-[124px] flex flex-col items-center justify-center pb-[193px] xl:pb-[475px]">
                        <div className="">
                            <img className="w-[240px] md:w-[450px]" src="https://app.interestnavigator.io/assets/images/logo.svg" alt="logo" />
                        </div>
                        <h3
                            className="pt-6 font-jakarta font-bold text-[42px] lg:text-[58px] xl:text-[72px] leading-[52px] lg:leading-[70px] xl:leading-[90.72px] text-center text-font-blue">
                            Building Interest Navigator: A Revolutionary SaaS Platform for <span className="header-title">Market
                                Insights</span>
                        </h3>
                        <p
                            className="pt-6 pb-[72px] font-poppins font-normal text-[18px] leading-[28px] text-center text-font-blue xl:w-[1064px]">
                            We partnered with Interest Navigator to create a powerful SaaS application that helps advertisers discover
                            hidden opportunities across social media and search engines. Using cutting-edge technology like Laravel 9, PHP
                            8, MySQL, React, and Tailwind CSS, we transformed their vision from Figma designs into a fully functional
                            application.
                        </p>
                        <div className="">
                            <div className="lg:flex lg:items-center justify-center lg:gap-[18px] xl:gap-[39px]">
                                <div
                                    className="cursor-pointer hover:border hover:border-solid hover:border-[#FF9E2A] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                    <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">SaaS
                                        Development
                                    </span>
                                </div>
                                <div
                                    className="cursor-pointer hover:border hover:border-solid hover:border-[#FF9E2A] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                    <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue"> Facebook
                                        & Google APIs</span>
                                </div>
                                <div
                                    className="cursor-pointer hover:border hover:border-solid hover:border-[#FF9E2A] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                    <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Stripe
                                        Integration</span>
                                </div>
                                <div
                                    className="cursor-pointer hover:border hover:border-solid hover:border-[#FF9E2A] transition duration-[0.2s] inline-flex items-center gap-[10px] py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                    <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Tailwind
                                        CSS & React</span>
                                </div>
                                <div
                                    className="cursor-pointer hover:border hover:border-solid hover:border-[#FF9E2A] transition duration-[0.2s] inline-flex items-center gap-[10px] py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                    <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Custom
                                        Laravel Application</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- header-section-end --> */}
            {/* <!-- dnd-phone-section-start --> */}
            <section className="relative">
                {/* <!-- gradient-linear-bg --> */}
                <div className="absolute z-0 top-0 left-0 w-full">
                    <img className="w-full xl:h-[778px]" src="/assets/images/case-status/case-phone-bg-02.png" alt="image" />
                </div>
                {/* <!-- gradient-linear-bg --> */}
                {/* <!-- phobe-image --> */}
                {/* <!-- rasponsive-laptop-img --> */}
                <div className="relative z-30 flex justify-center">
                    <img className="mt-[-116px] xl:mt-[-330px] w-full xl:w-[1080px]"
                        src="/assets/images/case-status/interest-nevi-img/herosection-image.jpg" alt="img" />
                </div>
                {/* <!-- rasponsive-laptop-img --> */}
                {/* <!-- phobe-image --> */}
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-all-card-start --> */}
                    <div className="pt-[50px] xl:pt-[200px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[40px] xl:gap-[32px]">
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-[#31353d]">
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            <div className="xl:hidden">
                                <div className="w-full absolute z-0 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/cad-one-top-borderr.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="hidden xl:inline-block">
                                <div className="w-full absolute z-10 bottom-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-border.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 bottom-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="relative z-20">
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Comprehensive Tool</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Developed an all-in-one platform
                                    for discovering
                                    hidden market opportunities and optimizing ad spend.
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px]  dark:bg-[#31353d]">
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            <div className="xl:hidden">
                                <div className="w-full absolute z-0 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/cad-one-top-borderr.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="hidden xl:inline-block">
                                <div className="w-full absolute z-10 bottom-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-border.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 bottom-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="relative z-20">
                                <img src="/assets/images/case-status/case-study-project-icon-03.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">API Integration</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Integrated Facebook, Google,
                                    TikTok, and Bing APIs for advanced data analytics and insights.</p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px]  dark:bg-[#31353d]">
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            <div className="xl:hidden">
                                <div className="w-full absolute z-0 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/cad-one-top-borderr.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="hidden xl:inline-block">
                                <div className="w-full absolute z-10 bottom-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-border.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 bottom-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="relative z-20">
                                <img src="/assets/images/case-status/case-study-project-icon-03.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Stripe Payment</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Implemented Stripe for seamless
                                    subscription management and secure payment processing.
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px]  dark:bg-[#31353d]">
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            <div className="xl:hidden">
                                <div className="w-full absolute z-0 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/cad-one-top-borderr.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="hidden xl:inline-block">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-border.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="relative z-20">
                                <img src="/assets/images/case-status/case-study-project-icon-02.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Custom Development</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Built a custom Laravel
                                    application,
                                    ensuring a scalable and secure platform.
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px]  dark:bg-[#31353d]">
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            <div className="xl:hidden">
                                <div className="w-full absolute z-0 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/cad-one-top-borderr.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="hidden xl:inline-block">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-border.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="relative z-20">
                                <img src="/assets/images/case-status/case-study-project-icon-04.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Responsive Design</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Crafted a responsive UI with
                                    Tailwind CSS,
                                    ensuring a seamless experience across all devices.
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px]  dark:bg-[#31353d]">
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            <div className="xl:hidden">
                                <div className="w-full absolute z-0 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/cad-one-top-borderr.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="hidden xl:inline-block">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-border.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="relative z-20">
                                <img src="/assets/images/case-status/case-study-project-icon-04.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">User-Centric</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Focused on user experience with
                                    intuitive navigation and a clean interface.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- project-all-card-end --> */}
                </div>
            </section>
            {/* <!-- dnd-phone-section-end --> */}

            <section>
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="relative z-20">
                        <div className="pt-[100px] xl:pt-[200px] pb-[62px] xl:pb-[72px]">
                            <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                <h3
                                    className="relative z-10 pr-8 font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                    Background and Objectives</h3>
                                <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">01
                                </h4>
                                <img id="design-top-border" className="hidden w-[1060px] xl:absolute xl:bottom-[34px] xl:right-[-42px]"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                Creating a Competitive Edge in Digital Advertising, Interest Navigator was designed to address a significant
                                gap in the digital advertising market—finding and leveraging hidden interests and keywords to maximize ROI.
                                Our objective was to create a platform that empowers advertisers to discover untapped market segments and
                                optimize their campaigns with data-driven insights. By integrating multiple data sources and providing
                                advanced analytics, we aimed to deliver a tool that offers a clear competitive advantage.

                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        {/* <!-- project-all-card-start --> */}
                        <div className="lg:flex lg:items-center justify-center lg:gap-[18px] xl:gap-[39px]">
                            <div
                                className="cursor-pointer hover:border hover:border-solid hover:border-[#FF9E2A] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Hidden
                                    Market
                                </span>
                            </div>
                            <div
                                className="cursor-pointer hover:border hover:border-solid hover:border-[#FF9E2A] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue"> Advanced
                                    Search & Analytics
                                </span>
                            </div>
                            <div
                                className="cursor-pointer hover:border hover:border-solid hover:border-[#FF9E2A] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Data-Driven
                                    Insights</span>
                            </div>
                            <div
                                className="cursor-pointer hover:border hover:border-solid hover:border-[#FF9E2A] transition duration-[0.2s] inline-flex items-center gap-[10px] py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">ROI
                                    Optimization</span>
                            </div>
                        </div>
                    </div>
                    <div className="f">
                        <div className="relative z-30 flex justify-center mt-[120px]">
                            <img className="w-full xl:w-[1080px]" src="/assets/images/case-status/interest-nevi-img/2nd-section-image.jpg"
                                alt="img" />
                        </div>
                    </div>
                    {/* <!-- project-all-card-end --> */}
                </div>
            </section>

            <section>
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="relative z-20">
                        <div className="pt-[100px] xl:pt-[200px] pb-[62px] xl:pb-[72px]">
                            <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                <h3
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                    Design Process</h3>
                                <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">02
                                </h4>
                                <img id="design-top-border" className="hidden w-[1060px] xl:absolute xl:bottom-[34px] xl:right-[-42px]"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                From Concept to Reality: The Design Journey, Our design process was rooted in creating a user-friendly
                                interface that aligns with Interest Navigator’s brand identity while providing a seamless user experience.
                                We moved from wireframing to high-fidelity prototypes, ensuring each design iteration was tested and refined
                                based on user feedback.

                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        {/* <!-- project-all-card-start --> */}
                        <div id="design-all-card" className="grid lg:grid-cols-2 lg:gap-[30px] xl:grid-cols-3 xl:gap-8">
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Wireframing</h4>
                                <div className="max-h-[600px] flex flex-col justify-between">
                                    <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                        We create a basic outline of the interface, focusing on the placement of key elements like menus,
                                        buttons, and content areas. This helps establish the overall structure and flow of the design.
                                    </p>
                                    <div className="flex flex-col">
                                        <div className="inline-flex items-start gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                            <span
                                                className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Initial
                                                layout</span>
                                        </div>
                                        <div className="inline-flex items-start gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                            <span
                                                className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Structural
                                                design</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Prototyping</h4>
                                <div className="relative z-20 xl:h-[65%] lg:h-[58%] flex flex-col justify-between">
                                    <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                        We develop interactive models of the design to simulate user interactions. This allows us to test
                                        navigation and user workflows, making it easier to identify and resolve issues early.
                                    </p>
                                    <div className="flex flex-col">
                                        <div className="inline-flex items-start gap-[10px] pb-[12px]">
                                            <img className="mt-[2px]" src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                            <span
                                                className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Interactive
                                                prototypes to visualize user interactions</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">UI/UX Testing</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                    We conduct usability tests with real users to assess the interface’s functionality and visual appeal.
                                    Feedback from this phase is used to fine-tune the design, ensuring it’s both user-friendly and visually
                                    engaging.
                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-start gap-[10px] pb-[12px]">
                                        <img className="mt-[2px]" src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">User
                                            testing to refine functionality and aesthetics</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Branding</h4>
                                <div className="xl:h-[65%] lg:h-[58%] flex flex-col justify-between">
                                    <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                        We define the visual elements like colors, typography, and logos that shape the product’s identity. This
                                        ensures the design is visually appealing and consistent with the brand's message.
                                    </p>
                                    <div className="flex flex-col">
                                        <div className="inline-flex items-start gap-[10px] pb-[12px]">
                                            <img className="mt-[-1px]" src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                            <span
                                                className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Development
                                                of a unique visual identity</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- project-all-card-end --> */}
                </div>
            </section>

            <section>
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="relative z-20">
                        <div className="pt-[100px] xl:pt-[200px] pb-[62px] xl:pb-[72px]">
                            <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                <h3
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                    Development Journey</h3>
                                <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">03
                                </h4>
                                <img id="design-top-border" className="hidden w-[57%] xl:absolute xl:bottom-[34px] xl:right-[-42px]"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                Building a Robust and Scalable Application
                                We chose Laravel 9 and PHP 8 as the backbone of the Interest Navigator platform, ensuring high performance,
                                security, and scalability. React was used for the frontend to create a dynamic and responsive user
                                interface, while Tailwind CSS provided a flexible and efficient design framework.

                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        {/* <!-- project-all-card-start --> */}
                        <div id="design-all-card" className="grid lg:grid-cols-2 lg:gap-[30px] xl:grid-cols-3 xl:gap-8">
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-02.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Frontend</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                    Developed with React and Tailwind CSS for a responsive and interactive UI.
                                </p>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Backend</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                    Built with Laravel 9, ensuring a robust and scalable architecture.

                                </p>
                            </div>
                            {/* <!-- project-all-card-end --> */}

                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">API Integration</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                    Seamless integration with Facebook Graph API and Google API for data retrieval.

                                </p>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Payment Gateway</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                    Stripe integration for secure and efficient subscription management.

                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- project-all-card-end --> */}
                </div>
            </section>

            {/* <!-- app-screen-img-section-start --> */}
            <section className="relative pb-[30px] xl:pb-0">
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="pt-[100px] xl:pt-[200px] pb-[62px] xl:pb-[136px]">
                        <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                            <h3
                                className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                Deployment and Maintenance</h3>
                            <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">04</h4>
                            <img id="design-top-border" className="hidden w-[40%] xl:absolute xl:bottom-[34px] xl:right-0"
                                src="/assets/images/case-status/design-border.svg" alt="border" />
                        </div>
                        <p
                            className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                            Ensuring a Seamless Launch and Ongoing Support,
                            We meticulously planned the deployment of Interest Navigator, ensuring a smooth transition from development to
                            live production. Our team conducted rigorous testing and performance tuning to guarantee the platform's
                            reliability. Post-launch, we continue to provide maintenance and support, addressing any issues promptly and
                            ensuring the platform remains up-to-date with the latest technologies and market demands.

                        </p>
                    </div>
                    {/* <!-- project-text --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px]  dark:bg-[#31353d]">
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            <div className="xl:hidden">
                                <div className="w-full absolute z-0 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/cad-one-top-borderr.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="hidden xl:inline-block">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-border.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="relative z-20">
                                <img src="/assets/images/case-status/case-study-project-icon-02.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Staging Environment</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Testing the platform in a
                                    controlled environment before the live launch.
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px]  dark:bg-[#31353d]">
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            <div className="xl:hidden">
                                <div className="w-full absolute z-0 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/cad-one-top-borderr.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="hidden xl:inline-block">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-border.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="relative z-20">
                                <img src="/assets/images/case-status/case-study-project-icon-02.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Performance Tuning</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Optimizing the application for
                                    speed and efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px]  dark:bg-[#31353d]">
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            <div className="xl:hidden">
                                <div className="w-full absolute z-0 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/cad-one-top-borderr.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- mobile-gradient-linear-bg --> */}
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="hidden xl:inline-block">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/project-card-border.svg" alt="icon" />
                                </div>
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-card-bg.svg" alt="icon" />
                                </div>
                            </div>
                            {/* <!-- dextop-gradient-linear-bg --> */}
                            <div className="relative z-20">
                                <img src="/assets/images/case-status/case-study-project-icon-02.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Continuous Support</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Ongoing maintenance to ensure
                                    smooth operation.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- app-screen-img --> */}
                <div className="relative z-10 w-full">
                    <img className="sm:hidden w-full object-cover" src="/assets/images/case-status/dnd-phone-image-03.png" alt="img" />
                </div>
                <div className="sm:hidden w-full absolute z-0 top-[50%] left-0">
                    <img className="w-full" src="/assets/images/case-status/app-screen-phone-img.svg" alt="img" />
                </div>
                {/* <!-- app-screen-img --> */}
            </section>
            {/* <!-- app-screen-img-section-end --> */}
            {/* <!-- typography-section-start --> */}
            <section>
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="relative z-10 pt-[100px] xl:pt-[160px] pb-[42px] xl:pb-[195px]">
                        <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                            <h3
                                className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                Typography</h3>
                            <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">05</h4>
                            <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                                src="/assets/images/case-status/design-border.svg" alt="border" />
                        </div>
                    </div>
                    <div className="xl:flex xl:justify-between xl:items-start xl:gap-[103px]">
                        <div className="xl:w-full">
                            <div className="relative z-20">
                                <h5
                                    className="xl:relative xl:text-left z-20 font-jakarta font-bold text-[250px] xl:text-[500px] text-font-blue text-center leading-[315px] xl:leading-[355px] xl:pb-[29px]">
                                    Aa</h5>
                                <div className="hidden xl:inline-block absolute z-10 top-[-28%] left-0">
                                    <img className="w-full" src="/assets/images/case-status/typography-text-bg.svg" alt="bg" />
                                </div>
                            </div>
                            <p className="pb-[42px] xl:pt-[100px] font-poppins font-normal text-[24px] text-font-blue">Modern, Professional,
                                and Readable .
                                We selected typography that reflects Interest Navigator’s professional and data-driven nature. The fonts
                                chosen are modern, clean, and easily readable across all devices, contributing to a user-friendly
                                experience.

                            </p>
                        </div>
                        {/* <!-- -------- --> */}
                        <div className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center">
                            <div className="hidden lg:inline-block w-full">
                                <div className="grid grid-cols-[28%_31%_26%_14%] border-b border-solid border-[#26404C4D] pb-6 mb-[42px]">
                                    <div className="font-jakarta font-semibold text-[24px] leading-[30.24px] text-font-blue">Name</div>
                                    <div className="font-jakarta font-semibold text-[24px] leading-[30.24px] text-font-blue">Font Weight</div>
                                    <div className="font-jakarta font-semibold text-[24px] leading-[30.24px] text-font-blue">Font Size</div>
                                    <div className="font-jakarta font-semibold text-[24px] leading-[30.24px] text-font-blue">Linehight</div>
                                </div>

                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H1</h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Extra Bold</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">62px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">160%</div>
                                    </div>
                                </div>
                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H2</h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">48px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</div>
                                    </div>
                                </div>
                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H3</h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">42px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</div>
                                    </div>
                                </div>
                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H4</h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">32px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</div>
                                    </div>
                                </div>
                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H5</h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">24px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</div>
                                    </div>
                                </div>
                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H5</h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">18px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- -------- --> */}
                    {/* <!-- project-text --> */}
                    <div className="pb-[72px] xl:pb-[200px]">
                        <div className="">
                            <div className="lg:hidden">
                                <div className="grid grid-cols-2 gap-6">
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H1</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif
                                        </li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Extra Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">62px</li>
                                        <li className="pt-[14px] xl:pr-[63px] font-work font-normal text-[18px] leading-[21px] text-font-blue">160%
                                        </li>
                                    </ul>
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H2</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif
                                        </li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">48px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-6 pt-6">
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H3</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif
                                        </li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">42px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</li>
                                    </ul>
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H4</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif
                                        </li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">32px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-6 pt-6">
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H5</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif
                                        </li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">24px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</li>
                                    </ul>
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H4</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Manrope, sans-serif
                                        </li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">18px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- typography-section-section-end --> */}
            {/* <!-- brand-color-section-start --> */}
            <section className="relative z-10">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="hidden xl:mb-[176px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                        <h3
                            className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                            Brand Color</h3>
                        <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">06</h4>
                        <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                            src="/assets/images/case-status/design-border.svg" alt="border" />
                    </div>
                    {/* <!-- brand-color --> */}
                    <div className="hidden xl:inline-block pb-[100px]">
                        <div className="w-full flex items-center gap-[10px]">
                            <div className="flex flex-col items-center">
                                <div className="w-full flex items-center gap-[10px]">
                                    <div className="w-[100%] h-[89px] rounded-[12px]" style={{ background: 'rgb(255,51,49)',
            background: 'linear-gradient(90deg, rgba(255,51,49,1) 0%, rgba(255,138,75,1) 100%)' }}></div>
                                    <div className="w-[264px] h-[89px] rounded-[12px]" style={{ backgroundColor: '#ff3331' }}></div>
                                </div>
                                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-01.png" alt="img" />
                                    <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871] dark:text-white">Background Color</h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[264px] h-[89px] rounded-[12px] bg-[#ff8a4b]" style={{ backgroundColor: '#ff8a4b' }}></div>
                                    <div className="brand-color-linear"></div>
                                </div>
                                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-02.png" alt="img" />
                                    <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-font-blue">Button Color</h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[32px] h-[89px] rounded-[12px] bg-[#9501FF]" style={{ backgroundColor: '#eff8ff' }}></div>
                                    <div className="w-[252px] h-[89px] rounded-[12px] bg-[#005AE1]" style={{ backgroundColor: '#fee4e2' }}></div>
                                </div>
                                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-03.png" alt="img" />
                                    <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871] dark:text-white">Button Color</h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[135px] h-[89px] rounded-[12px] bg-[#536871]"></div>
                                </div>
                                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-04.png" alt="img" />
                                    <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871] dark:text-white">Button Color</h3>
                            </div>
                        </div>
                    </div>
                    {/* <!-- brand-color --> */}
                    <div className="xl:grid xl:grid-cols-2 xl:gap-[32px]">
                        <div className="">
                            <div className="mb-[10px]">
                                <div className="w-full h-[120px] bg-font-blue rounded-tl-[16px] rounded-tr-[16px]"></div>
                            </div>
                            <div className="w-full flex items-center mb-[10px]">
                                <div className="w-full h-[120px] bg-black"></div>
                                <div className="w-full h-[120px] bg-[#161E26]"></div>
                                <div className="w-full h-[120px] bg-[#1F2B35]"></div>
                                <div className="w-full h-[120px] bg-[#213541]"></div>
                                <div className="w-full h-[120px] bg-[#26404C]"></div>
                                <div className="w-full h-[120px] bg-[#557075]"></div>
                                <div className="w-full h-[120px] bg-[#829AA2]"></div>
                                <div className="w-full h-[120px] bg-[#A5BCC4]"></div>
                                <div className="w-full h-[120px] bg-[#C8DDE5]"></div>
                                <div className="w-full h-[120px] bg-[#EBF0F5]"></div>
                            </div>
                            <div className="mb-[32px]">
                                <div className="w-full h-[120px] bg-font-blue rounded-bl-[16px] rounded-br-[16px]"></div>
                            </div>
                        </div>
                        <div className="">
                            <div className="xl:hidden mb-[10px]">
                                <div id="brand-colot-tow" className="w-full h-[120px] rounded-tl-[16px] rounded-tr-[16px]"></div>
                            </div>
                            <div className="hidden xl:block mb-[10px]">
                                <div id="brand-colot-tow-02" className="rounded-tl-[16px] rounded-tr-[16px]"></div>
                            </div>
                            <div className="w-full flex items-center mb-[10px]">
                                <div className="w-full h-[120px] bg-[#331F0B]"></div>
                                <div className="w-full h-[120px] bg-[#663E17]"></div>
                                <div className="w-full h-[120px] bg-[#994C22]"></div>
                                <div className="w-full h-[120px] bg-[#CC592D]"></div>
                                <div className="w-full h-[120px] bg-[#FF9040]"></div>
                                <div className="w-full h-[120px] bg-[#FFA866]"></div>
                                <div className="w-full h-[120px] bg-[#FFBF8C]"></div>
                                <div className="w-full h-[120px] bg-[#FFD6B2]"></div>
                                <div className="w-full h-[120px] bg-[#FFEDD8]"></div>
                                <div className="w-full h-[120px] bg-[#FFF4EB]"></div>
                            </div>
                            <div className="xl:hidden mb-[32px]">
                                <div id="brand-colot-tow" className="w-full h-[120px] rounded-bl-[16px] rounded-br-[16px]"></div>
                            </div>
                            <div className="hidden xl:block mb-[32px]">
                                <div id="brand-colot-tow-02" className="rounded-bl-[16px] rounded-br-[16px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- brand-color-section-end --> */}

            {/* <!-- user-persona-section-start --> */}
            <section className="lg:bg-[#faf9fd] dark:bg-transparent">
                <div className="max-w-[1612px] mx-auto px-8 xl:pt-[0px] relative z-10">
                    {/* <!-- project-text --> */}
                    <div className="xl:hidden pt-[100px] pb-[42px]">
                        <h3 className="font-jakarta font-bold text-[42px] text-font-blue">User Persona</h3>
                    </div>
                    <div
                        className="hidden xl:mb-[100px] xl:relative xl:flex xl:items-center xl:pt-[200px] xl:justify-between xl:gap-[10px]">
                        <h3
                            className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                            User Persona</h3>
                        <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">07</h4>
                        <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                            src="/assets/images/case-status/design-border.svg" alt="border" />
                    </div>
                    {/* <!-- project-text --> */}
                    <div className="lg:flex lg:gap-[50px] xl:gap-[169px]">
                        <div className="relative w-ful lg:w-[379px]">
                            <div className="w-full lg:w-[379px]">
                                <img className="w-full lg:w-[379px]" src="/assets/images/case-status/case-study-man-01.png" alt="img" />
                            </div>
                            <div className="">
                                <div className="flex justify-between items-end mt-[-16px]">
                                    <h4 className="font-jakarta font-extralight text-[62px] leading-[78px] text-font-blue">Tom <br />
                                    </h4>
                                    <p className="mt-[-8px] font-jakarta font-normal text-[24px] leading-[46px] text-font-blue">Digital Marketer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="lg:relative lg:w-full xl:w-[665px] flex content-end lg:content-start pt-[50px] lg:pt-[28px]">
                                <div className="lg:absolute lg:left-[-50px]">
                                    <img className="mt-[-20px] mr-[16px] max-w-[35px]" src="/assets/images/case-status/dnd-icon-01.png" alt="icon" />
                                </div>
                                <div
                                    className="relative w-[full] text-left ml-auto font-jakarta font-semibold text-[30px] leading-[40px] text-font-blue">
                                    Giopio delivered beyond our expectations. The platform is powerful, user-friendly, and has given us a
                                    competitive edge in the market.
                                    <div
                                        className="absolute bottom-[-7%] right-[8px] lg:right-[5%] lg:bottom-[-32px] xl:right-[-38px] xl:bottom-[-12px]">
                                        <img className="max-w-[35px]" src="/assets/images/case-status/dnd-icon-02.svg" alt="icon" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-text --> */}
                            <div className="pt-[70px] pb-[62px]">
                                <h3 className="pb-4 font-jakarta font-bold text-[32px] text-font-blue">User About</h3>
                                <p className="font-jakarta font-normal text-[24px] text-font-blue"> Finding reliable, undiscovered market
                                    segments and measuring the effectiveness of different advertising campaigns.
                                </p>
                            </div>
                            <div className="pb-[62px]">
                                <h3 className="pb-4 font-jakarta font-bold text-[32px] text-font-blue">Needs</h3>
                                <p className="font-jakarta font-normal text-[24px] text-font-blue">A versatile tool that helps discover hidden
                                    audiences, analyze trends, and provide actionable insights for better marketing decisions.

                                </p>
                            </div>
                            {/* <!-- project-text --> */}
                            <div className="xl:w-full xl:grid xl:grid-cols-[55%_25%_20%] xl:gap-[0px]">
                                <div className="xl:w-full xl:pr-[45px]">
                                    <h4 className="pb-[24px] font-jakarta font-bold text-[30px] text-font-blue">Goals</h4>
                                    <ul className="xl:pl-[14px]">
                                        <li className="flex gap-[10px] mb-[14px]">
                                            <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue shrink-0"></span>
                                            <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue">Tom aims to use his
                                                advertising budgets more efficiently by reaching audiences that are less exposed to competitive
                                                advertising</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="xl:w-full pt-[45px] xl:pt-0 xl:pr-[45px]">
                                    <h4 className="pb-[34px] font-jakarta font-bold text-[30px] text-font-blue">Expertise</h4>
                                    <div className="f">
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">Branding : </h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">90%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">UI / UX Design :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">95%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">Data Analysis :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">85%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">Advertising :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">90%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="xl:w-full pt-[45px] xl:pt-0">
                                    <h4 className="pb-[34px] font-jakarta font-bold text-[30px] text-font-blue">Language</h4>
                                    <div className="f">
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">English :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">100%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">Spanish :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">80%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">French :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">70%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- user-persona-section-end --> */}
            {/* <!-- branding-section-section-start --> */}
            <section className="lg:bg-[#faf9fd] dark:bg-transparent">
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="xl:hidden pt-[100px]">
                        <h3 className="pb-[42px] font-jakarta font-bold text-[42px] leading-[52px] text-font-blue">Branding</h3>
                    </div>
                    <div
                        className="hidden xl:mb-[100px] xl:pt-[200px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                        <h3
                            className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                            Branding</h3>
                        <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">08</h4>
                        <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                            src="/assets/images/case-status/design-border.svg" alt="border" />
                    </div>
                    {/* <!-- project-text --> */}
                    <div className="relative z-10 mb-6 overflow-hidden bg-white p-8 rounded-[16px]">
                        <div className="lg:hidden w-full absolute z-10 top-0 left-0">
                            <img className="w-full" src="/assets/images/case-status/branding-card-top-border.svg" alt="icon" />
                        </div>
                        <div className="hidden lg:inline-block w-full absolute z-10 top-0 left-0">
                            <img className="w-full" src="/assets/images/case-status/branding-section-pc-border.png" alt="icon" />
                        </div>
                        {/* <!-- gradient-linear-bg --> */}
                        <div className="lg:hidden w-full absolute z-0 top-[-1px] left-0">
                            <img className="w-full" src="/assets/images/case-status/branding-card-bg.svg" alt="icon" />
                        </div>
                        <div className="hidden lg:inline-block w-full absolute z-0 top-[-1px] left-0">
                            <img className="w-full" src="/assets/images/case-status/branding-pc-linear-bg.png" alt="icon" />
                        </div>
                        {/* <!-- gradient-linear-bg --> */}
                        <div className="relative z-10 lg:pt-[120px] lg:pb-[119px]">
                            <div className="flex justify-center">
                                <img className="w-[240px] md:w-[550px]" src="https://app.interestnavigator.io/assets/images/logo.svg"
                                    alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- branding-section-section-end --> */}
            {/* <!-- Lo-fi-design-section-start --> */}
            <section className="bg-[#fdfdfe] dark:bg-transparent">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="relative z-10">
                        <div className="">
                            {/* <!-- project-text --> */}
                            <div className="xl:hidden pt-[100px] pb-[62px]">
                                <h3 className="font-jakarta font-bold text-[42px] text-font-blue leading-[52px]">Responsive View</h3>
                                <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px]">VA Seamless
                                    Experience Across
                                    All Devices,Interest Navigator was designed with a mobile-first approach, ensuring full functionality and
                                    ease of use on any device. Whether on a desktop, tablet, or smartphone, users can access powerful tools
                                    and insights without compromise.
                                </p>
                            </div>
                            <div className="hidden xl:block">
                                <div className="xl:mb-[62px] xl:pt-[200] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                    <h3
                                        className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                        Responsive View</h3>
                                    <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">09
                                    </h4>
                                    <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                                        src="/assets/images/case-status/design-border.svg" alt="border" />
                                </div>
                                <p
                                    className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                    VA Seamless Experience Across All Devices,Interest Navigator was designed with a mobile-first approach,
                                    ensuring full functionality and ease of use on any device.
                                    Whether on a desktop, tablet, or smartphone, users can access powerful tools and insights without
                                    compromise.
                                </p>
                            </div>
                            {/* <!-- project-text --> */}
                        </div>
                        <div className="flex justify-center">
                            <img className="w-full lg:w-[1080px]" src="/assets/images/case-status/interest-nevi-img/resposive-image-02.png"
                                alt="img" />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-full absolute z-0 top-[-1200px] left-0">
                        <img className="w-full" src="/assets/images/case-status/footer-linear-bg.png" alt="img" />
                    </div>
                </div>
            </section>
            {/* <!-- Lo-fi-design-section-end --> */}
            {/* <!-- hi-fi-design-section-start --> */}
            <section className="bg-[#fdfdfe] dark:bg-transparent">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="relative z-10">
                        {/* <!-- project-text --> */}
                        <div className="xl:hidden pt-[100px] pb-[62px]">
                            <h3 className="font-jakarta font-bold text-[42px] text-font-blue leading-[52px]">Plugins and Libraries Used
                            </h3>
                            <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px]">Key Technologies and
                                Tools,We utilized a range of plugins and libraries to enhance the functionality and performance of Interest
                                Navigator. Key technologies included Tailwind CSS for responsive design, React for dynamic user interfaces,
                                and Stripe for secure payment processing.

                            </p>
                        </div>
                        <div className="hidden xl:block">
                            <div className="xl:mb-[62px] xl:pt-[230px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                <h3
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                    Plugins and Libraries Used
                                </h3>
                                <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">10
                                </h4>
                                <img id="design-top-border" className="hidden w-[45%] xl:absolute xl:bottom-[34px] xl:right-0"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                Key Technologies and Tools,We utilized a range of plugins and libraries to enhance the functionality and
                                performance of Interest Navigator. Key technologies included Tailwind CSS for responsive design, React for
                                dynamic user interfaces, and Stripe for secure payment processing.
                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        <div className="w-full pb-[62px]">
                            <img className="w-full" src="/assets/images/case-status/interest-nevi-img/plugin-image-02.png" alt="img" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- hi-fi-design-section-end --> */}
            <section>
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="relative z-20">
                        <div className="py-[100px] xl:py-[200px]">
                            <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                <h3
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                    Technology Choices</h3>
                                <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">11
                                </h4>
                                <img id="design-top-border" className="hidden w-[60%] xl:absolute xl:bottom-[34px] xl:right-[-42px]"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                Why Laravel, React, and Tailwind CSS Were the Perfect Fit, We selected Laravel 9 for its powerful and
                                scalable backend capabilities, making it ideal for handling the complex data operations required by Interest
                                Navigator. React was chosen for its ability to create a fast and responsive user interface, while Tailwind
                                CSS provided a flexible and efficient design framework that allowed for rapid development.

                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        {/* <!-- project-all-card-start --> */}
                        <div id="design-all-card" className="grid lg:grid-cols-2 lg:gap-[30px] xl:grid-cols-3 xl:gap-8">
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Laravel 9</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                    Robust backend framework for scalability and security.
                                </p>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">React</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                    Dynamic and responsive front-end development.

                                </p>
                            </div>
                            {/* <!-- project-all-card-end --> */}

                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Tailwind CSS</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                    Utility-first CSS framework for flexible design.
                                </p>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Stripe</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">
                                    Secure and efficient payment processing for subscriptions.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- project-all-card-end --> */}
                </div>
            </section>

            <section className="relative pb-[30px] xl:pb-0">
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="pt-[100px] xl:pt-[200px] pb-[62px] xl:pb-[136px]">
                        <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                            <h3
                                className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                Client Satisfaction</h3>
                            <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">12</h4>
                            <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0 w-[60%]"
                                src="/assets/images/case-status/design-border.svg" alt="border" />
                        </div>
                        <p
                            className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                            Exceeding Expectations, Interest Navigator’s team was thoroughly impressed with the final product. They
                            praised the platform’s intuitive design, seamless functionality, and the depth of insights it provided. The
                            tool has become a cornerstone of their
                            advertising strategy, helping them achieve better results and optimize their ad spend.
                        </p>
                    </div>
                    {/* <!-- project-text --> */}
                </div>
            </section>

            <section>
                <div className="max-w-[1612px] mx-auto px-8 mb-12 xl:mb-20">
                    {/* <!-- project-text --> */}
                    <div className="relative z-20">
                        <div className="pt-[100px] xl:pt-[100px] pb-[62px] xl:pb-[72px]">
                            <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                <h3
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                    Final Outcome
                                </h3>
                                <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">13
                                </h4>
                                <img id="design-top-border" className="hidden w-[1060px] xl:absolute xl:bottom-[34px] xl:right-[-42px]"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                A Game-Changing Tool for Advertisers,The Interest Navigator platform is a testament to our commitment to
                                delivering high-quality, custom solutions that drive results. The platform has empowered advertisers to
                                discover hidden opportunities, optimize their ad spend, and achieve better ROI. The successful launch and
                                positive client feedback underscore the effectiveness of our development approach and the quality of our
                                work.


                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        {/* <!-- project-all-card-start --> */}
                        <div id="" className="grid lg:grid-cols-2 lg:gap-[30px] xl:grid-cols-3 xl:gap-8">
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue"> Empowered advertisers
                                    with deep market insights</h4>


                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Provided a scalable and
                                    reliable platform for continuous growth.</h4>

                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#3A3A3A]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Successfully integrated
                                    multiple APIs for comprehensive data analysis.</h4>
                            </div>
                            {/* <!-- project-all-card-end --> */}

                        </div>
                    </div>
                    {/* <!-- project-all-card-end --> */}

                    <p
                        className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                        This case study highlights the strategic planning, technical expertise, and collaborative effort that went into
                        developing Interest Navigator, a tool that is now leading the way in digital advertising innovation.

                    </p>
                </div>
            </section>
        </>
    );
}