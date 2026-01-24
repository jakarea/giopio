import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://giopio.com';

// Static pages with SEO metadata
const staticPages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.9 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/book-a-call', changefreq: 'monthly', priority: 0.8 },
  { url: '/career', changefreq: 'weekly', priority: 0.7 },
  { url: '/case-studies', changefreq: 'weekly', priority: 0.9 },
  { url: '/case-studies/daily-deals-discounts', changefreq: 'monthly', priority: 0.8 },
  { url: '/case-studies/go-next-level-agency', changefreq: 'monthly', priority: 0.8 },
  { url: '/case-studies/interest-navigator', changefreq: 'monthly', priority: 0.8 },
  { url: '/case-studies/oak-food', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/ecommerce', changefreq: 'weekly', priority: 0.9 },
  { url: '/revenue', changefreq: 'monthly', priority: 0.8 },
  { url: '/result', changefreq: 'monthly', priority: 0.8 },
  { url: '/review', changefreq: 'weekly', priority: 0.9 },
  { url: '/shopify', changefreq: 'weekly', priority: 0.9 },
  { url: '/talk', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 }
];

// Get all blog posts from markdown files
function getAllBlogPosts() {
  const blogDirectory = path.join(process.cwd(), 'content', 'blog');

  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(blogDirectory);
  const markdownFiles = filenames.filter(file => file.endsWith('.md'));

  return markdownFiles.map(filename => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Extract date from frontmatter using regex
    const dateMatch = fileContents.match(/date:\s*(\d{4}-\d{2}-\d{2})/);
    const lastmod = dateMatch ? new Date(dateMatch[1]) : new Date();

    return {
      slug: filename.replace('.md', ''),
      lastmod: lastmod.toISOString()
    };
  });
}

// Get career posts
function getCareerPosts() {
  const careerPath = path.join(process.cwd(), 'data', 'career', 'list.json');

  if (!fs.existsSync(careerPath)) {
    return [];
  }

  try {
    const careerData = JSON.parse(fs.readFileSync(careerPath, 'utf8'));
    return careerData.map(job => ({
      slug: job.slug,
      lastmod: new Date().toISOString()
    }));
  } catch (error) {
    return [];
  }
}

// Generate sitemap XML
function generateSitemap() {
  const blogPosts = getAllBlogPosts();
  const careerPosts = getCareerPosts();
  const currentDate = new Date().toISOString();

  const urls = [];

  // Add static pages
  staticPages.forEach(page => {
    urls.push({
      loc: `${BASE_URL}${page.url}`,
      lastmod: currentDate,
      changefreq: page.changefreq,
      priority: page.priority
    });
  });

  // Add blog posts
  blogPosts.forEach(post => {
    urls.push({
      loc: `${BASE_URL}/blog/${post.slug}`,
      lastmod: post.lastmod,
      changefreq: 'weekly',
      priority: 0.7
    });
  });

  // Add career pages
  careerPosts.forEach(job => {
    urls.push({
      loc: `${BASE_URL}/career/${job.slug}`,
      lastmod: job.lastmod,
      changefreq: 'weekly',
      priority: 0.6
    });
  });

  // Build XML
  const xmlUrls = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${xmlUrls}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSitemap();

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
