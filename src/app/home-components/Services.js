import AnimatedText from '@/app/components/AnimatedText'
import Link from 'next/link'
import React from 'react'
import ServiceCard from './ServiceCard'
import services from '../../../data/services/list'

const Services = () => {
  return (
    <>
      <section className="w-full pt-20 relative md:pt-24 lg:pt-32 xl:pt-[210px]">
        <div className="container">
          <div className="flex justify-between items-center relative">
            <h2 className="absolute left-0 -top-[80%] -z-30 bg-title-2 xl:left-[-20%]" id="animated-wave">Services</h2>
            <h3 className="text-lg font-medium text-first leading-[20px] sm:text-[20px] md:text-[24px] xl:text-[42px]">What We
              Do</h3>
            <div className="flex max-w-[70%] min-w-[65%] relative text-right justify-end pr-4 xl:max-w-[78%] xl:min-w-[78%]">
              <hr
                className="h-[1px] w-full bg-second border-0 block absolute right-0 top-[50%] dark:bg-white anim xl:top-[62%]" />
              {/* animated text */}
              <AnimatedText numbers='02' />
            </div>
          </div>

          {/* <!-- services area start --> */}
          <div
            className="w-full pt-4 sm:pt-6 md:pt-16 lg:pt-[70px] xl:pt-[150px] md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-[30px]">
            {/* <!-- service card --> */}
            {services.map((service, index) => <ServiceCard key={index} service={service} />)}
            {/* <!-- service card --> */}
          </div>
          {/* <!-- services area end --> */}
        </div>
      </section>
    </>
  )
}

export default Services