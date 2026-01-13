'use client'
import blosgPosts from '../../../../data/blog/items.json';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Pagination from './Pagination';
import Image from 'next/image';

const BlogList = () => {

  const searchParams = useSearchParams();
  const pageNumber = parseInt(searchParams.get('page') ?? "1", 10);
  const itemsPerPage = 4;
  const totalBlogs = blosgPosts.length;

  const maxPage = Math.ceil(totalBlogs / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(pageNumber);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newParams = new URLSearchParams();
      newParams.set('page', currentPage);
      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      window.history.replaceState(null, '', newUrl);
    }
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalBlogs);
  const currentBlogs = blosgPosts.slice(startIndex, endIndex);

  const canGoNext = currentPage < maxPage;
  const canGoPrev = currentPage > 1;

  return (
    <>
      <div className="w-full grid gap-y-[42px] md:gap-y-[60px] lg:gap-y-[80px] xl:gap-y-[100px] lg:grid-cols-2 xl:pt-20 xl:gap-x-[100px]">
        {currentBlogs.map((blog) => (
          <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-y-6 xl:gap-y-0" key={blog.id}>
            <div className="w-full xl:col-span-10 group">
              <span className="inline-flex py-2 px-4 bg-first font-medium text-second text-xs h-[28px] items-center justify-center lg:h-[32px] lg:text-sm lg:px-[20px]">{blog.category}</span>
              <Image src={blog.feature_thumbnail} alt="blog" width="600" height="400" className="w-full mt-4 anim" loading='lazy' />
              <h3>
                <Link href={`/blog/${blog.slug}`} className="block group-hover:text-first my-3 text-lg font-semibold text-second lg:text-xl xl:text-[22px] xl:font-semibold xl:leading-7 xl:mt-6 xl:mb-4 anim dark:text-white">{blog.title}</Link>
              </h3>

              <p className="common-para anim dark:text-d-fifth line-clamp-4">{blog.excerpt} {blog.content}</p>
              <p className="common-para mt-4 flex items-center anim dark:text-d-fifth text-sm">
                <Image src="/assets/images/clock-icon.svg" alt="icon" className="mr-2 anim ltd w-3 h-3" width="12" height="12" />
                <Image src="/assets/images/clock-icon-w.svg" alt="icon" className="mr-2 anim dtl w-3 h-3" width="12" height="12" />
                {blog.readTime}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <Pagination
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
};

export default BlogList;