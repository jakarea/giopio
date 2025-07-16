'use client'

import React, { useState, useEffect } from 'react';
import resourceItems from '../../../../data/case-study/items';

const Filter = ({ activeCategory, onCategoryChange, searchQuery, setSearchQuery }) => {
    const categoriesList = [...new Set(resourceItems)];

    const technologies = [
        'React',
        'Laravel',
        'Flutter',
        'WordPress',
        'Shopify'
    ];

    const [placeholder, setPlaceholder] = useState('');
    const [currentTechIndex, setCurrentTechIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const currentText = `${technologies[currentTechIndex]}`;
    
        const delay = typing ? 300 : 300; // Slow typing & deleting speed
    
        const timer = setTimeout(() => {
            if (typing) {
                if (charIndex < currentText.length) {
                    setPlaceholder((prev) => prev + currentText[charIndex]);
                    setCharIndex(charIndex + 1);
                } else {
                    setTyping(false);
                    setTimeout(() => setTyping(false), 2000); // Pause after full text is typed
                }
            } else {
                if (charIndex > 0) {
                    setPlaceholder((prev) => prev.slice(0, -1));
                    setCharIndex(charIndex - 1);
                } else {
                    setTyping(true);
                    setCurrentTechIndex((prevIndex) => (prevIndex + 1) % technologies.length);
                }
            }
        }, delay);
    
        return () => clearTimeout(timer);
    }, [charIndex, typing, currentTechIndex]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <div className="search-box relative max-w-[630px] mx-auto">
                {/* <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full h-12 rounded-full px-6 text-sm border border-transparent font-normal text-second xl:h-[72px] xl:text-lg anim focus-within:border-first dark:focus-within:border-white dark:bg-[#323B49] dark:text-white"
                    placeholder="Search Project"
                /> */}
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full h-12 rounded-full px-6 text-sm border border-transparent font-normal text-second xl:h-[72px] xl:text-lg anim focus-within:border-first dark:focus-within:border-white dark:bg-[#323B49] dark:text-white"
                    placeholder={`Type to Search Projects: ${placeholder}`}
                />
                {/* <img src="/assets/images/search-icon.svg" alt="search-icon" className="absolute right-4 top-3 z-30 xl:top-6 xl:right-6 cursor-pointer ltd anim" />
                <img src="/assets/images/search-icon-w.svg" alt="search-icon" className="absolute right-4 top-3 z-30 xl:top-6 xl:right-6 cursor-pointer dtl anim" /> */}
            </div>

            <div className="w-full mt-7 text-center xl:mt-[42px]">
                <ul className="flex justify-center items-center flex-wrap gap-x-2 gap-y-2">
                    <li>
                        <button onClick={() => onCategoryChange('all')}
                            className={`border border-[#E9EAEC] rounded-[50px] flex items-center justify-center px-4 text-sm font-normal h-[37px] anim capitalize ${activeCategory === 'all'
                                ? 'bg-[#323B49] dark:!text-second text-white dark:bg-first !border-second'
                                : 'bg-white text-[#687588]'
                                } dark:bg-[#323b49] dark:text-white dark:border-d-fifth dark:hover:bg-first`}
                        >
                            All
                        </button>
                    </li>
                    {categoriesList.map((category, index) => (
                        <li key={index}>
                            <button
                                onClick={() => onCategoryChange(category.slug)}
                                className={`border border-[#E9EAEC] rounded-[50px] flex items-center justify-center px-4 text-sm font-normal h-[37px] anim capitalize ${activeCategory === category.slug
                                    ? 'bg-[#323B49] dark:!text-second text-white dark:bg-first !border-second'
                                    : 'bg-white text-[#687588]'
                                    } dark:bg-[#323b49] dark:text-white dark:border-d-fifth dark:hover:bg-first`}
                            >
                                {category.category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Filter;
