import MainForm from '@/app/components/MainForm'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="w-full py-20 relative md:py-24 lg:py-[150px] xl:py-[150px]">
                <div className="container">
                    <div className="text-start">
                        <h2
                            className="text-[28px] font-bold leading-9 text-second md:text-4xl lg:text-[50px] xl:text-[62px] xl:max-w-[60%] xl:leading-[78px] anim dark:text-white mb-[50px] md:mb-[70px] xl:mb-[100px]">
                            Have An Idea? Just Leave
                            a Message!</h2>

                        <Link href="mailto:hello@giopio.com"
                            className="mt-16 text-2xl font-bold leading-8 text-first xl:text-[32px] md:mt-[70px] lg:mt-[80px] xl:mt-[100px]">
                            hello@giopio.com</Link>
                    </div>

                    {/* <!-- contact form start --> */}
                    <div className="w-full mt-20 xl:max-w-[70%] xl:ml-auto xl:-mt-[30px]">
                         <MainForm />
                    </div>
                    {/* <!-- contact form end --> */}
                </div>
            </section>
        </>
    )
}

export default Contact