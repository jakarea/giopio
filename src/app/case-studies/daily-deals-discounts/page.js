import FloatingBox from "../components/FloatingBox";
import meta from "../../../../data/meta/case-study/daily-deals-discounts.json"

export const metadata = {
    ...meta
};

export default function DailyDealsDiscount() {

    return (
        <>
            {/* <!-- floating box start --> */}
            {/* <FloatingBox /> */}
            {/* <!-- floating box end --> */}

            {/* <!-- case-study-section-start --> */}
            {/* <!-- header-section-start --> */}
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
                    <img src="/assets/images/case-status/header-pc-bg-02.png" alt="img"/>
                </div>
                <div className="w-full absolute z-10 top-[24%] left-0">
                    <img className="w-full hidden xl:inline-block dark:hidden" src="/assets/images/case-status/header-bg.png" alt="img" />
                </div>
                {/* <!-- gradient-linear-bg --> */}
                <div className="max-w-[1612px] mx-auto px-8">
                    <div
                        className="relative z-20 pt-[42px] lg:pt-[68px] xl:pt-[124px] flex flex-col items-center justify-center pb-[193px] xl:pb-[475px]">
                        <div className="">
                            <img className="xl:hidden" src="/assets/images/case-status/case-study-logo.svg" alt="logo" />
                            <img className="hidden xl:inline-block" src="/assets/images/case-status/header-logo-02.svg" alt="logo" />
                        </div>
                        <h3
                            className="pt-6 font-jakarta font-bold text-[42px] lg:text-[58px] xl:text-[72px] leading-[52px] lg:leading-[70px] xl:leading-[90.72px] text-center text-font-blue dark:text-white">
                            Discover <span className="header-title"> Deals Discounts</span><br />
                            On The Go
                        </h3>
                        <p
                            className="pt-6 pb-[72px] font-poppins font-normal text-[18px] leading-[28px] text-center text-font-blue xl:w-[1064px] anim dark:text-white">
                            <strong>DailyDealsDiscounts</strong> is a powerful mobile app available on both Android and iOS
                            platforms, designed to help users find the best deals in their vicinity. Our client entrusted us
                            with the entire project, from UI/UX research and mobile app development to API creation, landing
                            page design, and comprehensive branding. We delivered a complete, end-to-end solution, acting not
                            just as a service provider but as a true partner in their journey.
                        </p>
                        <div className="lg:flex lg:items-center lg:justify-center lg:gap-[18px] xl:gap-[39px]">
                            <div
                                className="cursor-pointer hover:border hover:border-solid hover:border-[#FF7629] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                <span
                                    className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">UI/UX</span>
                            </div>
                            <div
                                className="cursor-pointer hover:border hover:border-solid hover:border-[#FF7629] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                <span
                                    className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">IOS</span>
                            </div>
                            <div
                                className="cursor-pointer hover:border hover:border-solid hover:border-[#FF7629] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                <span
                                    className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Android</span>
                            </div>
                            <div
                                className="cursor-pointer hover:border hover:border-solid hover:border-[#FF7629] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                <span
                                    className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">API</span>
                            </div>
                            <div
                                className="cursor-pointer hover:border hover:border-solid hover:border-[#FF7629] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                <span
                                    className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Dashboard</span>
                            </div>
                            <div
                                className="cursor-pointer hover:border hover:border-solid hover:border-[#FF7629] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                                <span
                                    className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Landing
                                    Page</span>
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
                {/* <!-- rasponsive-mobile-img --> */}
                <div className="relative z-30 flex justify-center">
                    <img className="xl:hidden mt-[-116px] xl:mt-0" src="/assets/images/case-status/case-study-phone.svg" alt="img" />
                </div>
                {/* <!-- rasponsive-mobile-img --> */}
                {/* <!-- phobe-image --> */}
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-all-card-start --> */}
                    <div className="pt-[50px] xl:pt-0  grid grid-cols-1 xl:grid-cols-3 gap-0 xl:gap-[62px]">
                        {/* <!--   --> */}
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 md:gap-[24px] xl:flex xl:flex-col xl:gap-[32px] xl:pt-[100px]">
                            <div className="relative z-0 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-second">
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
                                        <img className="w-full" src="/assets/images/case-status/project-border-02.svg" alt="icon" />
                                    </div>
                                    <div className="w-full absolute z-0 bottom-0 left-0">
                                        <img className="w-full" src="/assets/images/case-status/project-card-bg.svg" alt="icon" />
                                    </div>
                                </div>
                                {/* <!-- dextop-gradient-linear-bg --> */}
                                <div className="relative z-20">
                                    <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                    <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:!text-white">Project
                                        Overview</h4>
                                    <p className="font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Create an app
                                        that helps users find the best deals nearby, emphasizing the need for a user-friendly,
                                        efficient, and engaging platform.
                                    </p>
                                </div>
                            </div>
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-second">
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
                                    <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:!text-white">Data
                                        Analysis</h4>
                                    <p className="font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">We did extensive
                                        research by analyzing over 10 similar applications that are currently trending, rising,
                                        and popular in the market.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- dextop-phone-img --> */}
                        <div className="">
                            <div className="relative z-30 flex justify-center xl:mt-[-335px]">
                                <img className="hidden xl:inline-block" src="/assets/images/case-status/dnd-phone-one.svg" alt="img" />
                            </div>
                        </div>
                        {/* <!-- dextop-phone-img --> */}
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 md:gap-[24px] xl:flex xl:flex-col xl:gap-[32px] xl:pt-[100px]">
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-second">
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
                                    <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:!text-white">Problem
                                        Statement</h4>
                                    <p className="font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Identify
                                        recurring issues and pain points experienced by users, along with recognizing emerging
                                        trends and patterns in behavior.
                                    </p>
                                </div>
                            </div>
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-second">
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
                                    <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:!text-white">Possible
                                        Solution</h4>
                                    <p className="font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Collect and
                                        analyze user feedback to pinpoints. Compare features and user experiences with leading
                                        applications.
                                    </p>
                                </div>
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
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                                    Design Process</h3>
                                <h4
                                    className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                                    01</h4>
                                <img id="design-top-border"
                                    className="hidden w-[1060px] xl:absolute xl:bottom-[34px] xl:right-[-42px]"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px] dark:text-white dark:opacity-70">
                                Our design approach emphasized creating an intuitive, visually appealing interface that ensures
                                both users and businesses can effortlessly navigate the app and website.
                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        {/* <!-- project-all-card-start --> */}
                        <div id="design-all-card" className="grid lg:grid-cols-2 lg:gap-[30px] xl:grid-cols-3 xl:gap-8">
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">Research</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">We conducted
                                    extensive research to ensure the app meets user needs.

                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">User
                                            behavior analysis
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Competitor
                                            benchmarking
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Trend
                                            identification</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">User
                                            feedback collection
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">UI - Design
                                </h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">The UI design
                                    focused on clarity and accessibility.

                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Clean,
                                            intuitive layout
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Consistent
                                            branding across platforms
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Optimized
                                            for quick access to deals
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">High-contrast
                                            color palette for visibility
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">UX - Design
                                </h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">We prioritized a
                                    seamless and engaging user experience.

                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Streamlined
                                            navigation
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Personalized
                                            user journey
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Minimal
                                            learning curve
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Responsive
                                            design across devices

                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">Prototyping
                                </h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Prototyping was
                                    key in refining our approach.

                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Interactive
                                            wireframes
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Usability
                                            testing with real users
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Iterative
                                            design improvements
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Stakeholder
                                            feedback incorporation
                                        </span>
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
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                                    Development Process</h3>
                                <h4
                                    className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                                    02</h4>
                                <img id="design-top-border" className="hidden w-[58%] xl:absolute xl:bottom-[34px] xl:right-[-42px]"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px] dark:text-white dark:text-opacity-80">
                                Are Our development strategy ensured a smooth and efficient app launch, incorporating robust
                                backend support and continuous integration.
                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        {/* <!-- project-all-card-start --> */}
                        <div id="design-all-card" className="grid lg:grid-cols-2 lg:gap-[30px] xl:grid-cols-3 xl:gap-8">
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">Planning</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Define the
                                    scope, goals, and resources required for the project.
                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">ODetermine
                                            the team, tools, and technologies</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Establish
                                            a timeline with key milestones and deadlines.</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Collect
                                            detailed requirements from stakeholders and users</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">Architecture
                                    and Design</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Create a solid
                                    foundation for development.
                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Define
                                            the technical architecture</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Plan
                                            the database schema, including tables</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Outline
                                            how different components of the system will interact via APIs</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">Development
                                </h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Release the app
                                    to users and ensure a smooth launch.
                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Implement
                                            the user interface,</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Connect
                                            front-end and back-end components, and integrate third-party services as
                                            needed.</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Conduct
                                            regular code reviews to ensure quality and consistency.</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">Maintenance &
                                    Support</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Keep the app
                                    running smoothly and address any issues.

                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Quickly
                                            address and resolve post-launch issues.</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Implement
                                            improvements based on user feedback and changing needs.</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Regularly
                                            track performance and optimize as needed.</span>
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
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                                    Database Design</h3>
                                <h4
                                    className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                                    03</h4>
                                <img id="design-top-border"
                                    className="hidden w-[1060px] xl:absolute xl:bottom-[34px] xl:right-[-42px]"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px] dark:text-white dark:opacity-80">
                                Designed a scalable and secure database structure.
                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        {/* <!-- project-all-card-start --> */}
                        <div id="design-all-card" className="grid lg:grid-cols-2 lg:gap-[30px] xl:grid-cols-3 xl:gap-8">
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">Requirements
                                    Analysis</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Develop a
                                    high-level model of the database.
                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Create
                                            an ERD to visually represent entities, their attributes, and relationships.
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Ovals
                                            connected to entities
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Diamonds
                                            connected to entities</span>
                                    </div>

                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Choose
                                            unique identifiers for each entity</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">Logical Design
                                </h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Translate the
                                    conceptual model into a logical structure.
                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Create
                                            tables based on entities and their attributes.
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Define
                                            foreign keys to represent relationships between tables.</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Apply
                                            normalization rules to minimize redundancy and ensure data integrity</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">Physical
                                    Design</h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Optimize the
                                    database for performance and storage.
                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Create
                                            indexes on columns & joins to improve query performance.</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Split
                                            large tables into smaller, more manageable pieces if necessary.</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Plan
                                            for data storage, backup strategies, and security measures.</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#1B1C31]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue dark:text-white">Implementation
                                </h4>
                                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px] dark:!text-white">Create the
                                    database based on the design.
                                </p>
                                <div className="flex flex-col">
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Use
                                            SQL commands to create tables with the defined schema.</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Implement
                                            constraints such as primary, foreign keys, & unique constraints.</span>
                                    </div>
                                    <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                        <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                                        <span
                                            className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue anim dark:text-white">Insert
                                            initial data into the tables if needed.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- project-all-card-end --> */}
                </div>
            </section>
            {/* <!-- app-screen-img-section-start --> */}
            <section className="relative pb-[30px] xl:pb-0">
                {/* <!-- app-phone-bg-dot --> */}
                <div className="w-full absolute z-0 bottom-[162px] left-[46px]">
                    <img className="w-full hidden xl:inline-block" src="/assets/images/case-status/app-section-phone-bg.svg"
                        alt="bg" />
                </div>
                {/* <!-- app-phone-bg-dot --> */}
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="pt-[100px] xl:pt-[200px] pb-[62px] xl:pb-[136px]">
                        <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                            <h3
                                className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                                App Screen</h3>
                            <h4
                                className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                                04</h4>
                            <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                                src="/assets/images/case-status/design-border.svg" alt="border" />
                        </div>
                        <p
                            className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px] dark:text-white dark:opacity-80">
                            Are you looking for top-tier web design
                            Are you looking for top-tier web design services and a reliable website development agency? Look no
                            further. Giopio is your dedicated partner in the digital realm offering
                            cutting-edge solutions tailored to your specific needs. website development agency
                        </p>
                    </div>
                    {/* <!-- project-text --> */}
                    <div className="relative z-20">
                        {/* <!-- app-screen-img-pc --> */}
                        <div className="w-full">
                            <img className="hidden sm:inline-block w-full" src="/assets/images/case-status/dnd-phone-pc-img.png"
                                alt="img" />
                        </div>
                        {/* <!-- app-screen-img-pc --> */}
                        {/* <!-- app-screen-pc-img --> */}
                        <div className="hidden">
                            <img src="/assets/images/case-status/dnd-phone-pc-img.png" alt="img" />
                        </div>
                        {/* <!-- app-screen-pc-img --> */}
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
                                className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                                Typography</h3>
                            <h4
                                className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                                05</h4>
                            <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                                src="/assets/images/case-status/design-border.svg" alt="border" />
                        </div>
                    </div>
                    <div className="xl:flex xl:justify-between xl:items-start xl:gap-[103px]">
                        <div className="xl:w-full">
                            <div className="relative z-20">
                                <h5
                                    className="xl:relative xl:text-left z-20 font-jakarta font-bold text-[250px] xl:text-[500px] text-font-blue text-center leading-[315px] xl:leading-[355px] xl:pb-[29px] dark:text-white">
                                    Aa</h5>
                                <div className="hidden xl:inline-block absolute z-10 top-[-28%] left-0">
                                    <img className="w-full" src="/assets/images/case-status/typography-text-bg.svg" alt="bg" />
                                </div>
                            </div>
                            <p className="pb-[42px] xl:pt-[100px] font-poppins font-normal text-[24px] text-font-blue dark:text-white dark:text-opacity-80">Are you
                                looking for top-tier web design services and a Giopio is your dedicated partner in the digital
                                realm offering
                                cutting-edge solutions tailored to your specific needs. website development agency
                            </p>
                        </div>
                        {/* <!-- -------- --> */}
                        <div className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center">
                            <div className="hidden lg:inline-block w-full">
                                <div
                                    className="grid grid-cols-[28%_31%_26%_14%] border-b border-solid border-[#26404C4D] pb-6 mb-[42px]">
                                    <div className="font-jakarta font-semibold text-[24px] leading-[30.24px] text-font-blue dark:text-white">Name
                                    </div>
                                    <div className="font-jakarta font-semibold text-[24px] leading-[30.24px] text-font-blue dark:text-white">Font
                                        Weight</div>
                                    <div className="font-jakarta font-semibold text-[24px] leading-[30.24px] text-font-blue dark:text-white">Font
                                        Size</div>
                                    <div className="font-jakarta font-semibold text-[24px] leading-[30.24px] text-font-blue dark:text-white">
                                        Linehight</div>
                                </div>
                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H1
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Extra Bold
                                        </div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">62px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">160%</div>
                                    </div>
                                </div>
                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H2
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Bold</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">48px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">140%</div>
                                    </div>
                                </div>
                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H3
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Bold</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">42px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">140%</div>
                                    </div>
                                </div>
                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H4
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Bold</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">32px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">140%</div>
                                    </div>
                                </div>
                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H5
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Bold</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">24px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">140%</div>
                                    </div>
                                </div>
                                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                                    <div className="">
                                        <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H5
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Bold</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">18px</div>
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">140%</div>
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
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H1</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            Extra Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            62px</li>
                                        <li
                                            className="pt-[14px] xl:pr-[63px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            160%</li>
                                    </ul>
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H2</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            48px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            140%</li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-6 pt-6">
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H3</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            42px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            140%</li>
                                    </ul>
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H4</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            32px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            140%</li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-6 pt-6">
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H5</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            24px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            140%</li>
                                    </ul>
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue dark:text-white">H4</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">Jakarta
                                            Sans</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            18px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue dark:text-white">
                                            140%</li>
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
                            className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                            Brand Color</h3>
                        <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                            06</h4>
                        <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                            src="/assets/images/case-status/design-border.svg" alt="border" />
                    </div>
                    {/* <!-- brand-color --> */}
                    <div className="hidden xl:inline-block pb-[100px]">
                        <div className="w-full flex items-center gap-[10px]">
                            <div className="flex flex-col items-center">
                                <div className="w-full flex items-center gap-[10px]">
                                    <div className="w-[100%] h-[89px] rounded-[12px] bg-font-blue"></div>
                                    <div className="w-[264px] h-[89px] rounded-[12px] bg-[#6D7172]"></div>
                                </div>
                                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-01.png" alt="img" />
                                <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871]  dark:text-white">Background
                                    Color</h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[264px] h-[89px] rounded-[12px] bg-[#FF9040]"></div>
                                    <div className="brand-color-linear"></div>
                                </div>
                                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-02.png" alt="img" />
                                <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871]  dark:text-white">Button Color
                                </h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[32px] h-[89px] rounded-[12px] bg-[#EB0029]"></div>
                                    <div className="w-[252px] h-[89px] rounded-[12px] bg-[#FEF9EC]"></div>
                                </div>
                                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-03.png" alt="img" />
                                <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871]  dark:text-white">Accent Color
                                </h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[135px] h-[89px] rounded-[12px] bg-[#536871]"></div>
                                </div>
                                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-04.png" alt="img" />
                                <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871]  dark:text-white">Body Color
                                </h3>
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
            {/* <!-- flowchart-section-stat --> */}
            <section className="w-full bg-[#f9f9fb] hidden xl:block dark:bg-transparent">
                <div className="relative">
                    {/* <!-- linear-bg --> */}
                    <div className="w-full absolute top-[-180px] right-0">
                        <img className="w-full h-[2238px]" src="/assets/images/case-status/footer-linear-bg.png" alt="img" />
                    </div>
                    {/* <!-- linear-bg --> */}
                    <div className="max-w-[1612px] mx-auto px-8">
                        <div className="flex justify-center pt-[110px] pb-[146px]">
                            <div className="relative w-[393px]">
                                <h4
                                    className="absolute z-0 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] font-jakarta font-bold text-[100px] leading-[126px] text-font-blue dark:text-white">
                                    Flowchart</h4>
                                <div className="">
                                    <img src="/assets/images/case-status/flowchart-text-bg.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <div className="flex flex-col justify-center items-center">
                                <div
                                    className="flex items-center justify-center w-[176px] h-[176px] bg-white border-[2px] border-solid border-[#FF9040] rounded-[16px] dark:bg-second">
                                    <h4 className="font-inter font-medium text-[16px] leading-[24px] text-font-blue  dark:text-white">Splash Screen
                                    </h4>
                                </div>
                                <div className="">
                                    <img src="/assets/images/case-status/flowchart-border-11.png" alt="img" />
                                </div>
                                <div className="flex items-center gap-[160px]">
                                    <div
                                        className="flex items-center justify-center w-[176px] h-[176px] bg-white border-[2px] border-solid border-[#FF9040] rounded-[16px] dark:bg-second">
                                        <h4 className="font-inter font-medium text-[16px] leading-[24px] text-font-blue  dark:text-white">Login</h4>
                                    </div>
                                    <div
                                        className="flex items-center justify-center w-[176px] h-[176px] bg-white border-[2px] border-solid border-[#FF9040] rounded-[16px] dark:bg-second">
                                        <h4 className="font-inter font-medium text-[16px] leading-[24px] text-font-blue  dark:text-white">Home</h4>
                                    </div>
                                    <div
                                        className="flex items-center justify-center w-[176px] h-[176px] bg-white border-[2px] border-solid border-[#FF9040] rounded-[16px] dark:bg-second">
                                        <h4 className="font-inter font-medium text-[16px] leading-[24px] text-font-blue  dark:text-white">
                                            Registration</h4>
                                    </div>
                                </div>
                                <div className="">
                                    <img src="/assets/images/case-status/flowchart-border-22.png" alt="img" />
                                </div>
                                <div
                                    className="flex items-center justify-center w-[176px] h-[176px] bg-white border-[2px] border-solid border-[#FF9040] rounded-[16px] dark:bg-second">
                                    <h4 className="font-inter font-medium text-[16px] leading-[24px] text-font-blue  dark:text-white">Home</h4>
                                </div>
                                <div className="">
                                    <img src="/assets/images/case-status/flowchart-border-33.png" alt="img" />
                                </div>
                                <div className="flex items-center gap-[160px]">
                                    <div
                                        className="flex items-center justify-center w-[176px] h-[176px] bg-white border-[2px] border-solid border-[#FF9040] rounded-[16px] dark:bg-second">
                                        <h4 className="font-inter font-medium text-[16px] leading-[24px] text-font-blue  dark:text-white">Category
                                        </h4>
                                    </div>
                                    <div
                                        className="flex items-center justify-center w-[176px] h-[176px] bg-white border-[2px] border-solid border-[#FF9040] rounded-[16px] dark:bg-second">
                                        <h4 className="font-inter font-medium text-[16px] leading-[24px] text-font-blue  dark:text-white">Deals</h4>
                                    </div>
                                    <div
                                        className="flex items-center justify-center w-[176px] h-[176px] bg-white border-[2px] border-solid border-[#FF9040] rounded-[16px] dark:bg-second">
                                        <h4 className="font-inter font-medium text-[16px] leading-[24px] text-font-blue  dark:text-white">Wishlist
                                        </h4>
                                    </div>
                                    <div
                                        className="flex items-center justify-center w-[176px] h-[176px] bg-white border-[2px] border-solid border-[#FF9040] rounded-[16px] dark:bg-second">
                                        <h4 className="font-inter font-medium text-[16px] leading-[24px] text-font-blue  dark:text-white">Profile
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- flowchart-section-end --> */}
            {/* <!-- user-persona-section-start --> */}
            <section className="lg:bg-[#faf9fd] dark:bg-transparent">
                <div className="max-w-[1612px] mx-auto px-8 xl:pt-[0px] relative z-10">
                    {/* <!-- project-text --> */}
                    <div className="xl:hidden pt-[100px] pb-[42px]">
                        <h3 className="font-jakarta font-bold text-[42px] text-font-blue dark:text-white">User Persona</h3>
                    </div>
                    <div
                        className="hidden xl:mb-[100px] xl:relative xl:flex xl:items-center xl:pt-[200px] xl:justify-between xl:gap-[10px]">
                        <h3
                            className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                            User Persona</h3>
                        <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                            07</h4>
                        <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                            src="/assets/images/case-status/design-border.svg" alt="border" />
                    </div>
                    {/* <!-- project-text --> */}
                    <div className="lg:flex lg:gap-[50px] xl:gap-[169px]">
                        <div className="relative w-ful lg:w-[379px]">
                            <div className="w-full lg:w-[379px]">
                                <img className="w-full lg:w-[379px]" src="/assets/images/case-status/case-study-man-01.png"
                                    alt="img" />
                            </div>
                            <div className="">
                                <div className="flex justify-between items-end mt-[-16px]">
                                    <h4 className="font-jakarta font-extralight text-[62px] leading-[78px] text-font-blue dark:text-white">JHON<br />
                                        DOE
                                    </h4>
                                    <p className="mt-[-8px] font-jakarta font-normal text-[24px] leading-[46px] text-font-blue dark:text-white">UI /
                                        UX DESIGNER</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div
                                className="lg:relative lg:w-full xl:w-[665px] flex content-end lg:content-start pt-[50px] lg:pt-[28px]">
                                <div className="lg:absolute lg:left-[-50px]">
                                    <img className="mt-[-20px] mr-[16px] max-w-[35px]"
                                        src="/assets/images/case-status/dnd-icon-01.png" alt="icon" />
                                </div>
                                <div
                                    className="relative w-[full] text-left ml-auto font-jakarta font-semibold text-[30px] leading-[40px] text-font-blue dark:text-white">
                                    Essence uses data science and technology to create more valuable advertising in the world.
                                    With 18 locations
                                    around the globe, they’re perhaps the most relevant brand you’ve never heard of.
                                    <div
                                        className="absolute bottom-[-7%] right-[8px] lg:right-[5%] lg:bottom-[-32px] xl:right-[-38px] xl:bottom-[-12px]">
                                        <img className="max-w-[35px]" src="/assets/images/case-status/dnd-icon-02.svg" alt="icon" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-text --> */}
                            <div className="pt-[70px] pb-[62px]">
                                <h3 className="pb-[24px] font-jakarta font-bold text-[32px] text-font-blue dark:text-white">User About</h3>
                                <p className="font-jakarta font-normal text-[24px] text-font-blue dark:text-white dark:opacity-80">Essence uses data science and
                                    technology to create more valuable advertising in the world. With 18 locations around the
                                    globe, they’re perhaps the most relevant.
                                    When they approached Ueno for a rebrand, we quickly realized what was needed – in addition
                                    to a new visual identity and website, they needed a clearer message and a more cohesive
                                    brand strategy.
                                </p>
                            </div>
                            {/* <!-- project-text --> */}
                            <div className="xl:w-full xl:grid xl:grid-cols-[55%_25%_20%] xl:gap-[0px]">
                                <div className="xl:w-full xl:pr-[45px]">
                                    <h4 className="pb-[24px] font-jakarta font-bold text-[30px] text-font-blue dark:text-white">Goals</h4>
                                    <ul className="xl:pl-[14px]">
                                        <li className="flex gap-[10px] mb-[14px]">
                                            <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                                            <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue dark:text-white">Needed
                                                an app to reach events & book them in online</p>
                                        </li>
                                        <li className="flex gap-[10px] mb-[14px]">
                                            <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                                            <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue dark:text-white">Need
                                                an App that is easy for online ticket booking</p>
                                        </li>
                                        <li className="flex gap-[10px] mb-[14px]">
                                            <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                                            <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue dark:text-white">
                                                Securely book tickets online</p>
                                        </li>
                                        <li className="flex gap-[10px]">
                                            <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                                            <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue dark:text-white">Easy
                                                payment method</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="xl:w-full pt-[45px] xl:pt-0 xl:pr-[45px]">
                                    <h4 className="pb-[34px] font-jakarta font-bold text-[30px] text-font-blue dark:text-white">Expertise</h4>
                                    <div className="f">
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80 dark:text-white">Branding
                                                : </h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue dark:text-white">90%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80 dark:text-white">UI / UX
                                                Design :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue dark:text-white">98%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80 dark:text-white">Prin
                                                Template :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue dark:text-white">90%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80 dark:text-white">Vector :
                                            </h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue dark:text-white">90%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-full pt-[45px] xl:pt-0">
                                    <h4 className="pb-[34px] font-jakarta font-bold text-[30px] text-font-blue dark:text-white">Language</h4>
                                    <div className="f">
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80 dark:text-white">Bangla :
                                            </h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue dark:text-white">90%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80 dark:text-white">Hindi :
                                            </h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue dark:text-white">98%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80 dark:text-white">English :
                                            </h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue dark:text-white">90%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80 dark:text-white">Spanish :
                                            </h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue dark:text-white">90%</p>
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
                        <h3 className="pb-[42px] font-jakarta font-bold text-[42px] leading-[52px] text-font-blue dark:text-white">Branding</h3>
                    </div>
                    <div
                        className="hidden xl:mb-[100px] xl:pt-[200px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                        <h3
                            className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                            Branding</h3>
                        <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                            08</h4>
                        <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                            src="/assets/images/case-status/design-border.svg" alt="border" />
                    </div>
                    {/* <!-- project-text --> */}
                    <div className="relative z-10 mb-6 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-second dark:bg-opacity-80">
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
                            <div className="flex flex-col justify-center items-center lg:flex-row">
                                <img className="lg:w-[242px]" src="/assets/images/case-status/branding-logo-01.svg" alt="img" />
                                <h3
                                    className="pt-6 lg:pt-0 lg:pl-[42px] font-jakarta font-bold text-[32px] lg:text-[62px] leading-[40px] lg:leading-[78.12px] text-font-blue text-center dark:text-white">
                                    Dailydealsdiscounts</h3>
                            </div>
                            <div className="flex flex-col justify-center items-center lg:flex-row pt-[62px]">
                                <img className="lg:w-[242px]" src="/assets/images/case-status/branding-logo-02.svg" alt="img" />
                                <h3
                                    className="pt-6 lg:pt-0 lg:pl-[42px] font-jakarta font-bold text-[32px] lg:text-[62px] leading-[40px] lg:leading-[78.12px] text-font-blue text-center dark:text-white">
                                    Dailydealsdiscounts</h3>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            <img className="w-full" src="/assets/images/case-status/branding-card-img-01.png" alt="img" />
                            <img className="w-full" src="/assets/images/case-status/branding-card-img-02.png" alt="img" />
                            <img className="w-full" src="/assets/images/case-status/branding-card-img-03.png" alt="img" />
                            <img className="w-full" src="/assets/images/case-status/branding-card-img-04.png" alt="img" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- branding-section-section-end --> */}
            {/* <!-- Lo-fi-design-section-start --> */}
            <section className="bg-[#fdfdfe] hidden xl:block dark:bg-transparent">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="relative z-10">
                        <div className="">
                            {/* <!-- project-text --> */}
                            <div className="xl:hidden pt-[100px] pb-[62px]">
                                <h3 className="font-jakarta font-bold text-[42px] text-font-blue leading-[52px] dark:text-white">Lo-Fi Design</h3>
                                <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px] dark:text-white">The
                                    final design incorporated detailed visual elements, interactive features, and brand-aligned
                                    aesthetics for a polished user experience.
                                </p>
                            </div>
                            <div className="hidden xl:block">
                                <div
                                    className="xl:mb-[62px] xl:pt-[259px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                    <h3
                                        className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                                        Lo-Fi Design</h3>
                                    <h4
                                        className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                                        09</h4>
                                    <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                                        src="/assets/images/case-status/design-border.svg" alt="border" />
                                </div>
                                <p
                                    className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px] dark:text-white dark:text-opacity-80">
                                    Initial wireframes established the app’s structure and functionality, focusing on user flow
                                    and content placement.
                                </p>
                            </div>
                            {/* <!-- project-text --> */}
                        </div>
                        <div className="hidden md:inline-block w-full pb-[62px]">
                            <img className="w-full" src="/assets/images/case-status/hi-fi-phone-img.webp" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="md:hidden w-full pb-[62px]">
                    <img className="w-full" src="/assets/images/case-status/hi-fi-phone-img.svg" alt="img" />
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
                            <h3 className="font-jakarta font-bold text-[42px] text-font-blue leading-[52px] dark:text-white">Hi-Fi Design</h3>
                            <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px] dark:text-white">The final
                                design incorporated detailed visual elements, interactive features, and brand-aligned aesthetics
                                for a polished user experience.
                            </p>
                        </div>
                        <div className="hidden xl:block">
                            <div
                                className="xl:mb-[62px] xl:pt-[230px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                <h3
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                                    Hi-Fi Design</h3>
                                <h4
                                    className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                                    10</h4>
                                <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px] dark:text-white dark:text-opacity-80">
                                The final design incorporated detailed visual elements, interactive features, and brand-aligned
                                aesthetics for a polished user experience.
                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        <div className="hidden md:inline-block w-full pb-[62px]">
                            <img className="w-full" src="/assets/images/case-status/hi-fi-phone-img.webp" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="md:hidden w-full pb-[62px]">
                    <img className="w-full" src="/assets/images/case-status/hi-fi-phone-img.svg" alt="img" />
                </div>
            </section>
            {/* <!-- hi-fi-design-section-end --> */}

            {/* <!-- hi-fi-design-section-start --> */}
            <section className="bg-[#fdfdfe] dark:bg-transparent">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="relative z-10">
                        {/* <!-- project-text --> */}
                        <div className="xl:hidden pt-[100px] pb-[62px]">
                            <h3 className="font-jakarta font-bold text-[42px] text-font-blue leading-[52px] dark:text-white">Testing</h3>
                            <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px] dark:text-white dark:text-opacity-80">We conducted
                                extensive testing to ensure the app’s stability, usability, and performance across different
                                devices and platforms.
                            </p>
                        </div>
                        <div className="hidden xl:block">
                            <div
                                className="xl:mb-[62px] xl:pt-[230px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                <h3
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                                    Testing</h3>
                                <h4
                                    className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                                    11</h4>
                                <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px] dark:text-white dark:text-opacity-80">
                                We conducted extensive testing to ensure the app’s stability, usability, and performance across
                                different devices and platforms.
                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        <div className="hidden md:inline-block w-full pb-[62px]">
                            <img className="w-full" src="/assets/images/case-status/hi-fi-phone-img.webp" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="md:hidden w-full pb-[62px]">
                    <img className="w-full" src="/assets/images/case-status/hi-fi-phone-img.svg" alt="img" />
                </div>
            </section>
            {/* <!-- hi-fi-design-section-end --> */}


            {/* <!-- hi-fi-design-section-start --> */}
            <section className="bg-[#fdfdfe] dark:bg-transparent">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="relative z-10">
                        {/* <!-- project-text --> */}
                        <div className="xl:hidden pt-[100px] pb-[62px]">
                            <h3 className="font-jakarta font-bold text-[42px] text-font-blue leading-[52px] dark:text-white">Deployment</h3>
                            <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px] dark:text-white">The app was
                                deployed on both the App Store and Google Play, following a smooth handover and launch strategy.

                            </p>
                        </div>
                        <div className="hidden xl:block">
                            <div
                                className="xl:mb-[62px] xl:pt-[230px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                <h3
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                                    Deployment</h3>
                                <h4
                                    className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                                    12</h4>
                                <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px] dark:text-white">
                                The app was deployed on both the App Store and Google Play, following a smooth handover and
                                launch strategy.
                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        <div className="hidden md:inline-block w-full pb-[62px]">
                            <img className="w-full" src="/assets/images/case-status/hi-fi-phone-img.webp" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="md:hidden w-full pb-[62px]">
                    <img className="w-full" src="/assets/images/case-status/hi-fi-phone-img.svg" alt="img" />
                </div>
            </section>
            {/* <!-- hi-fi-design-section-end --> */}


            {/* <!-- hi-fi-design-section-start --> */}
            <section className="bg-[#fdfdfe] bg-transparent">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="relative z-10">
                        {/* <!-- project-text --> */}
                        <div className="xl:hidden pt-[100px] pb-[62px]">
                            <h3 className="font-jakarta font-bold text-[42px] text-font-blue leading-[52px] dark:text-white">App Publish
                            </h3>
                            <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px] dark:text-white">After
                                rigorous testing and quality assurance, the app was successfully published, receiving positive
                                feedback and strong user engagement.

                            </p>
                        </div>
                        <div className="hidden xl:block">
                            <div
                                className="xl:mb-[62px] xl:pt-[230px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                <h3
                                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:text-white">
                                    App Publish
                                </h3>
                                <h4
                                    className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px] dark:text-white">
                                    13</h4>
                                <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px] dark:text-white">
                                After rigorous testing and quality assurance, the app was successfully published, receiving
                                positive feedback and strong user engagement.
                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        <div className="hidden md:inline-block w-full pb-[62px]">
                            <img className="w-full" src="/assets/images/case-status/hi-fi-phone-img.webp" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="md:hidden w-full pb-[62px]">
                    <img className="w-full" src="/assets/images/case-status/hi-fi-phone-img.svg" alt="img" />
                </div>
            </section>
            {/* <!-- hi-fi-design-section-end --> */}


            {/* <!-- footer-section-stat --> */}
            <section className="bg-white hidden xl:block dark:bg-transparent">
                <div className="max-w-[1612px] mx-auto px-8 relative z-10">
                    <div className="flex justify-center pt-[110px] pb-[146px]">
                        <div className="relative w-[393px]">
                            <h4
                                className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] font-jakarta font-bold text-[100px] leading-[126px] text-font-blue dark:text-white">
                                Now</h4>
                            <div className="">
                                <img src="/assets/images/case-status/now-footer-text-bg.svg" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full pb-[100px]">
                        <img className="w-full" src="/assets/images/case-status/footer-phone-img.svg" alt="img" />
                    </div>
                </div>
            </section>
        </>
    );
}
