import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://giopio.com';

export async function GET() {
  const blogDirectory = path.join(process.cwd(), 'content', 'blog');

  if (!fs.existsSync(blogDirectory)) {
    return new Response('Blog directory not found', { status: 404 });
  }

  const filenames = fs.readdirSync(blogDirectory);
  const markdownFiles = filenames.filter(file => file.endsWith('.md'));

  const blogPosts = markdownFiles.map(filename => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Extract metadata from frontmatter
    const titleMatch = fileContents.match(/title:\s*"(.+?)"/);
    const descriptionMatch = fileContents.match(/description:\s*"(.+?)"/) || fileContents.match(/excerpt:\s*"(.+?)"/);
    const dateMatch = fileContents.match(/date:\s*(\d{4}-\d{2}-\d{2})/);
    const authorMatch = fileContents.match(/author:\s*"(.+?)"/);
    const categoryMatch = fileContents.match(/category:\s*"(.+?)"/);
    const imageMatch = fileContents.match(/feature_thumbnail:\s*(.+)/);

    const title = titleMatch ? titleMatch[1] : '';
    const description = descriptionMatch ? descriptionMatch[1] : '';
    const pubDate = dateMatch ? new Date(dateMatch[1]).toUTCString() : new Date().toUTCString();
    const author = authorMatch ? authorMatch[1] : 'Giopio Team';
    const category = categoryMatch ? categoryMatch[1] : 'Web Development';
    const image = imageMatch ? imageMatch[1].replace(/"/g, '') : '';

    const slug = filename.replace('.md', '');
    const url = `${SITE_URL}/blog/${slug}`;

    return {
      title,
      description,
      pubDate,
      author,
      category,
      image,
      url,
      guid: url
    };
  })
  .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  const lastBuildDate = new Date().toUTCString();

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Giopio Blog - Web Development & SEO Insights</title>
    <description>Latest insights on web development, SEO, Shopify, and digital growth strategies from Giopio experts.</description>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <managingEditor>contact@giopio.com (Giopio Team)</managingEditor>
    <webMaster>contact@giopio.com (Giopio Team)</webMaster>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <sy:updatePeriod>daily</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <generator>Giopio RSS Generator</generator>
    <image>
      <url>${SITE_URL}/assets/images/logo.svg</url>
      <title>Giopio Blog</title>
      <link>${SITE_URL}/blog</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${blogPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.url}</link>
      <guid isPermaLink="true">${post.guid}</guid>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>
      <category><![CDATA[${post.category}]]></category>
      <pubDate>${post.pubDate}</pubDate>
      ${post.image ? `<media:content url="${SITE_URL}${post.image}" type="image/webp" medium="image"/>
      <media:thumbnail url="${SITE_URL}${post.image}" />` : ''}
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
