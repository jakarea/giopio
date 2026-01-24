import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  try {
    const blogDirectory = path.join(process.cwd(), 'content', 'blog');

    // Check if directory exists
    if (!fs.existsSync(blogDirectory)) {
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Read all markdown files
    const filenames = fs.readdirSync(blogDirectory);
    const markdownFiles = filenames.filter(file => file.endsWith('.md'));

    const blogPosts = markdownFiles.map(filename => {
      const filePath = path.join(blogDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // Store original date for sorting
      const originalDate = data.date ? new Date(data.date) : new Date();

      // Format date
      let formattedDate = '';
      if (data.date) {
        formattedDate = originalDate.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });
      }

      // Extract slug from filename
      const slug = filename.replace('.md', '');

      // Get first paragraph as excerpt if not provided
      let excerpt = data.excerpt || '';
      if (!excerpt) {
        const content = matter(fileContents).content;
        const firstParagraph = content.split('\n\n')[0];
        excerpt = firstParagraph.replace(/[#*`_]/g, '').substring(0, 150) + '...';
      }

      return {
        id: data.id || Math.random(),
        title: data.title || '',
        slug: slug,
        category: data.category || '',
        readTime: data.readTime || '5 min read',
        excerpt: excerpt,
        content: data.content || '',
        feature_thumbnail: data.feature_thumbnail || '/assets/images/blogs/blog-details.webp',
        author: data.author || 'Giopio Team',
        date: formattedDate,
        originalDate: originalDate, // Store for sorting
        keywords: data.keywords || [],
      };
    });

    // Sort by date (newest first)
    blogPosts.sort((a, b) => {
      return b.originalDate - a.originalDate;
    });

    return new Response(JSON.stringify(blogPosts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600', // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error('Error reading blog posts:', error);
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
