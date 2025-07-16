import Link from 'next/link';
import CareerForm from './CareerForm';
import careerListData from '../../../../../data/career/list';
import ShareButtons from './ShareButtons';
import Image from 'next/image';

const CDetails = async ({career}) => {

    if (!career) {
        return (
            <div className="w-full py-10 md:py-14 xl:py-20 xl:pb-[140px] relative z-40">\
                <div className="container">
                    <div className="flex justify-center items-center flex-col gap-y-3 min-h-[80vh]">

                        <svg className="w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9040" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        <p className="text-sm xl:text-2xl font-medium text-first">
                            Loading details..
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-10 relative z-40 lg:py-32 xl:py-[160px]">
            <div className="container">
                {/* <!-- common-element start --> */}
                <div className="w-full">
                    <Image
                    src="/assets/images/about-elem-02.svg"
                    alt="elem-01"
                    width={100}
                    height={100}
                    className="absolute left-[60px] top-[70px] z-30 xl:top-[304px] xl:left-[79%] xl:w-6 flying-elem-1"
                     /> 
                    <img
                        src="/assets/images/about-elem-01.svg"
                        alt="elem-01"
                        className="absolute right-5 top-8 z-30 xl:right-[14%] xl:top-12 flying-elem-2"
                    />
                    <img
                        src="/assets/images/about-elem-03.svg"
                        alt="elem-01"
                        className="hidden xl:flex absolute right-[84%] rotate-90 top-32 z-30 flying-elem-3"
                    />
                    <img
                        src="/assets/images/about-elem-04.svg"
                        alt="elem-01"
                        className="hidden xl:flex absolute left-[30%] top-[50px] z-30 flying-elem-4"
                    />
                </div>
                {/* <!-- common-element end --> */}

                {/* <!-- career details top part start --> */}
                <div className="w-full py-6 px-8 bg-[#F1F4F9] anim dark:bg-[#323B49] shadow-two border border-[#26404C33] xl:py-[62px] xl:px-[42px] xl:grid xl:grid-cols-3 xl:items-center">
                    <div className="left xl:col-span-2">
                        <h1 className="text-2xl font-bold text-second xl:text-[62px] xl:leading-[78px] dark:text-white anim">
                            {career.title}
                        </h1>
                        <ul className="mt-5 flex flex-col gap-y-3 md:flex-row md:gap-x-3 md:gap-y-0 xl:gap-x-6">
                            <li className="flex items-center gap-x-3">
                                <img src="/assets/images/bag-icon.svg" alt="bag" className="ltd anim" />
                                <img src="/assets/images/bag-icon-w.svg" alt="bag" className="dtl anim" />
                                <p className="text-third font-normal text-sm xl:text-base dark:text-d-fifth anim">
                                    {career.employmentType}, {career.locationType}
                                </p>
                            </li>
                            <li className="flex items-center gap-x-3">
                                <img src="/assets/images/card-icon.svg" alt="bag" className="ltd anim" />
                                <img src="/assets/images/card-icon-w.svg" alt="bag" className="dtl anim" />
                                <p className="text-third font-normal text-sm xl:text-base dark:text-d-fifth anim">
                                    ৳{career.salary_start} - ৳{career.salary_end}
                                </p>
                            </li>
                            <li className="flex items-center gap-x-3">
                                <img src="/assets/images/calendar-2.svg" alt="calendar" className="ltd anim" />
                                <img src="/assets/images/calendar-2-w.svg" alt="calendar" className="dtl anim" />
                                <p className="text-third font-normal text-sm xl:text-base dark:text-d-fifth anim">
                                    Deadline: {career.deadline}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="right mt-6 text-center xl:col-span-1 xl:text-end xl:mt-0"> 
                        <ShareButtons url={`http://localhost:3000/career/${career.slug}`} title={career.title} />
                    </div>
                </div>
                {/* <!-- career details top part end --> */}

                {/* <!-- details part --> */}
                <div className="w-full">
                    <h3 className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-[72px] text-2xl md:text-3xl lg:text-[36px] xl:text-[42px] font-bold text-second mb-4 sm:mb-5 md:mb-7 lg:mb-8 xl:mb-9 anim dark:text-white">
                        Job Description
                    </h3>
                    <p className="text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white">
                        {career.description}
                    </p>

                    <h4 className="text-base font-bold text-second mt-6 xl:text-2xl xl:mt-[70px] dark:text-white anim">Responsibilities:</h4>
                    <ul className="mt-4 flex flex-col gap-y-2 xl:mt-9">
                        {career.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-center gap-x-2">
                                <span className="inline-flex w-[6px] h-[6px] bg-second rounded-full shrink-0 dark:bg-white anim"></span>
                                <p className="text-sm font-normal text-second xl:text-lg dark:text-d-fifth anim">{responsibility}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className="text-base font-bold text-second mt-6 xl:text-2xl xl:mt-[70px] dark:text-white anim">Experience:</h4>
                    <ul className="mt-4 flex flex-col gap-y-2 xl:mt-9">
                        {career.experiences.map((exp, index) => (
                            <li key={index} className="flex items-center gap-x-2">
                                <span className="inline-flex w-[6px] h-[6px] bg-second rounded-full shrink-0 dark:bg-white anim"></span>
                                <p className="text-sm font-normal text-second xl:text-lg dark:text-d-fifth anim">{exp}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className="text-base font-bold text-second mt-6 xl:text-2xl xl:mt-[70px] dark:text-white anim">Requirements:</h4>
                    <ul className="mt-4 flex flex-col gap-y-2 xl:mt-9">
                        {career.requirements.map((requirement, index) => (
                            <li key={index} className="flex items-center gap-x-2">
                                <span className="inline-flex w-[6px] h-[6px] bg-second rounded-full shrink-0 dark:bg-white anim"></span>
                                <p className="text-sm font-normal text-second xl:text-lg dark:text-d-fifth anim">{requirement}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className="text-base font-bold text-second mt-6 xl:text-2xl xl:mt-[70px] dark:text-white anim">Benefits:</h4>
                    <ul className="mt-4 flex flex-col gap-y-2 xl:mt-9">
                        {career.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-x-2">
                                <span className="inline-flex w-[6px] h-[6px] bg-second rounded-full shrink-0 dark:bg-white anim"></span>
                                <p className="text-sm font-normal text-second xl:text-lg dark:text-d-fifth anim">{benefit}</p>
                            </li>
                        ))}
                    </ul>
                    <h6 className="text-sm font-medium text-second my-6 xl:text-xl xl:mt-24 xl:mb-10 dark:text-white"><strong>Job Location:</strong> AR Happy House, Road #5, Jan e
                            Saba Housing, Jamil Nogar Bogura, Bangladesh</h6>

                    </div>
                    {/* <!-- details part --> */}

                    {/* <!-- send resume part start --> */}
                    <div className="w-full border border-[#26404C33] p-6 xl:py-[72px] xl:px-[62px] anim dark:border-d-sixth">
                        <div className="text-start mb-6 xl:mb-[70px]">
                            <h3 className="font-bold text-lg text-second leading-8 xl:text-[32px] dark:text-white">Step into a Brighter Future: Take the First Leap</h3>
                        </div>

                        {/* <!-- career form start --> */}
                        <CareerForm originalSubject={career.title} />
                        {/* <!-- career form end --> */}
                    </div>
                    {/* <!-- send resume part end --> */}
            </div>
        </div>
    );
};

export default CDetails;