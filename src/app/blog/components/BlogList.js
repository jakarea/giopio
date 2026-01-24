'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Pagination from './Pagination';
import Image from 'next/image';

const BlogList = ({ searchTerm = '' }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const searchParams = useSearchParams();
  const itemsPerPage = 20;

  // Fetch blog posts from API route
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        setBlogPosts(data);

        // Set initial page from URL after data loads
        const pageNumber = parseInt(searchParams.get('page')) || 1;
        if (pageNumber > 0) {
          setCurrentPage(pageNumber);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [searchParams]);

  // Reset to page 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Update URL when currentPage changes
  useEffect(() => {
    if (typeof window !== 'undefined' && !loading) {
      const newParams = new URLSearchParams();
      newParams.set('page', currentPage);
      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      window.history.replaceState(null, '', newUrl);
    }
  }, [currentPage, loading]);

  // Filter blog posts based on search term
  const filteredBlogs = blogPosts.filter(blog => {
    if (!searchTerm) return true;

    const searchLower = searchTerm.toLowerCase();
    return (
      blog.title?.toLowerCase().includes(searchLower) ||
      blog.excerpt?.toLowerCase().includes(searchLower) ||
      blog.category?.toLowerCase().includes(searchLower) ||
      blog.keywords?.some(keyword => keyword.toLowerCase().includes(searchLower))
    );
  });

  // Early return if loading (after all hooks are declared)
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <p>Loading...</p>
      </div>
    );
  }

  const totalBlogs = filteredBlogs.length;
  const maxPage = Math.ceil(totalBlogs / itemsPerPage);

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
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Show "no results" message if search returns no matches
  if (searchTerm && filteredBlogs.length === 0) {
    return (
      <div className="w-full text-center py-20">
        <div className="max-w-md mx-auto">
          <svg
            className="w-20 h-20 mx-auto mb-4 text-third/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h3 className="text-2xl font-bold text-second mb-2 anim dark:text-white">
            No articles found
          </h3>
          <p className="text-third dark:text-d-fifth">
            Try adjusting your search terms or browse all articles below.
          </p>
        </div>
      </div>
    );
  }

  const canGoNext = currentPage < maxPage;
  const canGoPrev = currentPage > 1;

  return (
    <>
      {/* Results count */}
      {searchTerm && (
        <div className="mb-6 text-sm text-third dark:text-d-fifth">
          Found {totalBlogs} article{totalBlogs !== 1 ? 's' : ''} matching your search
        </div>
      )}

      <div className="w-full grid gap-x-8 gap-y-10 md:gap-y-12 lg:grid-cols-2 xl:pt-16 xl:gap-x-12">
        {currentBlogs.map((blog) => (
          <article className="w-full group bg-white dark:bg-transparent rounded-2xl border border-third/10 dark:border-d-fifth/30 overflow-hidden transition-all duration-300 hover:border-first/30 dark:hover:border-first/30" key={blog.slug}>
            <Link href={`/blog/${blog.slug}`} className="block">
              <div className="relative overflow-hidden">
                <Image
                  src={blog.feature_thumbnail}
                  alt={blog.title}
                  width={600}
                  height={400}
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
                {blog.excerpt}
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
