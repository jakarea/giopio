'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const RecentPost = ({ blogData }) => {
  // Slice the blogData array to get the last 3 items
  const recentBlogData = blogData.slice(-3);

  return (
    <>
      <section className="w-full pt-24 pb-20 relative md:pt-28 lg:pt-32 xl:pt-[210px] xl:pb-[188px]">
        <div className="container">
          <div className="text-center mb-10 xl:mb-20 relative">
            <h3 className="text-[80px] font-extrabold text-[#F4F4F4] uppercase absolute left-[50%] translate-x-[-50%] top-[-150%] -z-30 sm:text-[100px] sm:top-[-180%] md:text-[130px] md:top-[-190%] lg:text-[150px] lg:top-[-230%] xl:text-[360px] anim dark:text-[#202135]">
              BLOG
            </h3>
            <h2 className="text-2xl font-bold leading-8 text-second sm:text-3xl md:text-4xl lg:text-6xl xl:text-[100px] anim dark:text-white">
              Recent Post
            </h2>
          </div>
          {/* <!-- recent post area start --> */}

          <div className="w-full grid gap-x-8 gap-y-10 md:gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {recentBlogData.map((blog) => (
              <article className="w-full group bg-white dark:bg-transparent rounded-2xl border border-third/10 dark:border-d-fifth/30 overflow-hidden transition-all duration-300 hover:border-first/30 dark:hover:border-first/30" key={blog.id}>
                <Link href={`/blog/${blog.slug}`} className="block">
                  <div className="relative overflow-hidden">
                    <Image
                      src={blog.feature_thumbnail}
                      alt={blog.title}
                      width="600"
                      height="400"
                      className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                      loading='lazy'
                    />
                    <span className="absolute top-3 left-3 inline-block py-1.5 px-3 bg-first text-white text-xs font-semibold rounded-md">
                      {blog.category}
                    </span>
                  </div>
                </Link>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-4 text-sm text-third dark:text-d-fifth">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-third/50 dark:bg-d-fifth/50"></span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="leading-snug relative z-10">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="block text-xl font-bold text-second group-hover:text-first transition-colors cursor-pointer anim dark:text-white"
                    >
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="text-third leading-relaxed line-clamp-4 dark:text-d-fifth">
                    {blog.excerpt} {blog.content}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-first to-first/70 flex items-center justify-center text-white text-xs font-bold">
                      {blog.author?.charAt(0) || 'A'}
                    </div>
                    <span className="text-sm font-medium text-second dark:text-white">{blog.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentPost;
