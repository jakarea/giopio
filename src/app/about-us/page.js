import meta from "../../../data/meta/home.json"
import Image from "next/image"

export const metadata = {
    ...meta
};

export default function AboutUs() {
    return (
        <>
            <section className="w-full py-16 relative md:pt-20 xl:pt-32 xl:pb-[102px]">
                <div className="container">
                    <div className="text-center">
                        <div className="flex flex-col items-center gap-x-3 justify-center">
                            <h1
                                className="text-stroke text-[30px] font-extrabold leading-[120%] sm:text-[43px] md:text-[65px] lg:text-[82px] uppercase xl:font-black">BUILT BY ENGINEERS </h1>

                            <h2
                                className="text-[30px] font-extrabold leading-[120%] text-first sm:text-[43px] md:text-[65px]">
                                NOT SALESMEN
                            </h2>
                        </div>

                        <p className="mt-6 lg:mt-8 text-sm text-center font-normal leading-[21px] text-[#E9EAEB] sm:text-base dark:text-[#E9EAEB]anim lg:text-xl lg:max-w-[60%] lg:mx-auto">
                            Most agencies are run by smooth-talking marketers who outsource your project. Giopio is founded by Senior Laravel & Shopify Architects who write the code themselves. We don't guess—we engineer revenue.
                        </p>
                    </div>
                </div>
            </section>

            {/* about section start */}
            <section className="w-full relative">
                <div className="container">
                    <div className='text-center bg-black rounded-[4px] p-8 lg:p-10 xl:p-[42px] grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 lg:gap-x-6 items-start border border-[#252B37] xl:gap-x-20'>

                        <div className='w-full lg:col-span-7 text-start font-onest'>
                            <h2 className='font-semibold text-2xl md:text-[34px] lg:text-[42px] text-white leading-[140%] lg:max-w-[80%]'>
                                The ‘Anti-Agency’ Approach
                            </h2>
                            <p className='text-sm lg:text-lg text-[#D5D7DA] font-normal mt-3 lg:mt-5 font-manrope'>
                                In 2026, the e-commerce industry is broken. Brands are paying premium fees for 'drag-and-drop' websites built by interns. The result? Bloated code, slow mobile speeds, and lost sales.
                                We started Giopio to fix this. We believe that Performance is the best Marketing.
                            </p>

                            <p className='text-sm lg:text-lg text-[#D5D7DA] font-normal mt-3 lg:mt-5 font-manrope'>
                                We strip away the bloat. We refactor legacy Liquid code manually. We build Headless architectures using Next.js. We treat your Shopify store like a high-performance software application, not just a digital brochure.
                            </p>
                        </div>
                        <div className='w-full relative lg:col-span-5 flex items-center justify-center'>
                            <img src="/assets/images/shopify/person.png" alt="Person" className='w-full h-full' />

                        </div>
                    </div>
                </div>
            </section>

            {/* global map section start */}
            <section className="w-full pt-12 md:pt-16 lg:pt-20">
                <div className="container">
                    <div className="flex justify-center items-center relative">
                        <img src="/assets/images/shopify/global-map.svg" alt="Map" className='w-full h-full lg:min-h-[543px] object-cover' />

                        {/* marker */}
                        <div className="absolute left-0 -top-8 z-30 w-full h-full flex items-start justify-center">
                            <img src="/assets/images/shopify/marker-1.svg" alt="Map" className='w-10 lg:w-20' />

                            <div className="bg-[#252B37] w-fit p-2 lg:p-2.5 mt-2 lg:mt-3.5 max-w-[475px] absolute top-14 lg:top-32 text-center font-manrope">
                                <h5 className="font-semibold text-[#E9EAEB] text-sm lg:text-lg">Where We Serve</h5>
                                <p className="font-normal text-[#E9EAEB] text-xs lg:text-sm !leading-[180%] hidden lg:block mt-2">We work with companies throughout the Netherlands, delivering Shopify solutions tailored to local business needs.</p>
                            </div>
                        </div>

                        {/* marker */}
                        <div className="absolute right-0 -top-10 lg:-top-24 z-30 w-[46%] h-full flex flex-col items-center justify-center">
                            <img src="/assets/images/shopify/marker-2.svg" alt="Map" className='w-10 lg:w-20' />

                            <div className="bg-[#252B37] w-fit p-2 lg:p-2.5 mt-2 lg:mt-3.5 max-w-[475px] absolute bottom-0 lg:bottom-14 text-center font-manrope">
                                <h5 className="font-semibold text-[#E9EAEB] text-sm lg:text-lg">The Engine</h5>
                                <p className="font-normal text-[#E9EAEB] text-xs lg:text-sm !leading-[180%] hidden lg:block mt-2">Our dedicated development center in Dhaka houses elite Laravel and React engineers working around the clock. This allows us to execute complex migrations 2x faster than local agencies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* global map section end */}

            {/* store revenue lacking */}
            <section className="w-full pt-20 relative md:pt-[86px]">
                <div className="container">

                    <div className="relative text-center mb-10 lg:mb-[60px]">
                        <h2 className="text-2xl font-semibold text-white md:text-[34px] xl:text-[48px] leading-[140%] font-onest">Core Values</h2>
                        <p className='font-normal text-sm lg:text-lg text-[#E9EAEB] mt-2'>Most Shopify stores fail in three hidden areas. We fix them all.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-x-6'>
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#26404C4D] p-6 xl:p-10 mt-8 relative group anim bg-[#F6F6F8] md:mt-0 anim
                             dark:bg-[#1B1C31] dark:border-[#252B37] dark:hover:bg-first">
                            <img src='/assets/images/shopify/leak-icon-01.svg' alt='icon' />
                            <div className="relative z-40">
                                <h4 className="text-xl xl:text-2xl font-semibold leading-8 text-second group-hover:text-white anim dark:text-white mt-6 lg:mt-[42px]">
                                    Code Over Clicks
                                </h4>

                                <p
                                    className={`mt-3.5 font-poppins text-sm xl:text-base font-normal leading-7 tracking-[-1%] text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                    We don't care about vanity metrics. We care about Time to First Byte (TTFB), clean syntax, and server response time. Clean code creates revenue.
                                </p>
                            </div>
                        </div>
                        {/* card */}
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#26404C4D] p-6 xl:p-10 mt-8 relative group anim bg-[#F6F6F8] md:mt-0 anim
                             dark:bg-[#1B1C31] dark:border-[#252B37] dark:hover:bg-first">
                            <img src='/assets/images/shopify/leak-icon-02.svg' alt='icon' />
                            <div className="relative z-40">
                                <h4 className="text-xl xl:text-2xl font-semibold leading-8 text-second group-hover:text-white anim dark:text-white mt-6 lg:mt-[42px]">
                                    No Vendor Lock-in
                                </h4>

                                <p
                                    className={`mt-3.5 font-poppins text-sm xl:text-base font-normal leading-7 tracking-[-1%] text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                    We write clean, documented code that any developer can understand. We never hold your site hostage with messy, custom frameworks.
                                </p>
                            </div>
                        </div>
                        {/* card */}
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#26404C4D] p-6 xl:p-10 mt-8 relative group anim bg-[#F6F6F8] md:mt-0 anim
                             dark:bg-[#1B1C31] dark:border-[#252B37] dark:hover:bg-first">
                            <img src='/assets/images/shopify/leak-icon-03.svg' alt='icon' />
                            <div className="relative z-40">
                                <h4 className="text-xl xl:text-2xl font-semibold leading-8 text-second group-hover:text-white anim dark:text-white mt-6 lg:mt-[42px]">
                                    Brutal Honesty
                                </h4>

                                <p
                                    className={`mt-3.5 font-poppins text-sm xl:text-base font-normal leading-7 tracking-[-1%] text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                    If your favorite Shopify app is slowing down your site, we will tell you to delete it. We prioritize your profit over your feelings.
                                </p>
                            </div>
                        </div>
                        {/* card */}
                    </div>
                </div>
            </section>

            {/* review box */}
            <section className="w-full py-20 relative md:py-[86px] xl:py-[130px]">
                <div className="container">
                    <div className='text-center bg-black rounded-[4px] p-8 lg:p-10 xl:p-[42px] grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 lg:gap-x-6 items-start border border-[#252B37] xl:gap-x-20'>

                        <div className='w-full lg:col-span-8 text-start font-onest flex flex-col justify-between h-full '>
                            <div>
                                <h2 className='font-semibold text-xl md:text-[24px] lg:text-[32px] text-white leading-[140%]'>
                                    A Note From The Lead Architech
                                </h2>
                                <p className='text-sm lg:text-xl text-[#D5D7DA] font-normal mt-3 lg:mt-5 font-manrope'>
                                    I realized early on that e-commerce founders don't need more 'marketing fluff'. They need technical stability. When your checkout loads in 1.2 seconds, you don't need to shout to make a sale. The experience sells itself.
                                </p>
                                <p className='text-sm lg:text-xl text-[#D5D7DA] font-normal mt-3 lg:mt-5 font-manrope'>
                                    Let us look under the hood of your store. I promise you, we will find revenue you didn't know you were losing.
                                </p>

                            </div>
                            <div className="flex items-center gap-x-4 mt-4 lg:mt-0">
                                <div>
                                    <svg className="w-8 h-8 lg:w-12 lg:h-12" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 23.5C0 10.5213 10.5213 0 23.5 0C36.4787 0 47 10.5213 47 23.5C47 36.4787 36.4787 47 23.5 47C10.5213 47 0 36.4787 0 23.5Z" fill="#F04438" />
                                        <g clipPath="url(#clip0_40000352_959)">
                                            <path d="M14.167 29.1475L17.7063 26.4453C19.5867 28.8912 21.5846 30.0186 23.8083 30.0186C26.0202 30.0186 27.9616 28.9046 29.7573 26.4779L33.3471 29.1149C30.7562 32.6142 27.5365 34.4631 23.8083 34.4631C20.0921 34.4631 16.8412 32.6261 14.167 29.1475Z" fill="white" />
                                            <path d="M23.3788 17.402L17.079 22.8123L14.167 19.4464L23.3921 11.5234L32.5444 19.4523L29.619 22.8064L23.3788 17.402Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_40000352_959">
                                                <rect width="24" height="24" fill="white" transform="translate(11.5 11.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h5 className='text-white font-medium text-base lg:text-lg font-onest'>
                                        Jakarea p.
                                    </h5>
                                    <h6 className='text-sm lg:text-base text-[#D5D7DA] font-medium font-manrope mt-0.5'>
                                        ✅ Lead Engineer & Founder
                                    </h6>
                                </div>
                            </div>

                        </div>
                        <div className='w-full relative lg:col-span-4 flex items-center justify-center'>
                            <img src="/assets/images/shopify/jakarea-parvez.jpeg" alt="Jakarea Parvez" className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}