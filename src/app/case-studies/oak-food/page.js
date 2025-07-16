import React from 'react'
import FloatingBox from '../components/FloatingBox';
import meta from "../../../../data/meta/case-study/oak-food.json"

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
              <img className="w-[240px] md:w-[291px]" src="/assets/images/case-status/oak-food/oakfoodlogo.svg" alt="logo" />
            </div>
            <h1
              className="pt-6 font-jakarta font-bold text-[42px] lg:text-[58px] xl:text-[72px] leading-[52px] lg:leading-[70px] xl:leading-[90.72px] text-center text-font-blue">
              Oak Food <span className="go-header-title">A Comprehensive</span><br />
              Premium E-Commerce Platform
            </h1>
            <p
              className="pt-6 pb-[72px] font-poppins font-normal text-[18px] leading-[28px] text-center text-font-blue xl:w-[1064px]">
              We collaborated with OakFood to develop a custom e-commerce website that showcases their premium food
              products. The project involved creating a user-friendly, visually appealing platform that reflects the brand's
              commitment to quality and excellence. Our goal was to deliver an exceptional online shopping experience that
              drives sales and enhances customer satisfaction.</p>
            <div className="">
              <div className="lg:flex lg:items-center justify-center lg:gap-[18px] xl:gap-[39px]">
                <div
                  className="cursor-pointer hover:border hover:border-solid hover:border-[#0E5AFA] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                  <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                  <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">WordPress
                    Development</span>
                </div>
                <div
                  className="cursor-pointer hover:border hover:border-solid hover:border-[#0E5AFA] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                  <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                  <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Premium
                    E-Commerce</span>
                </div>
                <div
                  className="cursor-pointer hover:border hover:border-solid hover:border-[#0E5AFA] transition duration-[0.2s] inline-flex items-center gap-[10px] mb-[13px] lg:mb-0 py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                  <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                  <span
                    className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">High-Quality
                    Design & UI/UX</span>
                </div>
                <div
                  className="cursor-pointer hover:border hover:border-solid hover:border-[#0E5AFA] transition duration-[0.2s] inline-flex items-center gap-[10px] py-4 pl-4 pr-[18px] bg-case-check-bg rounded-[999px] border border-solid border-case-check-border">
                  <img src="/assets/images/case-status/check-round.svg" alt="icon" />
                  <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Seamless
                    User Experience</span>
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
          <img className="mt-[-116px] xl:mt-[-330px] max-w-[90%] mx-auto xl:max-w-[70%]"
            src="/assets/images/case-status/oak-food/1st-section-image.webp" alt="img" />
        </div>
        {/* <!-- rasponsive-mobile-img --> */}
        {/* <!-- phobe-image --> */}
        <div className="max-w-[1612px] mx-auto px-8">
          {/* <!-- project-all-card-start --> */}
          <div className="pt-[50px] xl:pt-[200px] grid grid-cols-1 xl:grid-cols-3 gap-0 xl:gap-[62px]">
            {/* <!--   --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[24px] xl:flex xl:flex-col xl:gap-[32px]">
              <div className="relative z-0 mb-6 xl:mb-0 overflow-hidden bg-[#f6f8fcbd] p-8 rounded-[16px] dark:bg-[#313131]">
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
                  <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Custom Design</h4>
                  <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Developed a unique,
                    brand-aligned design that highlights the premium nature of OakFood's products.</p>
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
                  <img src="/assets/images/case-status/case-study-project-icon-02.svg" alt="icon" />
                  <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Data E-Commerce
                    Integration </h4>
                  <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Implemented WooCommerce to
                    provide a seamless shopping experience with custom features tailored to the client’s needs.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[24px] xl:flex xl:flex-col xl:gap-[32px] xl:pt-0">
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
                  <img src="/assets/images/case-status/case-study-project-icon-03.svg" alt="icon" />
                  <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">High Performance</h4>
                  <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Optimized for speed and
                    reliability, ensuring a smooth, efficient browsing experience for all users.</p>
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
                  <img src="/assets/images/case-status/case-study-project-icon-04.svg" alt="icon" />
                  <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">SEO Optimization</h4>
                  <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Incorporated SEO best practices
                    to improve search engine visibility and attract organic traffic.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[24px] xl:flex xl:flex-col xl:gap-[32px] xl:pt-0">
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
                  <img src="/assets/images/case-status/case-study-project-icon-03.svg" alt="icon" />
                  <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Responsive Design</h4>
                  <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Ensured the website is fully
                    responsive, delivering an optimal experience on all devices.</p>
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
                  <img src="/assets/images/case-status/case-study-project-icon-04.svg" alt="icon" />
                  <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">User Experience</h4>
                  <p className="font-work font-normal text-[18px] text-font-blue leading-[23px]">Focused on intuitive navigation
                    and a clean interface to enhance user engagement and satisfaction.
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
                  className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                  Design Process</h3>
                <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">01
                </h4>
                <img id="design-top-border" className="hidden w-[1060px] xl:absolute xl:bottom-[34px] xl:right-[-42px]"
                  src="/assets/images/case-status/design-border.svg" alt="border" />
              </div>
              <p
                className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                Our design approach for OakFood centered around creating a luxurious and inviting digital storefront that
                mirrors the brand's high standards. We focused on clean, elegant visuals combined with intuitive navigation
                to make the shopping experience both enjoyable and efficient. Through collaborative design iterations, we
                refined the visual identity and user interface to align perfectly with OakFood's brand values.</p>
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
                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Brand Analysis</h4>
                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">Understanding OakFood’s
                  brand identity and target audience.</p>
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Define
                      Brand Identity</span>
                  </div>
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Identify
                      Target Audience</span>
                  </div>
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Analyze
                      Competitor Brands</span>
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
                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Wireframing</h4>
                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">Establishing the structure
                  and layout of key pages.</p>
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Outline
                      Page Layouts</span>
                  </div>
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Map
                      Navigation Flow</span>
                  </div>
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Plan
                      Content Placement</span>
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
                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">Visual Design</h4>
                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">Crafting a visually
                  appealing and brand-consistent design.</p>
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Design
                      Visual Elements</span>
                  </div>
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Maintain
                      Design Consistency</span>
                  </div>
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Create
                      High-Fidelity Mockups</span>
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
                <img src="/assets/images/case-status/case-study-project-icon-01.svg" alt="icon" />
                <h4 className="py-6 font-jakarta font-bold text-[24px] leading-[27px] text-font-blue">UX Testing</h4>
                <p className="pb-6 font-work font-normal text-[18px] text-font-blue leading-[23px]">Ensuring the design provides
                  a seamless user experience.</p>
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Conduct
                      Usability Tests</span>
                  </div>
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Track
                      User Behavior</span>
                  </div>
                  <div className="inline-flex items-center gap-[10px] pb-[12px]">
                    <img src="/assets/images/case-status/card-check-icon-02.svg" alt="icon" />
                    <span className="font-jakarta font-medium text-[16px] md:text-[18px] leading-[22px] text-font-blue">Refine
                      Based on Feedback</span>
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
          <div className="pt-[100px] xl:pt-[200px] pb-[128px]">
            <div className="xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
              <h3
                className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                Website View</h3>
              <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">02</h4>
              <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                src="/assets/images/case-status/design-border.svg" alt="border" />
            </div>
            <p
              className="xl:w-[1337px] pt-[42px] xl:pt-[62px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
              Are you looking for top-tier e-commerce web design and development services? Look no further. At Giopio, we
              specialize in creating innovative, tailored solutions that bring your online store vision to life. OakFood,
              our latest project, exemplifies our commitment to delivering exceptional results for our clients.</p>
          </div>
          {/* <!-- project-text --> */}
          <div className="relative z-20">
            {/* <!-- web-screen-pc-img --> */}
            <div className="w-full flex justify-center items-center">
              <img className="max-w-[90%] xl:max-w-[70%]" src="/assets/images/case-status/oak-food/2nd-section-image.png"
                alt="img" />
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
                className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                Typography</h3>
              <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">03</h4>
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
              <p className="pb-[42px] xl:pt-[100px] font-poppins font-normal text-[24px] text-font-blue">The typography chosen
                for OakFood reflects the brand’s premium nature, combining elegance with readability. The fonts are clean,
                modern, and contribute to the overall luxurious feel of the website, ensuring a pleasant reading experience
                across all content.</p>
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
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">62px</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">78px</div>
                  </div>
                </div>
                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                  <div className="">
                    <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H2</h3>
                  </div>
                  <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Semi Bold</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">48px</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">52px</div>
                  </div>
                </div>
                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                  <div className="">
                    <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H3</h3>
                  </div>
                  <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">32px</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">42px</div>
                  </div>
                </div>
                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                  <div className="">
                    <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H4</h3>
                  </div>
                  <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">24px</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">30px</div>
                  </div>
                </div>
                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                  <div className="">
                    <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H5</h3>
                  </div>
                  <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Normal</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">18px</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">26px</div>
                  </div>
                </div>
                <div className="border-b border-solid bottom-[#26404C1A] pb-6 mb-6">
                  <div className="">
                    <h3 className="pt-1 font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H6</h3>
                  </div>
                  <div className="grid grid-cols-[28%_31%_26%_14%] justify-start items-start">
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">Normal</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">16px</div>
                    <div className="font-work font-normal text-[18px] leading-[21px] text-font-blue">22px</div>
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
                    <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">62px</li>
                    <li className="pt-[14px] xl:pr-[63px] font-work font-normal text-[18px] leading-[21px] text-font-blue">78px
                    </li>
                  </ul>
                  <ul className="">
                    <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H2</li>
                    <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">48px</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">52px</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <ul className="">
                    <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H3</li>
                    <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">32px</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">42px</li>
                  </ul>
                  <ul className="">
                    <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H4</li>
                    <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Bold</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">24px</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">30px</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <ul className="">
                    <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H5</li>
                    <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Normal</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">18px</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">26px</li>
                  </ul>
                  <ul className="">
                    <li className="font-jakarta font-bold text-[32px] leading-[40px] text-font-blue">H6</li>
                    <li className="pt-1 font-work font-normal text-[18px] leading-[21px] text-font-blue">Plus Jakarta Sans</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">Normal</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">16px</li>
                    <li className="pt-[14px] font-work font-normal text-[18px] leading-[21px] text-font-blue">22px</li>
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
            <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">04</h4>
            <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
              src="/assets/images/case-status/design-border.svg" alt="border" />
          </div>
          {/* <!-- brand-color --> */}
          <div className="hidden xl:inline-block pb-[100px]">
            <div className="w-full flex items-center gap-[10px]">
              <div className="flex flex-col items-center">
                <div className="w-full flex items-center gap-[10px]">
                  <div className="w-[100%] h-[89px] rounded-[12px] bg-[#101F32]"></div>
                  <div className="w-[264px] h-[89px] rounded-[12px] bg-[#FFF3E0]"></div>
                </div>
                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-01.png" alt="img" />
                <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871] dark:text-white">Background Color</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[264px] h-[89px] rounded-[12px] bg-[#FFA726]"></div>
                  <div className="bg-[#101F32]"></div>
                </div>
                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-02.png" alt="img" />
                <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871] dark:text-white">Button Color</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[32px] h-[89px] rounded-[12px] bg-[#FFA726]"></div>
                  <div className="w-[252px] h-[89px] rounded-[12px] bg-[#323B49]"></div>
                </div>
                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-03.png" alt="img" />
                <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871] dark:text-white">Accent Color</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[135px] h-[89px] rounded-[12px] bg-[#101F32]"></div>
                </div>
                <img className="my-[16px]" src="/assets/images/case-status/brand-color-border-04.png" alt="img" />
                <h3 className="font-jakarta font-semibold text-[18px] leading-[22.68px] text-[#536871] dark:text-white">Body Color</h3>
              </div>
            </div>
          </div>
          {/* <!-- brand-color --> */}
          <div className="xl:grid xl:grid-cols-2 xl:gap-[32px]">
            <div className="">
              <div className="mb-[10px]">
                <div className="w-full h-[120px] #101F32 rounded-tl-[16px] rounded-tr-[16px]"></div>
              </div>
              <div className="w-full flex items-center mb-[10px]">
                <div className="w-full h-[120px] bg-[#101F32]"></div>
                <div className="w-full h-[120px] bg-[#283547]"></div>
                <div className="w-full h-[120px] bg-[#404c5b]"></div>
                <div className="w-full h-[120px] bg-[#586270]"></div>
                <div className="w-full h-[120px] bg-[#707984]"></div>
                <div className="w-full h-[120px] bg-[#888f99]"></div>
                <div className="w-full h-[120px] bg-[#9fa5ad]"></div>
                <div className="w-full h-[120px] bg-[#b7bcc2]"></div>
                <div className="w-full h-[120px] bg-[#cfd2d6]"></div>
                <div className="w-full h-[120px] bg-[#e7e9eb]"></div>
              </div>
              <div className="mb-[32px]">
                <div className="w-full h-[120px] #101F32 rounded-bl-[16px] rounded-br-[16px]"></div>
              </div>
            </div>
            <div className="">
              <div className="mb-[10px]">
                <div id="" className="w-full h-[120px]  bg-[#ffa726] rounded-tl-[16px] rounded-tr-[16px]"></div>
              </div>
              <div className="w-full flex items-center mb-[10px]">
                <div className="w-full h-[120px] bg-[#ffa726]"></div>
                <div className="w-full h-[120px] bg-[#ffb03c]"></div>
                <div className="w-full h-[120px] bg-[#ffb951]"></div>
                <div className="w-full h-[120px] bg-[#ffc167]"></div>
                <div className="w-full h-[120px] bg-[#ffca7d]"></div>
                <div className="w-full h-[120px] bg-[#ffd393]"></div>
                <div className="w-full h-[120px] bg-[#ffdca8]"></div>
                <div className="w-full h-[120px] bg-[#ffe5be]"></div>
                <div className="w-full h-[120px] bg-[#ffedd4]"></div>
                <div className="w-full h-[120px] bg-[#fff6e9]"></div>
              </div>
              <div className="mb-[32px]">
                <div id="" className="w-full h-[120px] bg-[#ffa726] rounded-bl-[16px] rounded-br-[16px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- brand-color-section-end --> */}
      {/* <!-- flowchart-section-Removed --> */}
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
            <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">05</h4>
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
                  <h4 className="font-jakarta font-extralight text-[62px] leading-[78px] text-font-blue">JHON<br />
                    DOE</h4>
                  <p className="mt-[-8px] font-jakarta font-normal text-[24px] leading-[46px] text-font-blue">UI / UX DESIGNER
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
                  Giopio understood our vision and executed it perfectly. The website truly reflects our brand and has been
                  instrumental in driving our business forward.
                  <div
                    className="absolute bottom-[-7%] right-[8px] lg:right-[5%] lg:bottom-[-32px] xl:right-[-38px] xl:bottom-[-12px]">
                    <img className="max-w-[35px]" src="/assets/images/case-status/dnd-icon-02.svg" alt="icon" />
                  </div>
                </div>
              </div>
              {/* <!-- project-text --> */}
              <div className="pt-[70px] pb-[62px]">
                <h3 className="pb-[24px] font-jakarta font-bold text-[32px] text-font-blue">User About</h3>
                <p className="font-jakarta font-normal text-[24px] text-font-blue">As a valued client of Giopio, OakFood
                  receives top-tier e-commerce web design and development services tailored to your needs. Giopio
                  specializes in creating innovative solutions to enhance your online store, ensuring it meets your specific
                  requirements and excels in performance.</p>
              </div>
              {/* <!-- project-text --> */}
              <div className="xl:w-full xl:grid xl:grid-cols-[55%_25%_20%] xl:gap-[0px]">
                <div className="xl:w-full xl:pr-[45px]">
                  <h4 className="pb-[24px] font-jakarta font-bold text-[30px] text-font-blue">Goals</h4>
                  <ul className="xl:pl-[14px]">
                    <li className="flex gap-[10px] mb-[14px]">
                      <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                      <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue">Needed an app to reach
                        events & book them in online</p>
                    </li>
                    <li className="flex gap-[10px] mb-[14px]">
                      <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                      <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue">Need an App that is easy
                        for online ticket booking</p>
                    </li>
                    <li className="flex gap-[10px] mb-[14px]">
                      <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                      <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue">Securely book tickets
                        online</p>
                    </li>
                    <li className="flex gap-[10px]">
                      <span className="w-[8px] h-[8px] mt-[12px] rounded-full bg-font-blue"></span>
                      <p className="font-jakarta font-normal text-[18px] leading-[30px] text-font-blue">Easy payment method</p>
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
                      <p className="font-jakarta font-medium text-[18px] text-font-blue">98%</p>
                    </div>
                    <div className="flex items-center gap-[18px] mb-[23px]">
                      <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">Prin Template :</h5>
                      <p className="font-jakarta font-medium text-[18px] text-font-blue">90%</p>
                    </div>
                    <div className="flex items-center gap-[18px]">
                      <h5 className="font-jakarta font-normal text-[18px] text-font-blue opacity-80">Vector :</h5>
                      <p className="font-jakarta font-medium text-[18px] text-font-blue">90%</p>
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
                      <p className="font-jakarta font-medium text-[18px] text-font-blue">98%</p>
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
            <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">06</h4>
            <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
              src="/assets/images/case-status/design-border.svg" alt="border" />
          </div>
          {/* <!-- project-text --> */}
          <div className="relative z-10 mb-6 overflow-hidden bg-white p-8 rounded-[16px] dark:bg-[#313131]">
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
              <div className=" ">
                <img src="/assets/images/case-status/oak-food/oakfoodlogo.svg" alt="Logo" className="w-[200px] xl:w-[200px]" />
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
                <h3 className="font-jakarta font-bold text-[42px] text-font-blue leading-[52px]">Responsive Design</h3>
                <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px]">For top-tier web
                  design services and a reliable e-commerce platform, look no further. OakFood, developed by Giopio, offers
                  cutting-edge solutions tailored to meet your specific needs, ensuring exceptional design and performance.
                </p>
              </div>
              <div className="hidden xl:block">
                <div
                  className="xl:mb-[62px] xl:pt-[259px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                  <h3
                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                    Responsive Design</h3>
                  <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">07
                  </h4>
                  <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0 w-[60%]"
                    src="/assets/images/case-status/design-border.svg" alt="border" />
                </div>
                <p
                  className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                  For top-tier web design services and a reliable e-commerce platform, look no further. OakFood, developed
                  by Giopio, offers cutting-edge solutions tailored to meet your specific needs, ensuring exceptional design
                  and performance.</p>
              </div>
              {/* <!-- project-text --> */}
            </div>
            <div className="w-full">
              <div className="flex justify-center items-center">
                <img className="w-full xl:w-[778px]" src="/assets/images/case-status/oak-food/oakfoodres.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Lo-fi-design-section-end --> */}

      {/* <!-- Lo-fi-design-section-start --> */}
      <section className="bg-[#fdfdfe] dark:bg-transparent">
        <div className="max-w-[1612px] mx-auto px-8">
          <div className="relative z-10">
            <div className="">
              {/* <!-- project-text --> */}
              <div className="xl:hidden pt-[100px] pb-[62px]">
                <h3 className="font-jakarta font-bold text-[42px] text-font-blue leading-[52px]">Plugins and Libraries Used
                </h3>
                <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px]">For top-tier web
                  design services and a reliable e-commerce platform, look no further. OakFood, developed by Giopio, offers
                  cutting-edge solutions tailored to meet your specific needs, ensuring exceptional design and performance.
                </p>
              </div>
              <div className="hidden xl:block">
                <div
                  className="xl:mb-[62px] xl:pt-[259px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                  <h3
                    className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                    Plugins and Libraries Used
                  </h3>
                  <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">07
                  </h4>
                  <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0 w-[45%]"
                    src="/assets/images/case-status/design-border.svg" alt="border" />
                </div>
                <p
                  className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                  For top-tier web design services and a reliable e-commerce platform, look no further. OakFood, developed
                  by Giopio, offers cutting-edge solutions tailored to meet your specific needs, ensuring exceptional design
                  and performance.</p>
              </div>
              {/* <!-- project-text --> */}
            </div>
            <div className="w-full">
              <div className="flex justify-center items-center">
                <img className="w-full xl:w-[778px]" src="/assets/images/case-status/oak-food/oakfoodtools.png" alt="img" />
              </div>
            </div>
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
              <h3 className="font-jakarta font-bold text-[42px] text-font-blue leading-[52px]">Final Outcome</h3>
              <p className="pt-[42px] font-poppins font-normal text-[18px] text-font-blue leading-[27px]">Experience exceptional
                web design and reliable e-commerce solutions with OakFood. Developed by Giopio, OakFood provides innovative
                designs and customized solutions to meet your specific needs, ensuring outstanding performance and user
                experience.</p>
            </div>
            <div className="hidden xl:block">
              <div className="xl:mb-[62px] xl:pt-[200px] xl:relative xl:flex xl:items-center xl:justify-between xl:gap-[10px]">
                <h3
                  className="font-jakarta font-bold text-[42px] xl:text-[62px] xl:leading-[78.12px] text-font-blue leading-[52px]">
                  Final Outcome</h3>
                <h4 className="hidden xl:inline-block font-jakarta font-bold text-[62px] text-font-blue leading-[78.12px]">08
                </h4>
                <img id="design-top-border" className="hidden xl:absolute xl:bottom-[34px] xl:right-0"
                  src="/assets/images/case-status/design-border.svg" alt="border" />
              </div>
              <p
                className="xl:w-[1337px] xl:pb-[100px] font-poppins font-normal text-[18px] xl:text-[24px] text-font-blue leading-[27px] xl:leading-[36px]">
                Experience exceptional web design and reliable e-commerce solutions with OakFood. Developed by Giopio,
                OakFood provides innovative designs and customized solutions to meet your specific needs, ensuring
                outstanding performance and user experience.</p>
            </div>
            {/* <!-- project-text --> */}
            <div className="hidden md:inline-block w-full pb-[62px]">
              <img className="w-full" src="/assets/images/case-status/oak-food/outcome-image.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full pb-[62px]">
          <img className="w-full" src="/assets/images/case-status/oak-food/outcome-image.png" alt="img" />
        </div>
      </section>
    </>
  );
}