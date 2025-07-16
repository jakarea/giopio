'use client'
import Link from 'next/link';
import React from 'react';

const RecentPost = ({ blogData }) => {
  // Slice the blogData array to get the last 3 items
  const recentBlogData = blogData.slice(-3);

  return (
    <>
      <section className="w-full pt-24 pb-20 relative md:pt-28 lg:pt-32 xl:pt-[210px] xl:pb-[188px]">
        <div className="container xl:max-w-[1728px]">
          <div className="text-center mb-10 xl:mb-20 relative">
            <h3 className="text-[80px] font-extrabold text-[#F4F4F4] uppercase absolute left-[50%] translate-x-[-50%] top-[-150%] -z-30 sm:text-[100px] sm:top-[-180%] md:text-[130px] md:top-[-190%] lg:text-[150px] lg:top-[-230%] xl:text-[360px] anim dark:text-[#202135]">
              BLOG
            </h3>
            <h2 className="text-2xl font-bold leading-8 text-second sm:text-3xl md:text-4xl lg:text-6xl xl:text-[100px] anim dark:text-white">
              Recent Post
            </h2>
          </div>
          {/* <!-- recent post area start --> */}
          <div className="w-full grid gap-y-[42px] md:gap-y-[60px] lg:gap-y-[80px] xl:gap-y-[100px] lg:grid-cols-2 xl:grid-cols-3 xl:pt-20 xl:gap-x-[100px]">
            {recentBlogData.map((blog) => (
              <div key={blog.id} className="w-full grid grid-cols-1 xl:grid-cols-12 gap-y-6 xl:gap-y-0">
                <div className="w-full xl:col-span-2 sm:justify-center flex">
                  <ul className="flex xl:flex-col gap-x-8 items-center lg:gap-y-[50px] xl:gap-y-[66px]">
                    <li>
                      <Link href="#" className="block">
                        <img
                          src="/assets/images/heart-icon.svg"
                          alt="heart"
                          className="w-[14px] lg:w-6 ltd anim h-5"
                        />
                        <img
                          src="/assets/images/heart-icon-w.svg"
                          alt="heart white"
                          className="w-[14px] lg:w-6 anim dtl h-5"
                        />
                      </Link>
                      <span className="font-poppins text-[12px] font-normal text-third lg:text-base block lg:mt-4 anim dark:text-d-sixth">
                        {blog.likes}
                      </span>
                    </li>
                    <li>
                      <Link href="#" className="block">
                        <img
                          src="/assets/images/comment-icon.svg"
                          alt="comment"
                          width={"100%"} height={"100%"}
                          className="w-[14px] lg:w-[21px] anim ltd"
                        />
                        <img
                          src="/assets/images/comment-icon-w.svg"
                          alt="comment"
                          width={"100%"} height={"100%"}
                          className="w-[14px] lg:w-[21px] anim dtl"
                        />
                      </Link>
                      <span className="font-poppins text-[12px] font-normal text-third lg:text-base block lg:mt-4 anim dark:text-d-sixth">
                        {blog.comments}
                      </span>
                    </li>
                    <li>
                      <Link href="#" className="block">
                        <img
                          src="/assets/images/share-icon.svg"
                          alt="share"
                          className="w-[14px] lg:w-[18px] anim ltd h-5"
                          loading="lazy"
                        />
                        <img
                          src="/assets/images/share-icon-w.svg"
                          alt="share"
                          className="w-[14px] lg:w-[18px] anim dtl h-5"
                          loading="lazy"
                        />
                      </Link>
                      <span className="font-poppins text-[12px] font-normal text-third lg:text-base block lg:mt-4 anim dark:text-d-sixth">
                        {blog.shares}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="w-full xl:col-span-10 group">
                  <span className="inline-flex py-3 px-4 bg-first font-medium text-new text-sm h-[34px] items-center justify-center lg:h-[41px] lg:text-lg lg:px-[26px]">
                    {blog.category}
                  </span> 
                    <Link href={`/blogs/${blog.slug}`} className="block group-hover:text-first my-6 text-xl xl:text-2xl font-semibold text-second xl:text-[32px] xl:font-semibold xl:leading-10 xl:mt-12 xl:mb-10 anim dark:text-white">
                      {blog.title}
                    </Link> 
                  <p className="common-para anim dark:text-d-fifth">
                    {blog.excerpt}
                  </p>
                  <p className="common-para mt-6 flex items-center anim dark:text-d-fifth">
                    <img
                      src="/assets/images/clock-icon.svg"
                      alt="clock"
                      className="mr-3 anim ltd  w-4 h-4"
                    />
                    <img
                      src="/assets/images/clock-icon-w.svg"
                      alt="clock" 
                      className="mr-3 anim dtl w-4 h-4"
                    />
                    {blog.readTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentPost;
