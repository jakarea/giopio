import meta from "../../../data/meta/ecommerce.json"
import ContactForm from './components/contactForm'
import projects from "../../../data/ecommerce/projects.json"
import reviews from "../../../data/ecommerce/reviews.json"
import Image from "next/image";

export const metadata = {
    ...meta
};

export default function EcommercePage() {
    return (
        <>

            {/* hero part start */}
            <div className="w-full py-8 md:pt-12 md:pb-20 xl:pb-40 relative">
                {/* <!-- shape --> */}
                <img src="/assets/images/ecommerce/shape-right.webp" alt="shape one" className="hidden xl:block absolute right-0 top-0 z-20" />
                {/* <!-- shape --> */}
                <div className="container">
                    <div className="text-center">
                        <h1
                            className="bg-deep py-3 px-5 xl:inline-block  rounded-[10px] text-white font-medium xl:font-semibold text-base xl:text-4xl">
                            কচ্ছপের গতিতে আর কত দিন ব্যবসা করবেন?
                        </h1>

                        <div className="w-full my-8 xl:my-16">
                            {/* <img src="/assets/images/ecommerce/hero-img.webp" alt="hero section" className="w-full" /> */}

                            <Image
                                src={"/assets/images/ecommerce/hero-img.webp"}
                                alt="hero"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full"
                            />
                        </div>

                        <h5
                            className="animate__animated animate__headShake animate__infinite animate__slower text-orange  font-medium xl:font-semibold xl:leading-[46.8px] xl:pt-[10px] xl:pb-[4px] text-base xl:text-4xl inline-flex rounded-full px-3 xl:px-6 py-[2px] xl:py-[18px] border-2 border-orange mb-3 lg:mb-6">
                            ব্যাবসা করুন রকেট গতিতে</h5>
                        <br />

                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=8801728247398&text&type=phone_number&app_absent=0"
                            className="inline-flex rounded-full px-4 py-2 xl:px-6 xl:pt-5 xl:pb-4 bg-orange text-new text-lg font-semibold xl:text-4xl items-center gap-x-2 anim hover:bg-deep hover:text-white">
                            <svg className="size-5 lg:size-6 xl:size-8" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_144_903)">
                                    <path
                                        d="M17.5012 3.40757C16.5845 2.48194 15.4926 1.74813 14.2893 1.24894C13.086 0.749746 11.7953 0.495174 10.4925 0.500069C5.03375 0.500069 0.585 4.94757 0.58 10.4076C0.58 12.1563 1.0375 13.8576 1.90125 15.3638L0.5 20.5001L5.755 19.1226C7.20811 19.9154 8.83719 20.3302 10.4925 20.3288H10.4975C15.9575 20.3288 20.405 15.8813 20.41 10.4163C20.4111 9.11389 20.1546 7.82411 19.6551 6.62125C19.1557 5.41838 18.4245 4.32619 17.5012 3.40757ZM10.4925 18.6513C9.01647 18.6502 7.56778 18.253 6.2975 17.5013L5.9975 17.3213L2.88 18.1388L3.7125 15.0976L3.5175 14.7838C2.69226 13.4717 2.25581 11.9526 2.25875 10.4026C2.25875 5.87007 5.955 2.17257 10.4975 2.17257C11.5797 2.17063 12.6515 2.38291 13.6513 2.79718C14.651 3.21145 15.5589 3.81952 16.3225 4.58632C17.0886 5.35025 17.696 6.25825 18.1096 7.25798C18.5232 8.25771 18.7349 9.32941 18.7325 10.4113C18.7275 14.9601 15.0312 18.6513 10.4925 18.6513ZM15.0113 12.4838C14.765 12.3601 13.5487 11.7613 13.32 11.6763C13.0925 11.5951 12.9262 11.5526 12.7638 11.8001C12.5975 12.0463 12.1225 12.6076 11.98 12.7688C11.8375 12.9351 11.69 12.9538 11.4425 12.8313C11.1962 12.7063 10.3975 12.4463 9.4525 11.6001C8.715 10.9438 8.22125 10.1313 8.07375 9.88507C7.93125 9.63757 8.06 9.50507 8.18375 9.38132C8.2925 9.27132 8.43 9.09132 8.55375 8.94882C8.67875 8.80632 8.72 8.70132 8.80125 8.53632C8.8825 8.36882 8.84375 8.22632 8.7825 8.10257C8.72 7.97882 8.22625 6.75757 8.0175 6.26507C7.8175 5.77882 7.61375 5.84632 7.46125 5.84007C7.31875 5.83132 7.1525 5.83132 6.98625 5.83132C6.86072 5.83451 6.7372 5.86358 6.62342 5.91671C6.50963 5.96984 6.40804 6.04588 6.325 6.14007C6.0975 6.38757 5.46125 6.98632 5.46125 8.20757C5.46125 9.42882 6.34875 10.6026 6.47375 10.7688C6.59625 10.9351 8.21625 13.4338 10.7025 14.5088C11.29 14.7651 11.7525 14.9163 12.1138 15.0313C12.7075 15.2213 13.2437 15.1926 13.6712 15.1313C14.1462 15.0588 15.135 14.5313 15.3438 13.9526C15.5487 13.3726 15.5488 12.8776 15.4862 12.7738C15.425 12.6688 15.2587 12.6076 15.0113 12.4838Z"
                                        fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_144_903">
                                        <rect width="20" height="20" fill="currentColor" transform="translate(0.5 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            আসুন কথা বলি
                        </a>

                    </div>
                </div>
                {/* <!-- shape --> */}
                <img src="/assets/images/ecommerce/shape-join.webp" alt="shape" className="hidden xl:block absolute -bottom-[18%] left-0 z-20" />
                {/* <!-- shape --> */}
            </div>
            {/* hero part end */}

            {/* <!-- organize section start --> */}
            <div
                className="w-full py-16 bg-center bg-no-repeat bg-analysis md:py-28 xl:py-[200px] relative">
                <div className="absolute left-0 top-0 bg-white bg-opacity-80 w-full h-full dark:bg-[#1C1C1E] dark:opacity-70"></div>
                <div className="container relative z-40">
                    <div className="text-center xl:flex xl:flex-col xl:justify-center xl:items-center">
                        <h2
                            className="w-full xl:pb-[75px] xl:leading-[58px] text-base md:text-4xl xl:text-[42px] font-medium text-[#434445] mb-3 xl:w-[82%] xl:mx-auto relative anim dark:text-white">
                            <img src="/assets/images/ecommerce/green-curve-shape.svg" alt="green"
                                className="absolute -top-4 -left-4 max-w-10 xl:-top-12 animate-scaleUp xl:max-w-[115px]" />
                            আপনার ইকমার্স সাইট সাজিয়ে নিন আপনার মনের মতো করে ওয়েবসাইট করুন আরো প্রাণবন্ত, গোছানো এবং ইউজার ফ্রেন্ডলি,
                            <span className="hidden xl:block"></span>
                            <span className="text-sonali animate__animated animate__headShake animate__infinite">
                                যা আপনার সেল বাড়িয়ে দিবে কয়েক গুন
                            </span>
                            <img src="/assets/images/ecommerce/tir-icon.svg" alt="a" className="inline-block absolute right-[10rem] -bottom-[8rem] max-w-12 xl:max-w-max" />
                        </h2>


                        {/* <!-- <img src="/assets/images/ecommerce/analysis.svg" alt="analysis" className="mx-auto xl:w-[270px]" data-aos="zoom-in"> --> */}
                        <img src="/assets/images/ecommerce/new_sequence_animation.gif" alt="analysis" className="mx-auto w-24 xl:w-[270px]"
                            data-aos="zoom-in" />
                    </div>
                </div>
            </div>
            {/* <!-- organize section end --> */}

            {/* <!-- ecommerce expertise section start --> */}
            <div className="w-full py-10 xl:py-[196px] bg-main relative anim dark:bg-[#0A0F24] md:py-28" id="expert-section">
                {/* <!-- shape top --> */}
                <img src="/assets/images/ecommerce/shape-join.webp" alt="join shape" className="hidden xl:block absolute -top-[22%] right-0 z-20" />
                {/* <!-- shape top --> */}
                <div className="container">
                    <div className="text-center">
                        <h5
                            className="bg-white  inline-flex rounded-sm p-1.5 lg:p-5 font-semibold text-deep text-xs lg:text-3xl xl:text-[44px] anim dark:bg-[#26404C] dark:text-white">
                            ইকমার্স এক্সপার্ট </h5>
                        <h2 className="mt-1.5 lg:mt-5 text-sm lg:text-2xl xl:text-5xl font-semibold text-deep xl:mt-5 anim dark:text-white">
                            আমরা গত <span className="text-orange">৭ বছর যাবৎ </span> ইকমার্স নিয়ে কাজ করছি
                        </h2>
                    </div>

                    <div
                        className="grid mt-7 md:mt-9 lg:mt-14 xl:mt-[100px] grid-cols-3 gap-x-4 xl:gap-x-[58px] xl:flex xl:justify-between xl:items-center">
                        <div className="w-full relative z-30">
                            <img src="/assets/images/ecommerce/expert-shape-01.svg" alt="shape"
                                className="lg:w-[125px] absolute -top-7 xl:top-[-70px] lg:top-[-50px] xl:left-0 -left-1 -z-10 custom-anim -rotate-[62deg] transition-transform origin-bottom-right"
                                id="rotateImage" />
                            <div
                                className="border-2 lg:border-[6px] border-[#FFCB3C] rounded-md lg:rounded-[16px] py-3 lg:py-[60px] px-2 xl:px-[20px] bg-[#fff4d5] text-center relative min-h-[100px]">
                                <div className="animated-border-box-glow"></div>
                                <h6 className=" text-[#434445] font-bold text-xs md:text-xl lg:text-4xl xl:text-[40px] mb-1.5 lg:mb-5">১০০+ কাজ
                                </h6>
                                <p
                                    className=" text-[#434445] font-normal text-[10px] leading-4 md:text-xl lg:text-2xl xl:text-[25px] xl:leading-[38px]">
                                    আমরা ১০০+ ওয়েবসাইটে কাজ করেছি</p>
                            </div>
                        </div>
                        <div className="w-full relative z-30 ">
                            <img src="/assets/images/ecommerce/expert-shape-02.svg" alt="shape"
                                className="lg:w-[125px] xl:w-[250px] absolute -bottom-5 xl:-bottom-[4px] lg:-bottom-[40px] left-[50%] -translate-x-1/2 -z-10 anim !duration-1000"
                                id="rotateImage2" />
                            <div
                                className="border-2 lg:border-[6px] border-[#4DD78A] rounded-md lg:rounded-[16px] py-3 lg:py-[60px] xl:px-[20px] px-2 bg-[#EAFFF3] text-center min-h-[100px]">
                                <h6 className=" text-[#434445] font-bold text-xs md:text-xl lg:text-4xl xl:text-[40px] mb-1.5 lg:mb-5">ইনহাউজ
                                    টিম</h6>
                                <p
                                    className=" text-[#434445] font-normal text-[10px] leading-4 md:text-xl lg:text-2xl xl:text-[25px] xl:leading-[38px]">
                                    আমরা কোন ফ্রিল্যান্সার দিয়ে কাজ করাই না</p>
                            </div>
                        </div>
                        <div className="w-full relative z-30">
                            <img src="/assets/images/ecommerce/expert-shape-03.svg" alt="shape"
                                className="lg:w-[125px] absolute -top-7 lg:top-[-70px] -right-1 rotate-[66deg] -z-10 custom-anim transition-transform origin-bottom-left"
                                id="rotateImage3" />
                            <div
                                className="border-2 lg:border-[6px] border-[#19E9E1] rounded-md lg:rounded-[16px] py-3 lg:py-[60px] xl:px-[10px] px-2 bg-[#E3FFFE] text-center min-h-[100px]">
                                <h6 className=" text-[#434445] font-bold text-xs md:text-xl lg:text-4xl xl:text-[40px] mb-1.5 lg:mb-5">মাত্র
                                    ৪৯৯৯ টাকা</h6>
                                <p
                                    className=" text-[#434445] font-normal text-[10px] leading-4 md:text-xl lg:text-2xl xl:text-[25px] xl:leading-[38px]">
                                    পুরো একটা এজেন্সি পাচ্ছেন, ফ্রিল্যান্সারের দামে</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- shape bttm --> */}
                <img src="/assets/images/ecommerce/shape-join.webp" alt="join shape"
                    className="hidden xl:block absolute -bottom-[22%] left-0 z-20 max-w-[265px]" />
                {/* <!-- shape bttm --> */}
            </div>
            {/* <!-- ecommerce expertise section end --> */}

            {/* <!-- product page customization start --> */}
            <div
                className="w-full py-9 lg:py-[190px] bg-customization  bg-top bg-no-repeat bg-cover anim relative">
                <div className="absolute left-0 top-0 bg-white bg-opacity-80 w-full h-full dark:bg-[#1C1C1E] dark:opacity-70"></div>
                <div className="container relative z-40">
                    <div className="text-center xl:flex xl:flex-col xl:items-center xl:justify-center xl:w-[94%] xl:mx-auto">
                        <img src="/assets/images/ecommerce/project-icon.svg" alt="product page"
                            className="max-w-10 lg:max-w-[120px] mx-auto xl:mt-12" data-aos="zoom-in-up" />
                        <h2 className="common-title-2 mb-4 lg:mb-[70px] mt-2 xl:mt-10 anim dark:text-white">প্রোডাক্ট পেজ কাস্টমাইজ করুন</h2>

                        <p className="common-para-2 anim dark:text-white dark:text-opacity-80">একটি পরিপাটি, সুন্দর এবং অয়েল অর্গানিজেড
                            প্রোডাক্ট প্রেজেন্টেশন আপনার পণ্যের বিক্রি
                            বহুগুণ বাড়িয়ে দিতে পারে আপনার পেজের সব সেকশন কি প্রয়োজনীয়? <span className="text-sonali">কোন গুরুত্বপূর্ণ
                                সেকশন বাদ পড়ে যাচ্ছে না তো ?</span>
                        </p>

                    </div>
                </div>
            </div>
            {/* <!-- product page customization end --> */}

            {/* <!-- features section start --> */}
            <div
                className="w-full py-9 lg:py-[150px] bg-[#F9F9F9] xl:bg-transparent relative anim dark:bg-[#232323] xl:dark:bg-[#0A0F24]">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-0 lg:gap-x-[32px]">
                        {/* <!-- itm --> */}
                        <div data-aos="fade-right" data-aos-duration="2000"
                            className="w-full flex border-8 border-[#FF433A66] rounded-2xl py-4 px-4 lg:py-[40px] lg:px-[40px] text-center flex-col bg-white xl:border-[12px] anim dark:bg-[#232323]">
                            <div className="flex items-center justify-center lg:justify-start mb-7 lg:mb-10 gap-x-5">
                                <img src="/assets/images/ecommerce/process-icon-01.svg" alt="a" className="xl:w-[100px]" />
                                <h4 className="font-semibold text-base lg:text-xl xl:text-[28px]  text-[#434445] anim dark:text-white">অর্ডার
                                    প্রসেসিং এ ঝামেলা?</h4>
                            </div>

                            <p
                                className="text-sm font-medium lg:text-[24px]  lg:leading-[32px] text-left text-[#555759] leading-5 anim dark:text-white dark:text-opacity-65">
                                আপনার মতো
                                করে ওয়েবসাইটের অ্যাডমিন প্যানেল সাজিয়ে নিন
                                অর্ডার প্রসেসিং সহজ করুন এবং আপনার ব্যবসার গতি
                                বাড়ান, যাতে আপনি আপনার কাস্টমারদের সেবা দিতে পারেন আরও দ্রুত ও নির্ভরযোগ্যভাবে।</p>
                        </div>
                        {/* <!-- itm --> */}
                        {/* <!-- itm --> */}
                        <div data-aos="fade-left" data-aos-duration="2000"
                            className="w-full flex border-8 border-[#FFCB3C] rounded-2xl py-4 px-4 lg:py-[40px] lg:px-[40px] text-center flex-col bg-white xl:border-[12px] anim dark:bg-[#232323] dark:border-[#CDBD91]">
                            <div className="flex items-center justify-center lg:justify-start mb-7 lg:mb-10 gap-x-5">
                                <img src="/assets/images/ecommerce/process-icon-02.svg" alt="a" className="xl:w-[100px]" />
                                <h4 className="font-semibold text-base lg:text-xl xl:text-[28px]  text-[#434445]  anim dark:text-white">লোডিং
                                    টাইম কমান</h4>
                            </div>

                            <p
                                className="text-sm font-medium lg:text-[24px]  lg:leading-[32px] text-left text-[#555759] leading-5 anim dark:text-white dark:text-opacity-65">
                                পেজের গতি
                                বাড়ালে, বাউন্স রেট কমে, আর বিক্রি বাড়ে ফাস্ট
                                লোডিং সাইট SEO এর পূর্বশর্ত আপনি কি আপনার সাইট পারফরম্যান্সে আসলেই সন্তুষ্ট ? চলুন এই ব্যাপারে কথা বলা যাক
                            </p>
                        </div>
                        {/* <!-- itm --> */}
                    </div>
                </div>
                {/* <!-- shape bttm --> */}
                <img src="/assets/images/ecommerce/shape-join.webp" alt="join shape"
                    className="hidden xl:block absolute -top-[30%] right-0 z-20 max-w-[265px]" />
                {/* <!-- shape bttm --> */}
            </div>
            {/* <!-- features section end --> */}

            {/* <!-- very small task start --> */}
            <div
                className="w-full py-9 bg-small-task bg-center bg-cover bg-no-repeat xl:py-[200px] anim  md:py-28 relative">
                <div className="absolute left-0 top-0 bg-white bg-opacity-80 w-full h-full dark:bg-[#1C1C1E] dark:opacity-70"></div>
                <div className="container relative z-40">
                    <div className="text-center relative">
                        <img src="/assets/images/ecommerce/bg-img-shape.svg" alt="a" className="absolute left-1/2 -translate-x-1/2 -z-20 max-w-16 xl:max-w-max" />
                        <img src="/assets/images/ecommerce/small-task-icon.svg" alt="product page" className="mx-auto xl:w-[120px]" />
                        <h2 className="common-title-2 mb-4 mt-4 xl:mt-10 xl:mb-[54px] anim dark:text-white">খুব ছোট কাজ তাতে কি ?</h2>

                        <p className="common-para-2 xl:max-w-[94%] xl:mx-auto anim dark:text-white dark:text-opacity-80">আপনার প্রয়োজন ছোট বা
                            বড় যেমনই হোক না কেন —আমাদের টিম আপনার
                            সমস্যা সমাধানে পাশে থাকবে,
                            আপনার বিশস্ত পার্টনার হয়ে অনেক সময় খুব ছোট একটা মডিফিকেশনই আপনার <span className="text-sonali"> ব্যবসায় অনেক
                                বড়
                                পরিবর্তন আনবে</span></p>

                    </div>
                </div>
                {/* <!-- shape bttm --> */}
                <img src="/assets/images/ecommerce/shape-join.webp" alt="join shape"
                    className="hidden xl:block absolute -bottom-[25%] left-0 z-20 max-w-[265px]" />
                {/* <!-- shape bttm --> */}
            </div>
            {/* <!-- very small task end --> */}

            {/* <!-- services section start --> */}
            <div className="w-full py-8  md:py-20 xl:py-[100px]">
                <div className="container">
                    <div className="text-center">
                        <h2
                            className="bg-deep rounded-md py-1 px-2 inline-flex text-white font-semibold text-xl shadow-one justify-center gap-x-4 items-center md:text-3xl xl:text-[44px] xl:py-5 xl:pt-6 xl:px-12 xl:rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>

                            <span>সাশ্রয়ী দামে এজেন্সি সেবা</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                            </svg>
                        </h2>

                        <div className="relative group anim" id="agencyServices">
                            <div
                                className="w-full py-4 px-7 border-2 border-dashed border-orange bg-white my-6 md:my-14 xl:my-20 md:max-w-[80%] xl:max-w-[70%] md:mx-auto xl:py-[100px] xl:px-10 xl:border-[6px] anim dark:bg-[#1D202B] md:p-10">

                                <p
                                    className="text-base font-medium text-[#434445] md:text-3xl xl:text-[32px] xl:leading-10 anim dark:text-white">
                                    ফ্রিল্যান্সারের দামে পুরো একটি
                                    এজেন্সির সেবা পেতে পারেন
                                    আপনার ব্যবসার চাহিদা অনুযায়ী সেরা সমাধান পেতে আমাদের সাথে আজই শুরু করুন ৪৯৯৯ টাকা।</p>
                                <img src="/assets/images/ecommerce/price-curve.svg" alt="price curve"
                                    className="absolute bottom-1 right-12  xl:w-[187px] xl:bottom-20 xl:right-[15rem]" />
                            </div>

                            {/* <!-- icons --> */}
                            <img src="/assets/images/ecommerce/price-top-icon.svg" alt="icon"
                                className="absolute -top-12 -right-8 -z-10 xl:top-0 xl:right-40 xl:w-[260px] transition-all duration-[1000ms] ease-in-out group-hover:xl:-top-[7rem] group-hover:xl:right-20"
                                id="topImg" />

                            <img src="/assets/images/ecommerce/price-bottom-icon.svg" alt="icon"
                                className="absolute -bottom-10 -left-7 -z-10 xl:left-48 xl:bottom-0 xl:w-[165px] transition-all duration-[1000ms] ease-in-out"
                                id="bttmImg" />
                            {/* <!-- icons --> */}
                        </div>

                        <h4
                            className="bg-orange rounded-md py-1 px-3.5 inline-flex text-white font-semibold text-lg shadow-one tracking-wide md:text-3xl xl:text-[36px] xl:py-3 xl:pt-4 xl:px-6">
                            এখনি আপনার কাজ শুরু করুন
                        </h4>
                    </div>
                </div>
            </div>
            {/* <!-- services section end --> */}

            {/* <!-- work step section start --> */}
            <section className="w-full py-8 xl:py-[200px] relative ">
                {/* <!-- shape top --> */}
                <img src="/assets/images/ecommerce/shape-join.webp" alt="join shape"
                    className="hidden xl:block absolute -top-[18.5%] right-0 z-20 max-w-[265px]" />
                {/* <!-- shape top --> */}
                <div className="container">
                    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-5 xl:grid-cols-2 xl:gap-[32px]">
                        <div data-aos="fade-down" data-aos-duration="2000"
                            className="w-full flex border-8 border-[#FF433A66] rounded-2xl p-5 text-start flex-col bg-white xl:p-9 anim dark:bg-[#413F3E]">
                            <div
                                className="flex items-start justify-center mb-7 gap-x-5 xl:items-center xl:mb-12 xl:justify-start xl:gap-x-[32px]">
                                <img src="/assets/images/ecommerce/alert-icon.svg" alt="a" className="xl:w-[90px]" />
                                <h4 className="font-semibold text-lg text-[#434445] xl:text-[28px] xl:leading-10 anim dark:text-white">টেকনিক্যাল ঝামেলায় সময়
                                    নষ্ট করবেন না</h4>
                            </div>

                            <p
                                className="text-base font-medium text-[#555759] leading-5 text-center xl:text-2xl xl:text-start xl:mr-2 anim dark:text-white dark:text-opacity-80">
                                আপনি
                                শুধু আপনার ব্যবসার উন্নতিতে ফোকাস
                                করুন, আর কাস্টমারদের জন্য আরও বেশি সময় বের করুন ওয়েবসাইটের যেকোনো সমস্যা দ্রুততম সময়ে, সেরা ও সাশ্রয়ী
                                সমাধান দিতে আমরা প্রস্তুত!</p>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="2000"
                            className="w-full flex border-8 border-[#FFCB3C66] rounded-2xl p-5 text-start flex-col bg-white xl:p-9 anim dark:bg-[#413F3E]">
                            <div
                                className="flex items-start justify-center mb-7 gap-x-5 xl:items-center xl:mb-12 xl:justify-start xl:gap-x-[32px]">
                                <img src="/assets/images/ecommerce/growth-icon.svg" alt="a" className="xl:w-[90px]" />
                                <h4 className="font-semibold text-lg text-[#434445] xl:text-[28px] xl:leading-10 anim dark:text-white">আপনার ই-কমার্স ব্যবসাকে এক
                                    ধাপ এগিয়ে নিন</h4>
                            </div>

                            <p
                                className="text-base font-medium text-[#555759] leading-5 text-center xl:text-2xl xl:text-start xl:mr-2 anim dark:text-white dark:text-opacity-80">
                                আপনি
                                কি ফেসবুকে প্রোডাক্ট বিক্রি করছেন,
                                কিন্তু একটি প্রফেশনাল ওয়েবসাইট থাকলে বিক্রি কি আরও ভালো হতো? তাহলে, আসুন, আমরা কথা বলি আপনার ব্যবসার জন্য
                                একটি প্রোফেশনাল ওয়েবসাইট তৈরি করে, বিক্রি বাড়াতে সহায়তা করি</p>
                        </div>
                        <div data-aos="fade-top" data-aos-duration="2000"
                            className="w-full flex border-8 border-[#4DD78A66] rounded-2xl p-5 text-start flex-col bg-white xl:p-9 anim dark:bg-[#413F3E]">
                            <div
                                className="flex items-start justify-center mb-7 gap-x-5 xl:items-center xl:mb-12 xl:justify-start xl:gap-x-[28px]">
                                <img src="/assets/images/ecommerce/work-secret-icon.svg" alt="a" className="xl:w-[90px]" />
                                <h4 className="font-semibold text-lg text-[#434445] xl:text-[28px] anim dark:text-white">আমরা কিভাবে কাজ করবো  ?
                                </h4>
                            </div>

                            <p
                                className="text-base font-medium text-[#555759] leading-5 text-center xl:text-2xl xl:text-start xl:mr-2 anim dark:text-white dark:text-opacity-80">
                                আপনার
                                ব্যবসার ব্যাপারে আমরা সুপার
                                সেনসেটিভ, আমরা সবসময় এমন কিছুই করবো যা আপনার ব্যবসার জন্য উপকারী হবে, এবং কখনোই এমন কিছু করবো না যা আপনার
                                ক্ষতির কারণ হতে পারে।</p>
                        </div>
                        <div data-aos="fade-top" data-aos-duration="2000"
                            className="w-full flex border-8 border-[#1E89FF66] rounded-2xl p-5 text-start flex-col bg-white xl:p-9 anim dark:bg-[#413F3E]">
                            <div
                                className="flex items-start justify-center mb-7 gap-x-5 xl:items-center xl:mb-12 xl:justify-start xl:gap-x-[32px]">
                                <img src="/assets/images/ecommerce/call-picup.svg" alt="a" className="xl:w-[90px]" />
                                <h4 className="font-semibold text-lg text-[#434445] xl:text-[28px] xl:leading-9 anim dark:text-white">ফ্রিল্যান্সার ফোন না ধরলে
                                    ?</h4>
                            </div>

                            <p
                                className="text-base font-medium text-[#555759] leading-5 text-center xl:text-2xl xl:text-start xl:mr-2 anim dark:text-white dark:text-opacity-80">
                                যদি
                                আপনার ডেভেলপার ফোন না ধরেন, তাকে
                                কোথায় খুঁজবেন? আমরা গত ৭ বছরে ১০০+ সফল ই-কমার্স প্রোজেক্টের অভিজ্ঞতা নিয়ে ইনহাউজ টিম হিসেবে আপনার ব্যবসায়
                                গুণগতমান নিশ্চিত করতে প্রস্তুত।
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- shape top --> */}
                <img src="/assets/images/ecommerce/shape-join.webp" alt="join shape"
                    className="hidden xl:block absolute -bottom-[17%] left-0 z-20 max-w-[265px]" />
                {/* <!-- shape top --> */}
            </section>
            {/* <!-- work step section end --> */}

            {/* <!-- our recent workes section start --> */}
            <div className="w-full py-8 font-jakarta relative z-30">
                <div className="container">
                    <div className="text-center">
                        <h2
                            className="bg-deep rounded-md py-1 px-2 inline-flex items-center leading-9 text-white font-semibold text-xl shadow-one xl:block xl:text-[44px] xl:py-5 xl:pt-6 xl:px-5 xl:text-center">
                            আমাদের সাম্প্রতিক কিছু কাজ
                        </h2>
                    </div>
                    <div
                        className="grid pt-10 grid-cols-1 gap-y-5 xl:bg-[#F8F8F8] xl:py-[60px] xl:px-[112px] lg:grid-cols-2 lg:gap-x-4 xl:grid-cols-2 xl:gap-[96px] dark:xl:bg-[#1D202B]">
                        {projects && projects.map((item, index) => (
                            <div key={index} data-aos="zoom-in" data-aos-duration="2000"
                                className="w-full shadow-two rounded-md anim bg-white dark:bg-[#343846]">
                                <div className="w-full bg-white flex justify-center items-center rounded-t-lg">
                                    <img src={item.image} alt={`image-${item.image}`} className="w-full block object-fill h-full xl:w-[372px] xl:!h-[280px]" />
                                </div>
                                <div className="py-8 px-4 text-center  xl:py-[32px] xl:px-6 xl:text-start">
                                    <h5
                                        className="text-xl font-medium text-deep flex gap-x-2.5 justify-center items-center xl:text-2xl xl:justify-start anim dark:text-white">
                                        {item.title} <span
                                            className="py-1 pb-1.5 rounded-md px-2 bg-orange text-white font-medium text-xs">{item.category}</span></h5>
                                    <a href={item.url} target="_blank"
                                        className="block mt-5 font-semibold text-[26px] text-lg text-[#26404C] anim dark:text-white dark:text-opacity-80">{item.url}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- our recent workes section end --> */}

            {/* <!-- customer review section start --> */}
            <div className="w-full py-8 xl:py-[150px] relative">
                {/* <!-- shape top --> */}
                <img src="/assets/images/ecommerce/shape-join.webp" alt="join shape" className="hidden xl:block absolute -top-[29%] right-0 z-20" />
                {/* <!-- shape top --> */}
                <div className="container">
                    <div className="text-center">
                        <h2
                            className="bg-deep rounded-md py-1 px-2 inline-flex items-center leading-8 text-white font-semibold text-xl shadow-one xl:text-[44px] xl:py-4 xl:pt-5 xl:px-20">
                            আমাদের কাস্টমার রিভিউ
                        </h2>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-y-5 mt-10 xl:mt-[100px] lg:grid-cols-2 lg:gap-5 xl:gap-[32px]">

                        {reviews?.map((review, index) => (
                            <div key={index} data-aos="fade-down-right" data-aos-duration="2000"
                                className="w-full bg-white rounded-[10px] grid grid-cols-11 gap-x-4 p-2.5 xl:p-5 xl:border xl:border-[#FF9040] xl:gap-x-[32px] xl:items-center xl:rounded-[20px] anim dark:bg-[#1D202B]">
                                <div className="col-span-4">
                                    <img src={review.avatar} alt="client avatar"
                                        className="rounded-md w-20 h-20 object-fill xl:w-[171px] xl:h-[161px]" />
                                </div>
                                <div className="text-start col-span-7">
                                    <h4 className="text-base font-semibold text-black leading-5 xl:text-2xl anim dark:text-white">{review.name}</h4>
                                    <ul className="flex items-center gap-x-0.5 mb-2 mt-0.5">
                                        {[...Array(review.stars)]?.map((_, index) => (
                                            <li key={index}>
                                                <img src="/assets/images/ecommerce/star.svg" alt="star" className="xl:w-5 w-3" />
                                            </li>
                                        ))}
                                    </ul>
                                    <p
                                        className="font-normal text-[10px] text-black leading-3 xl:text-lg xl:leading-7 anim dark:text-white dark:text-opacity-80">
                                        {review.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <!-- shape bttm --> */}
                <img src="/assets/images/ecommerce/shape-join.webp" alt="join shape"
                    className="hidden xl:block absolute -bottom-[29%] left-0 z-20 max-w-[265px]" />
                {/* <!-- shape bttm --> */}
            </div>
            {/* <!-- customer review section end --> */}

            {/* <!-- get start section start --> */}
            <section className="w-full py-8 relative">
                <div className="container">
                    <div className="text-center">
                        <h2
                            className="bg-deep rounded-md py-1 px-2 inline-flex text-white font-semibold text-xl shadow-one gap-x-4 items-center xl:text-[44px] xl:py-5 xl:pt-6 xl:px-12 xl:rounded-xl">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>

                            <span>আপনার রিকয়ারমেন্ট জানান</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                            </svg>
                        </h2>
                    </div>
                    <div
                        className="w-full py-2 bg-[#FF904080] my-6 rounded-2xl xl:my-[60px] lg:max-w-[70%] xl:max-w-[65%] lg:mx-auto transition-all duration-500 ease-linear hover:py-5">
                        <div
                            className="w-full bg-white rounded-[10px] py-10 px-4 text-center xl:px-20 xl:py-20 xl:text-start relative anim dark:bg-[#1D202B]">
                            {/* <!-- <img src="/assets/images/ecommerce/arrow-vector.svg" alt="arrow vector" className="absolute left-[2rem] top-20 z-20"> --> */}
                            <p
                                className="text-base font-medium text-[#434445] leading-5 xl:text-[32px] xl:leading-10 text-justify anim dark:text-white">
                                আপনার কাজ
                                ছোট না বড়,
                                এটা কোন ব্যাপার  না, আমরা
                                অবশ্যই আপনার
                                জন্য
                                কাজ করবো কেননা খুব ছোট পরিবর্তনও আপনার ব্যাবসায় ম্যাসিভ গ্রোথ নিয়ে আসতে পারে আমরা চেষ্টা করবো, যত দ্রুত
                                সম্ভব
                                আপনার ব্যবসা এক নতুন মাত্রা যোগ করতে</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4
                            className="bg-orange rounded-md py-1 px-3.5 inline-flex text-white font-semibold text-lg shadow-one tracking-wide xl:text-[36px] xl:py-3 xl:pt-4 xl:px-6">
                            এখনি আপনার কাজ শুরু করুন
                        </h4>
                    </div>
                </div>
            </section>
            {/* <!-- get start section end --> */}

            {/* <!-- contact section start --> */}
            <section className="w-full xl:py-[150px] relative">
                {/* <!-- shape top --> */}
                <img src="/assets/images/ecommerce/shape-join.webp" alt="join shape"
                    className="hidden xl:block absolute -top-[20.4%] right-0 z-20" />
                {/* <!-- shape top --> */}
                <div className="container">
                    <div className="text-center xl:max-w-[80%] xl:mx-auto">
                        <h2 data-aos="zoom-out" data-aos-duration="2000"
                            className="bg-white rounded-md py-2 px-3 inline-flex text-deep font-semibold text-xl shadow-three gap-x-4 items-center xl:text-[44px] xl:py-4 xl:pt-5 xl:block xl:w-full xl:border-b-[5px] xl:border-[#26404C] anim dark:bg-deep dark:text-white">
                            আমাদের সাথে যোগাযোগ করুন</h2>
                    </div>
                    <div
                        className="mt-10 bg-white rounded-[10px] p-5 shadow-four lg:max-w-[85%] xl:max-w-[80%] lg:mx-auto xl:mt-5 anim dark:bg-deep">
                        {/* contact form */}
                        <ContactForm />
                    </div>
                    <div className="my-5 text-center xl:my-10">
                        <h4 className="text-[#26404C] font-bold text-2xl xl:text-[48px] mb-5 xl:mb-7 anim dark:text-white">অথবা</h4>
                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=8801728247398&text&type=phone_number&app_absent=0"
                            className="animate__animated animate__headShake animate__infinite animate__slower inline-flex rounded-full px-4 py-2 xl:px-6 xl:pt-[14px] bg-orange text-white text-lg font-semibold xl:text-4xl items-center gap-x-2 anim hover:bg-deep">

                            সরাসরি <svg className="  size-5 lg:size-6 xl:size-8" viewBox="0 0 21 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_144_903)">
                                    <path
                                        d="M17.5012 3.40757C16.5845 2.48194 15.4926 1.74813 14.2893 1.24894C13.086 0.749746 11.7953 0.495174 10.4925 0.500069C5.03375 0.500069 0.585 4.94757 0.58 10.4076C0.58 12.1563 1.0375 13.8576 1.90125 15.3638L0.5 20.5001L5.755 19.1226C7.20811 19.9154 8.83719 20.3302 10.4925 20.3288H10.4975C15.9575 20.3288 20.405 15.8813 20.41 10.4163C20.4111 9.11389 20.1546 7.82411 19.6551 6.62125C19.1557 5.41838 18.4245 4.32619 17.5012 3.40757ZM10.4925 18.6513C9.01647 18.6502 7.56778 18.253 6.2975 17.5013L5.9975 17.3213L2.88 18.1388L3.7125 15.0976L3.5175 14.7838C2.69226 13.4717 2.25581 11.9526 2.25875 10.4026C2.25875 5.87007 5.955 2.17257 10.4975 2.17257C11.5797 2.17063 12.6515 2.38291 13.6513 2.79718C14.651 3.21145 15.5589 3.81952 16.3225 4.58632C17.0886 5.35025 17.696 6.25825 18.1096 7.25798C18.5232 8.25771 18.7349 9.32941 18.7325 10.4113C18.7275 14.9601 15.0312 18.6513 10.4925 18.6513ZM15.0113 12.4838C14.765 12.3601 13.5487 11.7613 13.32 11.6763C13.0925 11.5951 12.9262 11.5526 12.7638 11.8001C12.5975 12.0463 12.1225 12.6076 11.98 12.7688C11.8375 12.9351 11.69 12.9538 11.4425 12.8313C11.1962 12.7063 10.3975 12.4463 9.4525 11.6001C8.715 10.9438 8.22125 10.1313 8.07375 9.88507C7.93125 9.63757 8.06 9.50507 8.18375 9.38132C8.2925 9.27132 8.43 9.09132 8.55375 8.94882C8.67875 8.80632 8.72 8.70132 8.80125 8.53632C8.8825 8.36882 8.84375 8.22632 8.7825 8.10257C8.72 7.97882 8.22625 6.75757 8.0175 6.26507C7.8175 5.77882 7.61375 5.84632 7.46125 5.84007C7.31875 5.83132 7.1525 5.83132 6.98625 5.83132C6.86072 5.83451 6.7372 5.86358 6.62342 5.91671C6.50963 5.96984 6.40804 6.04588 6.325 6.14007C6.0975 6.38757 5.46125 6.98632 5.46125 8.20757C5.46125 9.42882 6.34875 10.6026 6.47375 10.7688C6.59625 10.9351 8.21625 13.4338 10.7025 14.5088C11.29 14.7651 11.7525 14.9163 12.1138 15.0313C12.7075 15.2213 13.2437 15.1926 13.6712 15.1313C14.1462 15.0588 15.135 14.5313 15.3438 13.9526C15.5487 13.3726 15.5488 12.8776 15.4862 12.7738C15.425 12.6688 15.2587 12.6076 15.0113 12.4838Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_144_904">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>হোয়াটসঅ্যাপ করুন
                        </a>
                    </div>
                </div>
                {/* <!-- shape bttm --> */}
                <img src="/assets/images/ecommerce/shape-right.webp" alt="join shape"
                    className="hidden xl:block absolute -bottom-[80px] left-0 -z-20 max-w-[265px] rotate-180 " />
                {/* <!-- shape bttm --> */}
            </section>
            {/* <!-- contact section end --> */}

            {/* <!-- footer section start --> */}
            {/* <footer className="w-full py-5 font-jakarta bg-white xl:pt-8 anim dark:bg-[#1D202B]">
                <div className="container">
                    <div className="grid items-center grid-cols-1 gap-y-3 lg:grid-cols-2">
                        <div className="flex items-start gap-x-3">
                            <div className="shrink-0 mt-4">
                                <svg className="shrink-0 size-3 xl:size-6 text-[#555759] dark:text-white" viewBox="0 0 10 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M4.72106 13.898C4.73937 13.9101 4.75375 13.9194 4.76394 13.926L4.78087 13.9368C4.91594 14.0214 5.08349 14.0207 5.21869 13.937L5.23606 13.926C5.24625 13.9194 5.26063 13.9101 5.27894 13.898C5.31555 13.8738 5.36786 13.8385 5.43364 13.7923C5.56513 13.7 5.75076 13.5637 5.97249 13.385C6.41521 13.0282 7.00591 12.4989 7.59791 11.8074C8.77617 10.4311 10 8.36338 10 5.70411C10 2.55382 7.76142 0 5 0C2.23858 0 0 2.55382 0 5.70411C0 8.36338 1.22383 10.4311 2.40209 11.8074C2.99409 12.4989 3.58479 13.0282 4.02751 13.385C4.24924 13.5637 4.43487 13.7 4.56636 13.7923C4.63214 13.8385 4.68445 13.8738 4.72106 13.898ZM5 7.77833C6.00415 7.77833 6.81818 6.84967 6.81818 5.70411C6.81818 4.55855 6.00415 3.62989 5 3.62989C3.99585 3.62989 3.18182 4.55855 3.18182 5.70411C3.18182 6.84967 3.99585 7.77833 5 7.77833Z"
                                        fill="currentColor" />
                                </svg>
                            </div>

                            <div>
                                <p className="text-[#26404C] font-normal text-sm xl:text-lg anim dark:text-[#EBEBEB]">AR Happy House, Road
                                    #5,Jan e Saba Housing, <span className="hidden xl:block"></span> Jamil Nogar, Bogura.</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <ul className="flex items-center justify-center gap-x-3">
                                <li><a href="#" className="text-[#26404C] font-normal text-sm xl:text-lg anim dark:text-[#EBEBEB]">Privacy
                                    Policy</a></li>
                                <li><a href="#" className="text-[#26404C] font-normal text-sm xl:text-lg anim dark:text-[#EBEBEB]">Terms &amp;
                                    Conditions </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-3 pt-3 border-t border-gray-300 xl:pt-5 xl:mt-5 anim dark:border-gray-600">
                        <p className="text-gray-500 font-normal text-xs xl:text-sm anim dark:text-[#EBEBEB] dark:text-opacity-80">&copy;
                            2024 <a href="https://giopio.com/" className="text-orange" target="_blank">Giopio</a>. All rights reserved</p>
                    </div>
                </div>
            </footer> */}
            {/* <!-- footer section end --> */}
        </>
    );
}