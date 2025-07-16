import Link from 'next/link';
import React from 'react';
import careers from '../../../../data/career/list';
import Image from 'next/image';

const CareerList = () => {
    return (
        <div className="w-full py-10 bg-[#F9F9F9] xl:py-[150px] dark:bg-[#1B1C31] anim relative z-50">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-sm font-medium text-second uppercase xl:text-lg dark:text-d-sixth">Come join us</h2>
                    <h3 className="text-2xl font-bold text-second py-3 xl:text-4xl xl:py-[14px] dark:text-white">Career Openings</h3>
                    <p className="common-para !text-sm xl:w-2/5 xl:mx-auto dark:text-d-fifth">
                        We’re always looking for creative, talented self-starters to join the JMC family. Check out our open roles below and fill out an application.
                    </p>
                </div>

                <div className="w-full mt-10 xl:mt-[55px]">
                    {careers.map((career) => (
                        <div key={career.id} className="w-full grid gap-y-4 pb-5 mb-5 border-b border-fourth md:grid-cols-2 xl:grid-cols-6 xl:pb-8 xl:mb-8 xl:items-center">
                            <div className="w-full md:col-span-2 xl:col-span-3">
                                <h4 className="text-xl font-semibold text-second xl:text-2xl dark:text-white">{career.title}</h4>
                            </div>

                            <div className="w-full xl:col-span-1">
                                <p className="font-medium text-sm text-second dark:text-white">Experience</p>
                                <h5 className="text-xl font-semibold text-second xl:text-2xl dark:text-white">{career.experience_year}</h5>
                            </div>

                            <div className="flex justify-between items-center w-full xl:col-span-2">
                                <div className="w-full">
                                    <p className="font-medium text-sm text-second dark:text-white">Deadline</p>
                                    <h5 className="text-xl font-semibold text-second xl:text-2xl dark:text-white">{career.deadline}</h5>
                                </div>

                                <div className="w-full flex justify-end">
                                    <Link href={`/career/${career.slug}`} className="group">
                                        <Image
                                            src="./assets/images/arrow-right-ash.svg"
                                            alt="arrow-right"
                                            width={25}
                                            height={16}
                                            className="group-hover:hidden object-contain" />

                                        <Image
                                            src="./assets/images/arrow-right-orng.svg"
                                            alt="arrow right white"
                                            width={25}
                                            height={16}
                                            className="hidden group-hover:flex object-contain" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerList;
