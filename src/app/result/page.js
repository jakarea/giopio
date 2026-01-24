import DataDontLie from "../shopify-component/DataDontLie";
import meta from "../../../data/meta/home.json"
export const metadata = {
    ...meta
};

export default function Result() {
    return (
        <>
            {/* hero */}
            <section className="w-full pt-16 relative md:pt-20 xl:pt-32 xl:pb-[102px]">
                <div className="container">
                    <div className="text-center">
                        <div className="flex items-center gap-x-3 justify-center">
                            <h1
                                className="text-stroke text-[30px] font-extrabold leading-[120%] sm:text-[43px] md:text-[65px] lg:text-[82px] uppercase xl:font-black">DATA OVER </h1>

                            <h2
                                className="text-[30px] font-extrabold leading-[120%] text-first sm:text-[43px] md:text-[65px]">
                                OPINIONS
                            </h2>
                        </div>

                        <p className="mt-6 lg:mt-8 text-sm text-center font-normal leading-[21px] text-[#E9EAEB] sm:text-base dark:text-[#E9EAEB]anim lg:text-xl lg:max-w-[60%] lg:mx-auto">
                            We don't sell 'pretty websites'. We engineer revenue engines. Here is the raw performance data from our recent client projects.</p>
                    </div>
                </div>
            </section>

            {/* statst table */}
            <div className="w-full pb-12 md:pb-20 lg:pb-[120px]">
                <div className="container">
                    <div className="w-full bg-[#101828] rounded-[4px] border border-[#252B37] p-2 lg:p-2.5 flex flex-col gap-y-4 md:gap-6 lg:gap-y-[30px]">

                        {/* block */}
                        <div className="bg-[#101828] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
                            {/* card */}
                            <div className="w-full md:col-span-1 border border-[#252B37] rounded-[4px]">
                                <h5 className="py-3 px-4 text-white font-semibold text-base lg:text-lg font-onest flex items-center gap-x-2 lg:gap-x-2.5 border-b border-[#252B37]">
                                    <span className="flex w-4 h-4 rounded-full bg-[#12B76A33] lg:w-[18px] lg:h-[18px] justify-center items-center">
                                        <span className="block w-2.5 h-2.5 bg-[#12B76A] rounded-full">

                                        </span>
                                    </span>
                                    The Speed Optimization</h5>

                                <div className="p-3 lg:py-5 px-4">
                                    <h6 className="text-white font-medium text-base lg:text-lg font-onest">OAK Supplements (NL)</h6>

                                    <ul className="mt-2 lg:mt-2.5 font-manrope ml-3 lg:ml-4">
                                        <li className="flex items-center gap-x-2">
                                            <span className="block w-2 h-2 bg-white rounded-full"></span>
                                            <p className="font-medium text-[#D5D7DA] text-sm lg:text-base ">
                                                Health && Wellness•Shopify
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* card */}
                            {/* card */}
                            <div className="w-full md:col-span-1 border border-[#252B37] rounded-[4px]">
                                <h5 className="py-3 px-4 text-white font-semibold text-base lg:text-lg font-onest flex items-center gap-x-2 lg:gap-x-2.5 border-b border-[#252B37]">

                                    The Problem</h5>

                                <div className="p-3 lg:py-5 px-3">


                                    <ul className="font-manrope ml-3">
                                        <li className="flex items-center gap-x-2">
                                            <span className="block w-2 h-2 bg-white rounded-full"></span>
                                            <p className="font-medium text-[#D5D7DA] text-sm lg:text-base ">
                                                Mobile Load Time: 4.8s
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-x-2">
                                            <span className="block w-2 h-2 bg-[#7A271A] rounded-full"></span>
                                            <p className="font-medium text-[#D5D7DA] text-sm lg:text-base ">
                                                High Bounce Rate on Checkout
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* card */}
                            {/* card */}
                            <div className="w-full md:col-span-1 border border-[#252B37] rounded-[4px]">
                                <h5 className="py-3 px-4 text-white font-semibold text-base lg:text-lg font-onest flex items-center gap-x-2 lg:gap-x-2.5 border-b border-[#252B37]">

                                    The Engineering Fix</h5>

                                <div className="p-3 lg:py-5 px-3">
                                    <ul className="font-manrope ml-3">
                                        <li className="flex items-center gap-x-2">
                                            <span className="block w-2 h-2 bg-white rounded-full"></span>
                                            <p className="font-medium text-[#D5D7DA] text-sm lg:text-base ">
                                                Liquid Code Refactoring Script
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-x-2">
                                            <span className="block w-2 h-2 bg-[#fff] rounded-full"></span>
                                            <p className="font-medium text-[#D5D7DA] text-sm lg:text-base ">
                                                Deferral & Image Compression
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* card */}
                            {/* card */}
                            <div className="w-full md:col-span-1 border border-[#252B37] rounded-[4px]">
                                <h5 className="py-3 px-4 text-white font-semibold text-base lg:text-lg font-onest flex items-center gap-x-2 lg:gap-x-2.5 border-b border-[#252B37]">

                                    Evidence</h5>

                                <div className="p-3 lg:py-5 px-4">
                                    <h6 className="text-[#6CE9A6] font-medium text-base lg:text-lg font-onest">🚀 1.2s Load Time</h6>
                                    <h6 className="text-[#6CE9A6] font-medium text-base lg:text-lg font-onest">📈 +18% Revenue Uplift</h6>


                                </div>
                            </div>
                            {/* card */}
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}