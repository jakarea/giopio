'use client'
import { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ImageLightbox from "./ImageLightbox";
import BlogSchema from "./BlogSchema";

const BlogContentRenderer = ({ blog }) => {

  useEffect(() => {
    // Add click handlers to all images after render
    const addImageClickHandlers = () => {
      // Handle all images in the content, but exclude header, nav, logos, and icons
      const allImages = document.querySelectorAll('img[src^="/assets"], img[src^="/content"], .prose img, [id^="section-"] img');

      allImages.forEach(img => {
        // Skip if already processed
        if (img.hasAttribute('data-lightbox-enabled')) {
          return;
        }

        // Exclude certain images from lightbox
        const excludeSelectors = [
          'img[alt*="logo" i]',
          'img[alt*="Logo" i]',
          'img[alt*="icon" i]',
          'header img',
          'nav img',
          '.navbar-brand img',
          '.ltd img',
          '.dtl img',
          'img[src*="/favicon"]',
          'img[src*="/social/"]',
          'img[src*="/calendar"]',
          'img[src*="/author"]',
          'img[src*="header-bg"]',
          'img[src*="bg-float"]'
        ];

        // Check if image should be excluded
        const shouldExclude = excludeSelectors.some(selector => {
          try {
            if (selector.startsWith('img[') || selector.startsWith('header') || selector.startsWith('nav') || selector.startsWith('.')) {
              return img.matches(selector) || img.closest(selector);
            }
            return img.matches(selector);
          } catch (e) {
            return false;
          }
        });

        if (shouldExclude) {
          img.setAttribute('data-lightbox-excluded', 'true');
          return;
        }

        // Only enable lightbox for blog content images
        const isBlogImage = img.closest('.prose') || img.closest('[id^="section-"]') || img.closest('.txt');

        if (!isBlogImage) {
          img.setAttribute('data-lightbox-excluded', 'true');
          return;
        }

        img.setAttribute('data-lightbox-enabled', 'true');
        img.style.cursor = 'pointer';

        // Add hover effect
        img.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';

        img.addEventListener('mouseenter', () => {
          img.style.transform = 'scale(1.02)';
          img.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });

        img.addEventListener('mouseleave', () => {
          img.style.transform = 'scale(1)';
          img.style.boxShadow = 'none';
        });

        img.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const src = img.getAttribute('src');
          if (src) {
            // Dispatch custom event for lightbox
            window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src } }));
          }
        });
      });
    };

    // Initial setup
    const timer = setTimeout(addImageClickHandlers, 100);

    // Set up mutation observer to handle dynamic content
    const observer = new MutationObserver(() => {
      addImageClickHandlers();
    });

    const observeTarget = document.querySelector('main, [role="main"]') || document.body;
    observer.observe(observeTarget, {
      childList: true,
      subtree: true
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [blog]);

  return (
    <>
      <BlogSchema blog={blog} />
      <ImageLightbox>
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
              <div className="text-sm leading-[21px] font-normal text-third anim dark:text-d-fifth font-poppins prose prose-sm max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
              </div>

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

            <div className="text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white prose prose-sm max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.intro}</ReactMarkdown>
            </div>

            {/* Render more sections dynamically */}
            {blog.sections?.map((section, index) => (
              <div key={index} id={`section-${index}`} className="mt-10">
                <h5 className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-[72px] text-2xl md:text-3xl lg:text-[36px] xl:text-[42px] font-bold text-second mb-4 sm:mb-5 md:mb-7 lg:mb-8 xl:mb-9 anim dark:text-white xl:leading-[55px]">
                  {index + 1}. {section.title}
                </h5>
                <div className="text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white prose prose-sm max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.content}</ReactMarkdown>
                </div>
                {section.content2 && (
                  <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white prose prose-sm max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.content2}</ReactMarkdown>
                  </div>
                )}
                {section.content3 && (
                  <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white prose prose-sm max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.content3}</ReactMarkdown>
                  </div>
                )}
                {section.content4 && (
                  <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white prose prose-sm max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.content4}</ReactMarkdown>
                  </div>
                )}
                {section.content5 && (
                  <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-sm leading-6 xl:leading-[30px] xl:text-lg font-normal text-second anim dark:text-white prose prose-sm max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.content5}</ReactMarkdown>
                  </div>
                )}
                {section.image && (
                  <div className="mt-8">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={1200}
                      height={300}
                      quality={100}
                      className="w-full block object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ImageLightbox>
    </>
  );
};

export default BlogContentRenderer;
