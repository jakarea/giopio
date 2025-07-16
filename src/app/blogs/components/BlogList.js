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
            <div className="w-full xl:col-span-2 sm:justify-center flex">
              <ul className="flex xl:flex-col gap-x-8 items-center lg:gap-y-[50px] xl:gap-y-[66px]">
                <li>
                  <Link href="#" className="block">
                    <Image src="/assets/images/heart-icon.svg" alt="heart" className="w-[14px] lg:w-6 h-5 ltd anim" width="24" height="20" />
                    <Image src="/assets/images/heart-icon-w.svg" alt="heart" className="w-[14px] lg:w-6 anim dtl h-5" width="24" height="20" />
                  </Link>
                  <span className="font-poppins text-[12px] font-normal text-third lg:text-base block lg:mt-4 anim dark:text-d-sixth">{blog.likes}</span>
                </li>
                <li>
                  <Link href="#" className="block">
                    <Image src="/assets/images/comment-icon.svg" alt="comment" className="w-[14px] lg:w-[21px] anim ltd" width="21" height="20" />
                    <Image src="/assets/images/comment-icon-w.svg" alt="comment" className="w-[14px] lg:w-[21px] anim dtl" width="21" height="20" />
                  </Link>
                  <span className="font-poppins text-[12px] font-normal text-third lg:text-base block lg:mt-4 anim dark:text-d-sixth">{blog.comments}</span>
                </li>
                <li>
                  <Link href="#" className="block">
                    <Image
                      src="/assets/images/share-icon.svg"
                      alt="share"
                      width="18"
                      height="20"
                      className="w-[14px] lg:w-[18px] anim ltd h-5"
                      loading='lazy' />
                    <Image src="/assets/images/share-icon-w.svg"
                      width="18"
                      height="20"
                      alt="share"
                      className="w-[14px] lg:w-[18px] anim dtl h-5"
                      loading='lazy' />
                  </Link>
                  <span className="font-poppins text-[12px] font-normal text-third lg:text-base block lg:mt-4 anim dark:text-d-sixth">{blog.shares}</span>
                </li>
              </ul>
            </div>
            <div className="w-full xl:col-span-10 group">
              <span className="inline-flex py-3 px-4 bg-first font-medium text-second text-sm h-[34px] items-center justify-center lg:h-[41px] lg:text-lg lg:px-[26px]">{blog.category}</span>
              <h3>
                <Link href={`/blogs/${blog.slug}`} className="block group-hover:text-first my-6 text-2xl font-semibold text-second xl:text-[32px] xl:font-semibold xl:leading-10 xl:mt-12 xl:mb-10 anim dark:text-white">{blog.title}</Link>
              </h3>
              <p className="common-para anim dark:text-d-fifth">{blog.excerpt}</p>
              <p className="common-para mt-6 flex items-center anim dark:text-d-fifth">
                <Image src="/assets/images/clock-icon.svg" alt="icon" className="mr-3 anim ltd w-4 h-4" width="16" height="16" />
                <Image src="/assets/images/clock-icon-w.svg" alt="icon" className="mr-3 anim dtl w-4 h-4" width="16" height="16" />
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