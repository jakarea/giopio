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
      <div className="w-full grid gap-x-8 gap-y-10 md:gap-y-12 lg:grid-cols-2 xl:pt-16 xl:gap-x-12">
        {currentBlogs.map((blog) => (
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