import React from 'react'
import { DonutChart, PiePercentageChart } from './Charts'

const DataDontLie = () => {
    return (
        <>
            <section className="w-full pt-20 relative md:pt-[86px] xl:pt-[130px] font-onest">
                <div className="container">

                    <div className="relative text-center mb-10 lg:mb-[60px]">
                        <h2 className="text-2xl font-semibold text-white md:text-[34px] xl:text-[48px] leading-[140%] ">Data Doesn't Lie.</h2>
                        <p className='font-normal text-sm lg:text-lg text-[#E9EAEB] mt-2'>We don't guess. We engineer. Here is the raw performance impact of our custom Shopify architecture..</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8'>
                        {/* card */}
                        <div className='w-full bg-[#252B37] rounded-[4px] p-3 lg:p-5 xl:p-8 md:col-span-8'>
                            <h5 className='text-xl lg:text-3xl font-semibold text-white mb-2'>
                                Case: EU Supplement Brand
                            </h5>
                            <p className='text-base lg:text-lg text-[#A4A7AE] font-normal'>Performance & Vital Optimization</p>

                            <div className='grid grid-cols-1 lg:grid-cols-12 mt-3 lg:mt-6 gap-3.5'>
                                {/* left */}
                                <div className='w-full lg:col-span-8 bg-white/5 border border-white/10 rounded-[4px] p-2 lg:p-4'>
                                    <h6 className='font-medium text-lg xl:text-2xl text-white'>Google Mobile Score</h6>

                                    {/* line progress */}
                                    <div className='w-full h-7 rounded-full bg-[#252B37] mt-3 lg:mt-6'>
                                        <div className='bg-[#F04438] h-full rounded-full' style={{ width: '35%' }}>
                                            <p className='font-semibold text-base lg:text-lg text-white text-right px-2 '>35%</p>
                                        </div>
                                    </div>

                                     <h6 className='font-medium text-sm lg:text-base text-[#A4A7AE] mt-3 flex items-center gap-x-2'>
                                        Before (Liquid Theme): <span className='bg-[#F044381A] inline-flex gap-x-2 px-2 py-1.5 rounded-md text-sm font-medium text-[#F44336]'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8333 14.1673H17.5M17.5 14.1673V7.50065M17.5 14.1673L10.8333 7.50065L7.5 10.834L2.5 5.83398" stroke="#F44336" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        35%</span>
                                        Last 28 Days
                                    </h6>

                                     {/* line progress */}
                                    <div className='w-full h-7 rounded-full bg-[#252B37] mt-3 lg:mt-6'>
                                        <div className='bg-[#12B76A] h-full rounded-full' style={{ width: '95%' }}>
                                            <p className='font-semibold text-base lg:text-lg text-white text-right px-2 '>95%</p>
                                        </div>
                                    </div>

                                     <h6 className='font-medium text-sm lg:text-base text-[#A4A7AE] mt-3 flex items-center gap-x-2'>
                                        After (Optimized): <span className='bg-[#12B76A1A] inline-flex px-2 gap-x-2 py-1.5 rounded-md text-sm font-medium text-[#12B76A] items-center'>
                                            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.08333 0.75H15.75M15.75 0.75V7.41667M15.75 0.75L9.08333 7.41667L5.75 4.08333L0.75 9.08333" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        95%</span>
                                        Last 28 Days
                                    </h6>

                                    <div className='mt-4 lg:mt-6 bg-[#12B76A1A] border border-[#12B76A4D] py-2 px-2.5 rounded-[4px] text-center flex items-center gap-x-2 justify-center'>
                                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.08333 0.75H15.75M15.75 0.75V7.41667M15.75 0.75L9.08333 7.41667L5.75 4.08333L0.75 9.08333" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                                        <p className='text-[#12B76A]'>BUSINESS IMPACT: +18% REVENUE UPLIFT</p>
                                    </div>
                                </div>
                                {/* right */}
                                <div className='w-full lg:col-span-4 bg-white/5 border border-white/10 rounded-[4px]'>
                                    <h6 className='font-semibold text-sm xl:text-lg text-white border-b border-[#FFFFFF1A] px-2 py-1.5 lg:px-4 lg:py-2.5'>Load Time (LCP)</h6>

                                    <div className='p-2 lg:p-4'>
                                        <DonutChart
                                            value={1.1}
                                            maxValue={3.0}
                                            displayValue="1.1s"
                                            label="Data Recovered"
                                            size={200}
                                            progressColor="#12B76A"
                                            backgroundColor="#252B37"
                                            showIcon={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full bg-[#252B37] rounded-[4px] p-3 lg:p-5 xl:p-8 md:col-span-4'>
                        <h6 className='font-medium text-lg xl:text-[22px] text-white'>Case: Dutch Wellness Retailer</h6>
                        <p className='font-medium text-sm lg:text-base text-[#A4A7AE] mt-3'>Server-Side Tracking & Compliance</p>
                        <div className='flex justify-center items-center mt-6'>
                            <PiePercentageChart
                                percentage={95}
                                size={280}
                                primaryColor="#12B76A"
                                secondaryColor="#414651"
                                showPercentage={true}
                                labelText="95% = 100% Data Accuracy"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DataDontLie
