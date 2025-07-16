import Link from 'next/link';
import React from 'react';
import caseStudies from '../../../data/case-study/items';
import Image from 'next/image';

const CaseStudyMegaMenu = () => {
    return (
        <ul className="sm:grid sm:grid-cols-2 sm:text-start xl:grid-cols-3">
            {caseStudies.map((item, index) => (
                <li key={index}>
                    <Link href={item.previewLink} className="flex items-center gap-x-2 p-2 rounded-lg anim hover:bg-[#F8FCFF] border border-transparent hover:border-[#E7F4FF] md:p-4 xl:gap-x-5 dark:hover:bg-[#1B1C31] dark:hover:border-[#1B1C31] anim">
                        <div className="shrink-0 hidden lg:flex">
                            <Image
                                src={item.logo}
                                alt={item.slug}
                                className="w-16 xl:w-18 xl:h-14 object-fill"
                                width={100}
                                height={100}
                                loading='lazy'
                            />
                        </div>
                        <div>
                            <h5 className="text-base font-bold text-second xl:text-lg dark:text-white anim">{item.subtitle}</h5>
                            <p className="font-normal text-third leading-5 mt-2 text-xs xl:mt-0 dark:text-d-fifth anim">
                                {item.description.length > 32 ? `${item.description.substring(0, 32)}...` : item.description}
                            </p>
                        </div>
                        <div className="shrink-0 flex">
                            <Image
                                src="/assets/images/arrow-right-blue.svg"
                                alt="arrow"
                                className="w-4 xl:w-5"
                                width={20}
                                height={20}
                            />
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default CaseStudyMegaMenu;
