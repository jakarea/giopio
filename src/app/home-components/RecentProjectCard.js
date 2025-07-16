import React from 'react'

const RecentProjectCard = ({ project }) => {
    return (
        <>
            <div
                className="w-full pb-8 mb-8 border-b border-second hover:border-first anim relative group xl:grid xl:grid-cols-7 xl:items-start xl:gap-x-[72px] dark:!border-20t anim">
                <div className="flex flex-col xl:flex-row gap-y-[10px] xl:gap-y-0 xl:gap-x-3 items-start xl:items-center xl:col-span-3">
                    <h4 className="text-2xl font-medium leading-6 text-second anim dark:text-white whitespace-nowrap">
                        {project.title}
                    </h4>
                    <span
                        className="inline-flex items-center justify-center bg-first rounded-[3px] h-[21px] text-new font-medium text-[12px] px-[6px] whitespace-nowrap">{project.category}</span>
                </div>
                <div className="mt-8 xl:col-span-4 xl:mt-0 xl:mr-6">
                    <p className="text-sm xl:text-base font-light text-second leading-6 xl:leading-7 lg:mr-4 xl:mr-2 anim dark:text-d-fifth">
                        {project.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default RecentProjectCard