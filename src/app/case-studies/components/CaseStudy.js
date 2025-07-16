'use client'
import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import ResultBody from './ResultBody';
import resourceItems from '../../../../data/case-study/items.json';
import { useSearchParams } from "next/navigation";
import Image from 'next/image';

const CaseStudy = () => {

    const searchParams = useSearchParams();
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const filter = searchParams.get('filter');
        if (filter) {
            setActiveCategory(filter);
        }
    }, [searchParams]);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <>
            <section className="w-full pt-16 pb-20 relative md:pt-28 lg:pt-32 xl:pt-[160px] xl:pb-[160px]">
                <div className="container">
                    <div className="w-full">
                        <Image
                            src="/assets/images/about-elem-02.svg"
                            alt="elem-01"
                            width={24}
                            height={24}
                            className="absolute left-[60px] top-[70px] z-30 xl:top-[304px] xl:left-[79%] xl:w-6 flying-elem-1" />
                        <Image
                            src="/assets/images/about-elem-01.svg"
                            alt="elem-02"
                            width={40}
                            height={39}
                            className="absolute right-5 top-8 z-30 xl:right-[14%] xl:top-12 flying-elem-2" />
                        <Image
                            src="/assets/images/about-elem-03.svg"
                            alt="elem-03"
                            width={133}
                            height={60}
                            className="hidden xl:flex absolute right-[75%] rotate-90 top-32 z-30 flying-elem-3" />
                        <Image
                            src="/assets/images/about-elem-04.svg"
                            width={24}
                            height={24}
                            alt="elem-04"
                            className="hidden xl:flex absolute left-[30%] top-[50px] z-30 flying-elem-4" />
                    </div>

                    <div className="text-center mb-10 xl:mb-20 relative">
                        <h1 className="text-2xl font-bold leading-8 text-second sm:text-3xl md:text-4xl lg:text-6xl xl:text-[72px] anim dark:text-white">Case Studies</h1>
                    </div>

                    <div className="w-full">
                        <Filter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                        <ResultBody activeCategory={activeCategory} searchQuery={searchQuery} resourceItems={resourceItems} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudy;
