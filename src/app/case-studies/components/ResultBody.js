import Link from 'next/link';
import React from 'react';

const ResultBody = ({ activeCategory, searchQuery, resourceItems }) => {
    let filteredItems;

    if (activeCategory === "all") {
        filteredItems = resourceItems.filter(item =>
            item.technology && item.technology.toLowerCase().includes(searchQuery.toLowerCase())
        );
    } else {
        filteredItems = resourceItems.filter(item =>
            item.slug === activeCategory && item.technology && item.technology.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (
        <div className="w-full grid mt-10 xl:mt-[72px] gap-y-7 md:grid-cols-2 md:gap-x-5 xl:grid-cols-2 xl:gap-x-10 xl:gap-y-[72px]">
            {filteredItems.length === 0 ? (
                <div className="w-full py-10 md:py-14 xl:py-20 xl:pb-[140px] relative z-40 xl:col-span-2">
                    <div className="container">
                        <div className="flex justify-center items-center flex-col gap-y-3">
                            <svg className="w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9040">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                            <p className="text-sm xl:text-2xl font-medium text-first">
                                No Project found...
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                filteredItems.map((item, index) => (
                    <div key={index} className="w-full bg-white dark:bg-[#323B49]">
                        <div className="thumb relative">
                            <Link href={item.previewLink} className='block pt-12 px-2 pb-8 relative bg-gray-200 dark:bg-gray-600 h-[260px] xl:h-[320px] overflow-hidden'>
                                <span className="bg-white inline-flex py-[8px] px-4 text-sm font-medium text-second absolute left-0 top-0 z-20 dark:bg-[#323B49] dark:text-white">{item.subtitle}</span>
                                {/* <Image
                                    src={item.thumbnail}
                                    alt={item.slug}
                                    className="w-full object-contain h-[260px]"
                                    width={800}
                                    height={260}
                                    quality={100}
                                    loading='eager'
                                /> */}
                                <img
                                    src={item.thumbnail}
                                    alt={item.slug}
                                    className={`w-full object-contain h-[260px] ${index === 0 ? 'scale-[1.85]' : ''}`}
                                />
                            </Link>
                        </div>
                        <div className="pt-10 p-6 xl:pt-[62px] xl:pb-10 xl:px-10 xl:min-h-[360px] flex flex-col justify-between">
                            <div>
                                <Link href={item.previewLink}>
                                <h2 className="text-xl font-bold text-second xl:text-2xl dark:text-white">{item.title}</h2>
                                </Link>
                                <p className="common-para mt-4 dark:text-d-fifth">{item.description}</p>
                            </div>

                            <div className="flex mt-8 justify-between items-center">
                                <Link href={item.liveLink} className="text-sm font-semibold text-second border-b border-second pb-1 inline-flex pr-3 xl:text-lg dark:text-white dark:border-white">Live</Link>
                                <Link href={item.previewLink} className="text-sm font-semibold text-second dark:text-white pb-1 inline-flex pr-3 gap-x-3 xl:text-lg">
                                    Case Study
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ResultBody;