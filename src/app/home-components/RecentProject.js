import AnimatedText from '@/app/components/AnimatedText'
import Link from 'next/link'
import React from 'react'
import recentProjects from '../../../data/project/list'
import RecentProjectCard from './RecentProjectCard'

const RecentProject = () => {
  return (
    <>
      <section className="recent-project pt-20 relative md:pt-24 lg:pt-32 xl:pt-[210px]">
        <div className="container">
          <div className="flex justify-between items-center relative">
            <h2 className="absolute left-0 -top-[80%] md:-top-[90%] -z-30 bg-title xl:left-[-12%]">Project</h2>
            <h3 className="text-lg font-medium text-first leading-[20px] sm:text-[20px] md:text-[24px] xl:text-[42px] whitespace-nowrap">Recent
              Projects</h3>
            <div className="flex max-w-[56%] min-w-[56%] relative text-right ml-4 justify-end xl:min-w-[72%]">
              <hr
                className="h-[1px] w-full bg-second border-0 block absolute right-0 top-[50%] dark:bg-white anim xl:top-[52%]" />
              {/* animated text */}
              <AnimatedText numbers='03' />
            </div>
          </div>
          <div className="hidden xl:flex max-w-[35%] mt-20">
            <p className="common-para anim dark:text-d-fifth">We are constantly showing our awesome works
              in different kind of industries daily, see what
              we’ve been up to!</p>
          </div>

          {/* <!-- recent projects area --> */}
          <div className="w-full mt-16 md:mt-20 md:grid md:grid-cols-2 xl:grid-cols-1 xl:max-w-[80%] xl:ml-auto xl:mt-10">
            {recentProjects.map((project, index) => <RecentProjectCard key={index} project={project} />)}
          </div>
          {/* <!-- recent projects area --> */}

          <div className="mt-16 xl:max-w-[70%] xl:ml-auto xl:mt-[100px]">
            <Link href="/case-studies" className="btn-first relative group anim overflow-hidden">View all Project
              <img src="/assets/images/angle-right.svg" alt=">"
                className="absolute w-[55px] -bottom-[28px] -left-12 group-hover:left-[85.5%] transition-all duration-300 ease-linear" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default RecentProject