import Link from "next/link";
import RecentPost from "@/app/home-components/RecentPost";
import blosgPosts from '../../../../data/blog/items.json';
import Image from "next/image";
import meta from "../../../../data/meta/blog/details.json"

export const metadata = {
    ...meta
};

const BlogDetails = ({ params }) => {
    const blog = blosgPosts.find(blog => blog.slug == params.slug);

    if (!blog) {
        return (
            <div className="w-full py-10 md:py-14 xl:py-20 xl:pb-[140px] relative z-40">
                <div className="container">
                    <div className="flex justify-center items-center flex-col gap-y-3 min-h-[80vh]">
                        <svg className="w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF9040">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        <p className="text-sm xl:text-2xl font-medium text-first">
                            Blog not found...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Blog details */}
            <div className="w-full py-10 md:py-14 xl:py-20 xl:pb-[140px] relative z-40">
                <div className="container">
                    <div className="grid gap-y-6 xl:gap-y-0 xl:grid-cols-2 xl:gap-x-[70px]">
                        <div className="txt order-2 xl:order-1">
                            <div className="flex gap-x-5 xl:gap-x-10">
                                <p className="text-sm xl:text-base font-medium text-first">
                                    {blog.category}
                                </p>
                                <p className="text-sm xl:text-base font-medium text-third anim dark:text-d-fifth">
                                    {blog.readTime}
                                </p>
                            </div>

                            <h1 className="text-second font-bold text-2xl leading-9 md:text-3xl lg:text-[36px] md:leading-[50px] xl:text-[42px] xl:leading-[56px] my-5 md:my-8 xl:my-[32px] xl:mt-5 anim dark:text-white">
                                {blog.title}
                            </h1>
                            <p className="text-sm leading-[21px] font-normal text-third anim dark:text-d-fifth font-poppins">
                                {blog.content}
                            </p>

                            <div className="w-full h-[1px] bg-[#26404C33] my-5 md:my-8 xl:my-[32px] anim dark:bg-[#FFFFFF33]"></div>
                            <div className="grid items-center gap-x-8 grid-cols-2 md:grid-cols-3">
                                <h2 className="flex items-center text-base font-semibold tracking-[3%] gap-x-3 text-second anim dark:text-white">
                                    <Image
                                        src="/assets/images/author.webp"
                                        alt="avatar"
                                        width={30}
                                        height={30}
                                        className="w-[30px] h-[30px] rounded-full object-fill"
                                    />
                                    {blog.author}
                                </h2>
                                <h3 className="flex items-center text-base font-semibold tracking-[3%] gap-x-3 text-second anim dark:text-white">
                                    <Image
                                        src="/assets/images/calendar.svg"
                                        alt="calendar"
                                        width={20}
                                        height={20}
                                        className="ltd anim"
                                    />
                                    <Image
                                        src="/assets/images/calendar-w.svg"
                                        alt="calendar"
                                        width={20}
                                        height={20}
                                        className="dtl anim"
                                    />
                                    {blog.date}
                                </h3>

                                <ul className="col-span-2 flex items-center gap-x-6 my-6 justify-center md:col-span-1 xl:my-0">
                                    <li>
                                        <Link href="#">
                                            <Image
                                                src="/assets/images/social/facebook-c.svg"
                                                width={18}
                                                height={18}
                                                className="object-fill"
                                                alt="facebook"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <Image
                                                src="/assets/images/social/twitter-c.svg"
                                                width={18}
                                                height={18}
                                                className="object-fill"
                                                alt="x"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <Image
                                                src="/assets/images/social/linkedin-c.svg"
                                                width={18}
                                                height={18}
                                                className="object-fill"
                                                alt="linkedin"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <Image
                                                src="/assets/images/social/dribble-c.svg"
                                                width={18}
                                                height={18}
                                                className="object-fill"
                                                alt="dribble"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="img order-1 xl:order-2">
                            <Image
                                src={blog.feature_thumbnail ? blog.feature_thumbnail : '/assets/images/blog-details.webp'}
                                alt="blog-details"
                                width={100}
                                height={100}
                                layout="responsive"
                                className="w-full object-fill max-h-[440px]"
                            />
                        </div>
                    </div>

                    {/* Table of contents */}
                    <div className="w-full md:mt-[22px] lg:mt-12 xl:mt-[62px]">
                        <h4 className="font-bold text-second text-lg md:text-2xl lg:text-[28px] anim dark:text-white">
                            Table of <span className="inline-block text-first">Contents</span>
                        </h4>
                        <ul className="mt-6 md:mt-8 xl:mt-[42px] font-poppins gap-y-1 flex flex-col mb-10 md:mb-12 xl:mb-[62px] sm:gap-y-2 md:gap-y-3 xl:gap-y-4">
                            {blog.sections?.map((item, index) => (
                                <li key={index + 1}>
                                    <Link
                                        href={`#section-${index}`}
                                        className="text-sm md:text-base xl:text-[20px] font-semibold leading-[30px] text-second anim dark:text-white"
                                    >
                                        {index + 1}. {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <p className="text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white">
                            {blog.intro}
                        </p>

                        {/* Render more sections dynamically */}
                        {blog.sections?.map((section, index) => (
                            <div key={index} id={`section-${index}`} className="mt-10">
                                <h5 className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-[72px] text-2xl md:text-3xl lg:text-[36px] xl:text-[42px] font-bold text-second mb-4 sm:mb-5 md:mb-7 lg:mb-8 xl:mb-9 anim dark:text-white xl:leading-[55px]">
                                    {index + 1}. {section.title}
                                </h5>
                                <p className="text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white">
                                    {section.content}
                                </p>
                                {section.content2 && (
                                    <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white">
                                        {section.content2}
                                    </p>
                                )}
                                {section.content3 && (
                                    <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white">
                                        {section.content3}
                                    </p>
                                )}
                                {section.content4 && (
                                    <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white">
                                        {section.content4}
                                    </p>
                                )}
                                {section.content5 && (
                                    <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white">
                                        {section.content5}
                                    </p>
                                )}
                                {section.image && (
                                    <div className="mt-8">
                                        <Image
                                            src={section.image}
                                            alt={section.image}
                                            width={1200}
                                            height={300}
                                            quality={100}
                                            layout="responsive"
                                            className="w-full block object-cover" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Related post */}
            <RecentPost blogData={blosgPosts} />
        </>
    );
}

export default BlogDetails;