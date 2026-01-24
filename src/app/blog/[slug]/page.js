import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogContentRenderer from "../components/BlogContentRenderer";
import RecentPost from "../../home-components/RecentPost";

// Function to read markdown file
async function getMarkdownBlog(slug) {
    try {
        const markdownPath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);

        if (!fs.existsSync(markdownPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(markdownPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Parse markdown content to extract sections
        const sections = [];
        const lines = content.split('\n');
        let currentSection = null;
        let currentContent = [];
        let contentIndex = 0;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // Check for H2 (##) or H3 (###) headings
            if (line.startsWith('## ')) {
                // Save previous section
                if (currentSection) {
                    currentSection.content = currentContent.join('\n').trim();
                    sections.push(currentSection);
                }
                // Start new section
                currentSection = {
                    title: line.replace(/^##\s*/, '').replace(/^\d+\.\s*/, '').trim(),
                    content: '',
                    content2: '',
                    content3: ''
                };
                currentContent = [];
            } else if (line.startsWith('### ')) {
                // Subheading - add to content
                currentContent.push(line);
            } else if (line.trim().startsWith('![')) {
                // Image - save to current section
                if (currentSection) {
                    const imageMatch = line.match(/\(([^)]+)\)/);
                    if (imageMatch) {
                        currentSection.image = imageMatch[1];
                    }
                }
            } else if (line.trim().startsWith('>')) {
                // Blockquote - add to content
                currentContent.push(line);
            } else if (line.trim().startsWith('-') || line.trim().startsWith('*')) {
                // List items - add to content
                currentContent.push(line);
            } else if (line.trim() !== '') {
                // Regular content
                currentContent.push(line);
            }
        }

        // Save last section
        if (currentSection) {
            currentSection.content = currentContent.join('\n').trim();
            sections.push(currentSection);
        }

        // Split content into content, content2, content3 based on length or paragraphs
        sections.forEach(section => {
            if (section.content) {
                const paragraphs = section.content.split('\n\n');
                if (paragraphs.length > 0) section.content = paragraphs[0];
                if (paragraphs.length > 1) section.content2 = paragraphs.slice(1).join('\n\n');
            }
        });

        return {
            title: data.title || '',
            slug: data.slug || slug,
            category: data.category || '',
            readTime: data.readTime || '',
            excerpt: data.excerpt || '',
            description: data.description || '',
            keywords: data.keywords || [],
            content: content.split('\n\n')[0] || '',
            feature_thumbnail: data.feature_thumbnail || '/assets/images/blog-details-2.webp',
            author: data.author || 'Giopio Team',
            date: data.date ? new Date(data.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : '',
            sections: sections,
            intro: content.split('\n\n').slice(0, 2).join('\n\n') || ''
        };
    } catch (error) {
        console.error('Error reading markdown:', error);
        return null;
    }
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }) {
    const blog = await getMarkdownBlog(params.slug);

    if (!blog) {
        return {
            title: 'Blog Not Found | Giopio',
        };
    }

    // Read the markdown file to get frontmatter data
    const markdownPath = path.join(process.cwd(), 'content', 'blog', `${params.slug}.md`);
    const fileContents = fs.readFileSync(markdownPath, 'utf8');
    const { data } = matter(fileContents);

    const description = data.description || blog.excerpt || blog.content?.substring(0, 160) || 'Read the latest insights from Giopio experts';
    const keywords = data.keywords || [blog.category, 'Giopio', 'Web Development', 'Shopify'].filter(Boolean);

    return {
        title: `${blog.title} | Giopio Blog`,
        description: description,
        keywords: keywords,
        openGraph: {
            title: blog.title,
            description: description,
            type: 'article',
            publishedTime: blog.date,
            authors: [blog.author || 'Giopio Team'],
            images: [
                {
                    url: blog.feature_thumbnail || '/assets/images/blog-details.webp',
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: description,
            images: [blog.feature_thumbnail || '/assets/images/blog-details.webp'],
        },
        alternates: {
            canonical: `https://giopio.com/blog/${params.slug}`,
        },
    };
}

const BlogDetails = async ({ params }) => {
    // Get blog from markdown
    const blog = await getMarkdownBlog(params.slug);

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
            <BlogContentRenderer blog={blog} />
            {/* Related post */}
            <RecentPost />
        </>
    );
}

export default BlogDetails;
