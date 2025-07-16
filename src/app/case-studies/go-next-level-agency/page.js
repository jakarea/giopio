import FloatingBox from "../components/FloatingBox";
import meta from "../../../../data/meta/case-study/go-next-level-agency.json"

export const metadata = {
    ...meta
};

export default function GoNextLevelAgency() {

    return (
        <>
            {/* <FloatingBox /> */}

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
                    <img src="/assets/images/case-status/gonextlavel-img/header-dot-01.svg" alt="icon" />
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
                            <img className="w-[240px] md:w-[291px]" src="/assets/images/case-status/gonextlavel-img/gonextlevel-logo.svg"
                                alt="logo" />
                        </div>
                        <h3
                            className="pt-6 font-jakarta font-bold text-[42px] lg:text-[58px] xl:text-[72px] leading-[52px] lg:leading-[70px] xl:leading-[90.72px] text-center text-font-blue">
                            Transforming <span className="go-header-title">Marketing Vision</span><br />into Reality</h3>
                        <p
                            className="pt-6 pb-[72px] font-poppins font-normal text-[18px] leading-[28px] text-center text-font-blue xl:w-[1064px]">
                            Short description : We collaborated with Dorian Olam, a forward-thinking
                            marketing agency, to create a dynamic and visually engaging website. Built using Tailwind CSS and GSAP
                            animation, the custom WordPress theme offers a seamless user experience that aligns with their brand's
                            innovative approach.
                        </p>
                        <div className="">
                            <div className="lg:flex lg:items-center justify-center lg:gap-[18px] xl:gap-[39px]">
                                <div
                                    className="cursor-pointer hover:border hover:border-solid hover:border-[#0E5AFA] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                    <img src="/assets/images/case-status/gonextlavel-img/go-checkbox-icon.svg" alt="icon" />
                                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Tailwind
                                        CSS</span>
                                </div>
                                <div
                                    className="cursor-pointer hover:border hover:border-solid hover:border-[#0E5AFA] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                    <img src="/assets/images/case-status/gonextlavel-img/go-checkbox-icon.svg" alt="icon" />
                                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">GSAP
                                        Animation</span>
                                </div>
                                <div
                                    className="cursor-pointer hover:border hover:border-solid hover:border-[#0E5AFA] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                    <img src="/assets/images/case-status/gonextlavel-img/go-checkbox-icon.svg" alt="icon" />
                                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Custom
                                        WordPress Theme</span>
                                </div>
                                <div
                                    className="cursor-pointer hover:border hover:border-solid hover:border-[#0E5AFA] transition duration-[0.2s] inline-flex items-center gap-[10px] py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                                    <img src="/assets/images/case-status/gonextlavel-img/go-checkbox-icon.svg" alt="icon" />
                                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Seamless
                                        UX</span>
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
                {/* <!-- rasponsive-mobile-img --> */}
                <div className="relative z-30 flex justify-center">
                    <img className="mt-[-116px] xl:mt-[-330px]" src="/assets/images/case-status/gonextlavel-img/go-laptop-img.webp"
                        alt="img" />
                </div>
                {/* <!-- rasponsive-mobile-img --> */}
                {/* <!-- phobe-image --> */}
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-all-card-start --> */}
                    <div className="pt-[50px] xl:pt-[200px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[40px] xl:gap-[32px]">
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-[#313131]">
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
                                <img src="/assets/images/case-status/gonextlavel-img/go-project-icon.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Innovative Design</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Crafted a modern, sleek design
                                    that reflects
                                    the agency's forward-thinking ethos.
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-[#313131]">
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
                                <img src="/assets/images/case-status/gonextlavel-img/go-project-icon-02.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Tailwind CSS</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Utilized Tailwind CSS for a
                                    flexible, responsive, and highly customizable design framework.</p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-[#313131]">
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
                                <img src="/assets/images/case-status/gonextlavel-img/go-project-icon-03.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">GSAP Animation</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Integrated GSAP animations to
                                    enhance user
                                    engagement with smooth, interactive elements.
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-[#313131]">
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
                                <img src="/assets/images/case-status/gonextlavel-img/go-project-icon-04.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Custom Theme</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Developed a fully custom
                                    WordPress theme to meet the unique needs of the client.
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-[#313131]">
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
                                <img src="/assets/images/case-status/gonextlavel-img/go-project-icon-05.svg" alt="icon" />
                                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">SEO Optimized</h4>
                                <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Ensured the site is
                                    SEO-friendly, driving organic traffic and improving search engine rankings.
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-[#313131]">
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
                                <img src="/assets/images/case-status/gonextlavel-img/go-project-icon-06.svg" alt="icon" />
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
                                    className="xl:bg-[#faf9fd] relative z-10 pr-[52px] font-jakarta font-bold text-[36px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:bg-transparent">
                                    Creating a Unique Digital Experience</h3>
                                <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">01
                                </h4>
                                <img id="design-top-border" className="hidden w-full xl:absolute z-0 xl:bottom-[34px] xl:right-[-42px]"
                                    src="/assets/images/case-status/design-border.svg" alt="border" />
                            </div>
                            <p
                                className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                Our design approach centered on creating a unique digital experience that not only represents Dorian Olam’s
                                brand identity but also engages their audience effectively. By leveraging modern design principles and
                                cutting-edge technology, we crafted a site that is both aesthetically pleasing and highly functional.
                            </p>
                        </div>
                        {/* <!-- project-text --> */}
                        {/* <!-- project-all-card-start --> */}
                        <div id="design-all-card" className="grid lg:grid-cols-2 lg:gap-[30px] xl:grid-cols-3 xl:gap-8">
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#313131]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="relative z-10">
                                    <img src="/assets/images/case-status/gonextlavel-img/go-reseach-icon.svg" alt="icon" />
                                    <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Custom Design</h4>
                                    <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">Crafted a bespoke design
                                        tailored to the client’s brand.</p>
                                    <div className="flex flex-col">
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Unique
                                                branding elements</span>
                                        </div>
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Custom
                                                layouts</span>
                                        </div>
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span
                                                className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Tailored
                                                visuals</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#313131]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="relative z-10">
                                    <img src="/assets/images/case-status/gonextlavel-img/go-reseach-icon.svg" alt="icon" />
                                    <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Animation</h4>
                                    <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">Implemented advanced
                                        animations to enhance user interaction.</p>
                                    <div className="flex flex-col">
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Smooth
                                                transitions</span>
                                        </div>
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span
                                                className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Attention-grabbing
                                                effects</span>
                                        </div>
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Subtle
                                                movements</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 mb-6 xl:mb-0 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#313131]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="relative z-10">
                                    <img src="/assets/images/case-status/gonextlavel-img/go-reseach-icon.svg" alt="icon" />
                                    <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Responsiveness</h4>
                                    <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">Ensured the site is fully
                                        responsive across all devices.</p>
                                    <div className="flex flex-col">
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span
                                                className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Mobile-friendly
                                                design</span>
                                        </div>
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Fluid
                                                layouts</span>
                                        </div>
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span
                                                className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Optimized
                                                for all screens</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-all-card-end --> */}
                            {/* <!-- project-all-card-start --> */}
                            <div className="relative z-10 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#313131]">
                                <div className="w-full absolute z-10 top-0 left-0">
                                    <img className="w-full" src="/assets/images/case-status/card-top-border-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="w-full absolute z-0 top-[-1px] left-0">
                                    <img className="w-full" src="/assets/images/case-status/case-project-card-bg.svg" alt="icon" />
                                </div>
                                {/* <!-- gradient-linear-bg --> */}
                                <div className="relative z-10">
                                    <img src="/assets/images/case-status/gonextlavel-img/go-reseach-icon.svg" alt="icon" />
                                    <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">SEO Integration</h4>
                                    <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">Integrated SEO best
                                        practices to boost visibility.</p>
                                    <div className="flex flex-col">
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span
                                                className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Keyword
                                                optimization</span>
                                        </div>
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Meta
                                                tags</span>
                                        </div>
                                        <div className="inline-flex items-center gap-[10px] pb-[12px]">
                                            <img src="/assets/images/case-status/gonextlavel-img/go-check-icon.svg" alt="icon" />
                                            <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Fast
                                                load times</span>
                                        </div>
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
                <div className="w-full absolute z-0 bottom-[-162px] left-[46px]">
                    <img className="w-full hidden xl:inline-block" src="/assets/images/case-status/app-section-phone-bg.svg" alt="bg" />
                </div>
                <div className="w-full absolute z-0 bottom-[-360px] left-[126px]">
                    <img className="w-full hidden xl:inline-block" src="/assets/images/case-status/gonextlavel-img/go-web-bg.png" alt="bg" />
                </div>
                {/* <!-- app-phone-bg-dot --> */}
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="relative z-10 pt-[100px] xl:pt-[200px] pb-[62px] xl:pb-[72px]">
                        <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                            <h3
                                className="xl:bg-[#f7f5fd5b] relative z-10 pr-[52px] font-jakarta font-bold text-[28px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px] dark:bg-transparent">
                                Focused on Performance and Aesthetics</h3>
                            <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">02</h4>
                            <img id="design-top-border" className="hidden w-[600px] xl:absolute z-0 xl:bottom-[34px] xl:right-[-42px]"
                                src="/assets/images/case-status/design-border.svg" alt="border" />
                        </div>
                        <p
                            className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                            We focused on creating a website that is not only visually appealing but also high-performing. Utilizing the
                            latest technologies, we ensured that the site loads quickly,
                            provides a seamless user experience, and meets all of the client's marketing goals.
                        </p>
                    </div>
                    {/* <!-- project-text --> */}
                    <div className="relative z-20">
                        {/* <!-- web-screen-pc-img --> */}
                        <div className="w-full flex justify-center items-center">
                            <img className="w-[1099px]" src="/assets/images/case-status/gonextlavel-img/go-web.png" alt="img" />
                        </div>
                        {/* <!-- web-screen-pc-img --> */}
                    </div>
                </div>
            </section>
            {/* <!-- app-screen-img-section-end --> */}
            {/* <!-- typography-section-start --> */}
            <section>
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="relative z-10 pt-[169px] pb-[42px] xl:pb-[195px]">
                        <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                            <h3
                                className="bg-[#faf9fd] dark:bg-transparent font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                Typography</h3>
                            <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">03</h4>
                            <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                                src="/assets/images/case-status/design-border.svg" alt="border" />
                        </div>
                    </div>
                    <div className="xl:flex xl:justify-between xl:items-start xl:gap-[103px]">
                        <div className="relative z-20 xl:w-full">
                            <div className="">
                                <h5
                                    className="xl:relative z-30 xl:text-left font-jakarta font-bold text-[250px] xl:text-[500px] text-font-blue text-center leading-[315px] xl:leading-[355px] xl:pb-[29px]">
                                    Aa</h5>
                                <div className="hidden xl:inline-block absolute z-10 top-[-28%] left-0">
                                    <img className="w-full" src="/assets/images/case-status/typography-text-bg.svg" alt="bg" />
                                </div>
                            </div>
                            <p className="pb-[42px] xl:pt-[100px] font-poppins font-normal text-[24px] text-font-blue">We selected a
                                typography style that is modern, clean, and easy to read. The font choices align with the
                                overall brand aesthetic and contribute to a professional yet approachable feel.
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
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</div>
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
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</div>
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
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</div>
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
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</div>
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
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</div>
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
                                        <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</div>
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
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Extra Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">62px</li>
                                        <li className="pt-[14px] xl:pr-[63px] font-work font-normal text-[18px] leading-[21px] text-font-blue">160%
                                        </li>
                                    </ul>
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H2</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">48px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-6 pt-6">
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H3</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">42px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</li>
                                    </ul>
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H4</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">32px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-6 pt-6">
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H5</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">24px</li>
                                        <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">140%</li>
                                    </ul>
                                    <ul className="">
                                        <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H4</li>
                                        <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Jakarta Sans</li>
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
                            className=" font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                            Brand Color</h3>
                        <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">04</h4>
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
                                <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871] dark:text-white">Background Color</h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[264px] h-[89px] rounded-[12px] bg-[#FF9040]"></div>
                                    <div className="brand-color-linear"></div>
                                </div>
                                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-02.png" alt="img" />
                                <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871] dark:text-white">Button Color</h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[32px] h-[89px] rounded-[12px] bg-[#9501FF]"></div>
                                    <div className="w-[252px] h-[89px] rounded-[12px] bg-[#005AE1]"></div>
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
                            <div className="mb-[10px]">
                                <div id="brand-colot-tow" className="w-full h-[120px] rounded-tl-[16px] rounded-tr-[16px]"></div>
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
                            <div className="mb-[32px]">
                                <div id="brand-colot-tow" className="w-full h-[120px] rounded-bl-[16px] rounded-br-[16px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- brand-color-section-end --> */}
            {/* <!-- user-persona-section-start --> */}
            <section className="">
                <div className="max-w-[1612px] mx-auto px-8 xl:pt-[0px] relative z-10">
                    {/* <!-- project-text --> */}
                    <div className="xl:hidden pt-[100px] pb-[42px]">
                        <h3 className="font-jakarta font-bold text-[42px] text-font-blue">User Persona</h3>
                    </div>
                    <div
                        className="hidden xl:mb-[100px] xl:relative xl:flex xl:items-center xl:pt-[200px] xl:justify-between xl:gap-[10px]">
                        <h3
                            className=" font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                            User Persona</h3>
                        <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">06</h4>
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
                                    <h4 className="font-jakarta font-extralight text-[55px] leading-[78px] text-font-blue">Dorian<br />
                                        Olam</h4>
                                    <p className="mt-[-12px] font-jakarta font-normal text-[24px] leading-[60px] text-font-blue">Marketing Agency
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
                                    Dorian Olam specializes in creating innovative marketing strategies for various clients. With a team of
                                    experts in different fields, they needed a
                                    website that would reflect their expertise and help them stand out in a competitive market.
                                    <div
                                        className="absolute bottom-[-7%] right-[8px] lg:right-[5%] lg:bottom-[-32px] xl:right-[-5px] xl:bottom-[-12px]">
                                        <img className="max-w-[35px]" src="/assets/images/case-status/dnd-icon-02.svg" alt="icon" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- project-text --> */}
                            <div className="pt-[70px] pb-[62px]">
                                <h3 className="pb-[24px] font-jakarta font-bold text-[32px] text-font-blue">User About</h3>
                                <p className="font-jakarta font-normal text-[24px] text-font-blue">Dorian Olam is a marketing agency that
                                    leverages data-driven strategies and creative thinking to deliver exceptional results for their clients.
                                    They required a
                                    website that could showcase their portfolio, attract new clients, and serve as a hub for their marketing
                                    insights.
                                </p>
                            </div>
                            {/* <!-- project-text --> */}
                            <div className="xl:w-full xl:grid xl:grid-cols-[55%_25%_20%] xl:gap-[0px]">
                                <div className="xl:w-full xl:pr-[42px]">
                                    <h4 className="pb-[24px] xl:pb-[34px] font-jakarta font-bold text-[30px] text-font-blue">Goals</h4>
                                    <ul className="xl:pl-[3px]">
                                        <li className="flex gap-[10px] mb-[14px] xl:mb-[19px]">
                                            <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                                            <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue">Attract new clients
                                                through a compelling digital presence</p>
                                        </li>
                                        <li className="flex gap-[10px] mb-[14px] xl:mb-[19px]">
                                            <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                                            <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue">Improve user engagement
                                                with interactive elements.</p>
                                        </li>
                                        <li className="flex gap-[10px] mb-[14px] xl:mb-[19px]">
                                            <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                                            <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue">Provide a hub for
                                                marketing insights and resources</p>
                                        </li>
                                        <li className="flex gap-[10px] xl:mb-[19px]">
                                            <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                                            <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue">Showcase marketing
                                                strategies and portfolio</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="xl:w-full pt-[45px] xl:pt-0 xl:pr-[42px]">
                                    <h4 className="pb-[34px] font-jakarta font-bold text-[30px] text-font-blue">Expertise</h4>
                                    <div className="f">
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">Branding :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">90%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">UI / UX Design :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">92%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">Content Strategy</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">90%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">SEO</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">88%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="xl:w-full pt-[45px] xl:pt-0">
                                    <h4 className="pb-[34px] font-jakarta font-bold text-[30px] text-font-blue">Language</h4>
                                    <div className="f">
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">Bangla :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">90%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">Hindi :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">92%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px] mb-[23px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">English :</h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">90%</p>
                                        </div>
                                        <div className="flex items-center gap-[18px]">
                                            <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">Spanish : </h5>
                                            <p className="font-jakarta font-medium text-[18px] text-font-blue">90%</p>
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
            <section className="">
                <div className="max-w-[1612px] mx-auto px-8">
                    {/* <!-- project-text --> */}
                    <div className="xl:hidden pt-[100px]">
                        <h3 className="pb-[42px] font-jakarta font-bold text-[42px] leading-[52px] text-font-blue">Branding</h3>
                    </div>
                    <div
                        className="hidden xl:mb-[100px] xl:pt-[200px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                        <h3
                            className=" font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                            Branding</h3>
                        <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">07</h4>
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
                        <div className="flex flex-col justify-center items-center relative z-10 lg:pt-[120px] lg:pb-[119px]">
                            <div className="">
                                <img src="/assets/images/case-status/gonextlavel-img/gonextlavel-footer-logo.svg" alt="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- branding-section-section-end --> */}
            {/* <!-- plugins-and-libraries-used-design-section-start --> */}
            <section className="">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="relative z-10">
                        <div className="">
                            {/* <!-- project-text --> */}
                            <div className="xl:hidden pt-[100px] pb-[62px]">
                                <h3 className="font-jakarta font-bold text-[32px] xl:text-[42px] text-font-blue leading-[52px]">Fully Responsive
                                    Across All Devices</h3>
                                <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px]">The website was
                                    designed with a mobile-first approach, ensuring it looks and functions perfectly on any device. Whether on
                                    a smartphone,
                                    tablet, or desktop, users experience the same high-quality interface and performance.
                                </p>
                            </div>
                            <div className="hidden xl:block">
                                <div
                                    className="xl:mb-[62px] xl:pt-[200px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                    <h3
                                        className="relative z-10 pr-[62px] font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                        Fully Responsive Across All Devices</h3>
                                    <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">08
                                    </h4>
                                    <img id="design-top-border" className="hidden xl:absolute z-0 xl:bottom-[34px] xl:right-0"
                                        src="/assets/images/case-status/design-border.svg" alt="border" />
                                </div>
                                <p
                                    className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                    The website was designed with a mobile-first approach, ensuring it looks and functions perfectly on any
                                    device. Whether on a smartphone,
                                    tablet, or desktop, users experience the same high-quality interface and performance.
                                </p>
                            </div>
                            {/* <!-- project-text --> */}
                        </div>
                        <div className="w-full">
                            <div className="flex justify-center items-center">
                                <img className="w-full" src="/assets/images/case-status/gonextlavel-img/responsive-view-img-02.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- plugins-and-libraries-used-design-section-end --> */}
            {/* <!-- technology-description-design-section-start --> */}
            <section className="">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="relative z-10">
                        <div className="">
                            {/* <!-- project-text --> */}
                            <div className="xl:hidden pt-[0px] pb-[62px]">
                                <h3 className="font-jakarta font-bold text-[32px] xl:text-[42px] text-font-blue leading-[52px]">Tailwind CSS &
                                    GSAP</h3>
                                <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px]">We used Tailwind CSS
                                    for its flexibility and utility-first approach, making the design process faster and more efficient. GSAP
                                    animations were integrated
                                    to provide smooth, high-performance animations that enhance user engagement.
                                </p>
                            </div>
                            <div className="hidden xl:block">
                                <div className="xl:mb-[62px] xl:pt-[0px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                    <h3
                                        className="relative z-10 pr-[62px] font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                        Tailwind CSS & GSAP</h3>
                                    <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">09
                                    </h4>
                                    <img id="design-top-border" className="hidden xl:absolute z-0 xl:bottom-[34px] xl:right-0"
                                        src="/assets/images/case-status/design-border.svg" alt="border" />
                                </div>
                                <p
                                    className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                    We used Tailwind CSS for its flexibility and utility-first approach, making the design process faster and
                                    more efficient. GSAP animations were integrated
                                    to provide smooth, high-performance animations that enhance user engagement.
                                </p>
                            </div>
                            {/* <!-- project-text --> */}
                        </div>
                        <div className="flex justify-center items-center">
                            <img className="w-[1080px]" src="/assets/images/case-status/gonextlavel-img/technology-02.png" alt="img" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- technology-description-design-section-end --> */}
            {/* <!-- review-and-feedback-design-section-start --> */}
            <section className="">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="relative z-10">
                        <div className="">
                            {/* <!-- project-text --> */}
                            <div className="xl:hidden pt-[100px] pb-[62px]">
                                <h3 className="font-jakarta font-bold text-[32px] xl:text-[42px] text-font-blue leading-[52px]">Why Tailwind CSS
                                    and GSAP Are Perfect</h3>
                                <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px]">Tailwind CSS was
                                    chosen for its ability to create responsive and custom designs quickly. Its utility-first approach allows
                                    for more control over styling without writing extensive CSS. GSAP was selected for its
                                    powerful animation capabilities, which bring the site to life with smooth, engaging transitions.
                                </p>
                            </div>
                            <div className="hidden xl:block">
                                <div
                                    className="xl:mb-[62px] xl:pt-[100px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                    <h3
                                        className="relative z-10 pr-[62px] font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                        Why Tailwind CSS and GSAP Are Perfect</h3>
                                    <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">10
                                    </h4>
                                    <img id="design-top-border" className="hidden xl:absolute z-0 xl:bottom-[34px] xl:right-0"
                                        src="/assets/images/case-status/design-border.svg" alt="border" />
                                </div>
                                <p
                                    className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                    Tailwind CSS was chosen for its ability to create responsive and custom designs quickly. Its utility-first
                                    approach allows for more control over styling without writing extensive CSS. GSAP was selected for its
                                    powerful animation
                                    capabilities, which bring the site to life with smooth, engaging transitions.
                                </p>
                            </div>
                            {/* <!-- project-text --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- review-and-feedback-design-section-end --> */}
            {/* <!-- client-satisfaction-design-section-start --> */}
            <section className="">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="relative z-10">
                        <div className="">
                            {/* <!-- project-text --> */}
                            <div className="xl:hidden pt-[100px] pb-[62px]">
                                <h3 className="font-jakarta font-bold text-[32px] lg:text-[42px] text-font-blue leading-[52px]">Client
                                    Satisfaction at Its Best</h3>
                                <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px]">Tailwind CSS was
                                    chosen for its ability to create responsive and custom designs quickly. Its utility-first approach allows
                                    for more control over styling without writing extensive CSS. GSAP was selected for its
                                    powerful animation capabilities, which bring the site to life with smooth, engaging transitions.
                                </p>
                            </div>
                            <div className="hidden xl:block">
                                <div
                                    className="xl:mb-[62px] xl:pt-[100px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                    <h3
                                        className="relative z-10 pr-[62px] font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                        Client Satisfaction at Its Best</h3>
                                    <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">11
                                    </h4>
                                    <img id="design-top-border" className="hidden xl:absolute z-0 xl:bottom-[34px] xl:right-0"
                                        src="/assets/images/case-status/design-border.svg" alt="border" />
                                </div>
                                <p
                                    className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                    Dorian Olam expressed their utmost satisfaction with the final product, praising the website’s design,
                                    functionality, and the seamless experience it provides to their users. The site has received
                                    positive feedback from their clients, who find it both visually appealing and easy to navigate.
                                </p>
                            </div>
                            {/* <!-- project-text --> */}
                            {/* <!-- project-image --> */}
                            {/* <!-- <div className="flex justify-center my-[100px]"> */}
                            <img className="w-full lg:w-[580px] mx-auto max-w-[90%]" src="/assets/images/case-status/gonextlavel-img/client-satisfaction.jpg" alt="img" />
                        </div>
                        {/* <!-- project-image --> */}
                    </div>
                </div>
            </section >
            <section className="">
                <div className="max-w-[1612px] mx-auto px-8">
                    <div className="relative z-10">
                        <div className="">
                            {/* <!-- project-text --> */}
                            <div className="xl:hidden pt-[100px] pb-[62px]">
                                <h3 className="font-jakarta font-bold text-[32px] lg:text-[42px] text-font-blue leading-[52px]">A Website That
                                    Sets New Standards</h3>
                                <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px]">The final website
                                    not only meets Dorian Olam’s requirements but exceeds their expectations. It stands as a testament to
                                    Giopio’s ability to deliver high-quality, custom solutions that drive results. The site has become a key
                                    asset
                                    in their marketing toolkit, helping them attract new clients and showcase their work effectively.
                                </p>
                            </div>
                            <div className="hidden xl:block">
                                <div
                                    className="xl:mb-[62px] xl:pt-[100px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                                    <h3
                                        className="relative z-10 pr-[62px] font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                                        A Website That Sets New Standards</h3>
                                    <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">12
                                    </h4>
                                    <img id="design-top-border" className="hidden xl:absolute z-0 xl:bottom-[34px] xl:right-0"
                                        src="/assets/images/case-status/design-border.svg" alt="border" />
                                </div>
                                <p
                                    className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                                    The final website not only meets Dorian Olam’s requirements but exceeds their expectations. It stands as a
                                    testament to Giopio’s ability to deliver high-quality, custom solutions that drive results. The site has
                                    become a key asset
                                    in their marketing toolkit, helping them attract new clients and showcase their work effectively.
                                </p>
                            </div>
                            {/* <!-- project-text --> */}
                        </div>
                        <div className="flex justify-center items-center pb-[62px]">
                            <img className="w-[1080px]" src="/assets/images/case-status/gonextlavel-img/gnloutcome.png" alt="img" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
