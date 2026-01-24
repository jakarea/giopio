# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GIOPIO is a Next.js 14 web design and development agency website using the App Router architecture. The project is data-driven with JSON content management for structured data and Markdown files for blog content, Tailwind CSS styling, and includes email integration, blog, career listings, case studies, and e-commerce features.

## Development Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
npm run analyze  # Build with bundle analysis (ANALYZE=true next build)
```

## Architecture

### Directory Structure

- **`src/app/`** - Next.js App Router pages and layouts
  - `about/`, `about-us/`, `blog/`, `career/`, `case-studies/`, `contact/`, `ecommerce/`, `shopify/`, `shopify-component/` - Page routes
  - `components/` - Shared/reusable components (Header, Footer, Navbar, Forms, etc.)
  - `home-components/` - Home page specific components (Hero, sections, etc.)
  - `api/` - API routes for contact, subscribe, ecommerce, blogs, and sitemap
  - `layout.js` - Root layout with fonts, GTM, Facebook Pixel, and global components
- **`data/`** - JSON content management for structured data
  - `blog/` - Blog metadata (main content in `/content/blog/*.md`)
  - `career/` - Job listings
  - `case-study/` - Case study content
  - `ecommerce/` - E-commerce data
  - `faq/` - FAQ data by page
  - `info/` - Company profile and contact details
  - `meta/` - SEO metadata per page
  - `navbar/` - Navigation items
  - `project/`, `services/`, `team/` - Other content sections
- **`content/blog/`** - Markdown blog post files with frontmatter
- **`public/`** - Static assets (images, favicon, etc.)

### Content Management

The project uses a hybrid content management approach:

**JSON Data (`/data/`)**: Structured content for pages, components, and configurations
- `blog/items.js` - Blog metadata (actual blog posts are in `/content/blog/*.md`)
- `career/list.json` - Career listings with full job details
- `case-study/*.json` - Individual case study data
- `faq/*.json` - FAQ items organized by page
- `meta/*.json` - SEO metadata (Open Graph, Twitter Cards, canonical URLs)
- `navbar/items.json` - Navigation menu items
- `info/details.json` - Contact info, social media, company details

**Markdown Files (`/content/blog/*.md`)**: Blog posts with YAML frontmatter
- Required frontmatter fields: `title`, `slug`, `category`, `date`, `feature_thumbnail`
- Optional fields: `readTime`, `author`, `excerpt`, `keywords`, `description`
- Blog posts are automatically parsed by `gray-matter` and served via API routes

When adding new pages that need SEO, add metadata JSON to `data/meta/` following the existing pattern with Open Graph tags, Twitter Cards, and Dutch locale alternates (`nl_NL`).

### Styling

- **Tailwind CSS** with custom theme colors: primary `#FF9040` (orange), secondary `#26404C` (deep blue)
- **Dark mode only** - The site forces dark mode via `className="dark"` on `<html>` and localStorage initialization
- Custom background patterns defined in `tailwind.config.js`: `nav-drop`, `main-body`, `header-top`, `hero-large`, etc.
- Custom animations: `scaleUp` keyframe animation
- Custom shadows: `one`, `two`, `three`, `four`, `last`
- Custom colors: `first` (#FF9040), `second` (#26404C), `deep`, `orange`, `sonali`, `menu`

### API Routes

All API routes use the Next.js 14 App Router pattern in `src/app/api/*/route.js`:

- **Contact API** (`api/contact/route.js`) - Contact form submissions via Nodemailer using Gmail
  - Requires environment variables: `EMAIL_USER`, `EMAIL_PASS`, `TO_EMAIL`
- **Subscribe API** (`api/subscribe/route.js`) - Newsletter subscriptions
- **Ecommerce API** (`api/ecommerce/route.js`) - E-commerce functionality
- **Blogs API** (`api/blogs/route.js`) - Serves blog posts from `/content/blog/*.md` markdown files
  - Parses frontmatter with `gray-matter`
  - Auto-generates excerpts from content if not provided
  - Sorts by date (newest first)
  - Returns JSON with all blog metadata
- **Sitemap API** (`api/sitemap/route.js`) - Dynamic XML sitemap generation
  - Includes static pages, blog posts, and career listings
  - Auto-updates based on markdown files and JSON data

### Dynamic Routes

- **Blog posts**: `blog/[slug]` - Reads from `/content/blog/{slug}.md` markdown files
  - Uses `gray-matter` to parse frontmatter and content
  - Sections content by H2 (##) headings for structured rendering
- **Careers**: `career/[careerSlug]` - Uses `data/career/list.json` data

### Key Dependencies

- **Next.js 14.2.4** - App Router architecture
- **Nodemailer** - Email form submissions via Gmail
- **gray-matter** - Parse frontmatter from markdown files
- **react-draggable** - Draggable components
- **react-markdown** - Markdown rendering (for blog content)
- **Tailwind CSS 3.4.1** - Styling with custom configuration

### SEO Configuration

Each page imports metadata from `data/meta/` for:
- Open Graph tags (title, description, images, locale)
- Twitter Cards (card type, title, description, image)
- Canonical URLs
- Dutch locale alternates (`nl_NL`)
- Google Tag Manager (GTM-56WHWHNH) and Facebook Pixel (1560540801473045)

The root layout (`src/app/layout.js`) includes:
- Preconnect to GTM and Facebook domains for performance
- GTM noscript fallback
- Both analytics scripts with `afterInteractive` strategy
- Force dark mode script (`beforeInteractive` strategy)

### Environment Variables

Required environment variables (see `.env.local`):
```
EMAIL_USER          # Gmail address for Nodemailer
EMAIL_PASS          # Gmail app password
TO_EMAIL            # Destination email for contact form
NEXT_PUBLIC_SITE_URL # Site URL (default: https://www.giopio.com)
```

### Image Optimization

Next.js Image component configured in `next.config.mjs`:
- Remote patterns for `cdn.pixabay.com`
- Formats: WebP, AVIF
- Custom device sizes and image sizes for optimization
- Minimum cache TTL: 60 seconds

Use `<Image />` from `next/image` for all images to benefit from automatic optimization.

### Fonts

Multiple Google Fonts loaded with display strategies:
- **Poppins** - Preloaded, weights 400-700 (primary font)
- **Manrope** - On-demand, weights 400-700
- **Plus Jakarta Sans** - On-demand, weights 400-700
- **Aclonica**, **Tiro Bangla**, **Onest** - Optional loading (not preloaded)

Font variables are available as Tailwind classes: `font-poppins`, `font-manrope`, `font-plus-jakarta`, etc.

### Performance Optimizations

The project includes several performance optimizations:
- Compression enabled
- Server React optimization enabled
- Custom webpack configuration for client-side bundle optimization
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Cache headers for static assets (1 year), API routes (60s), and static files (1 year)
- DNS prefetch and preconnect for external domains
- Deferred loading of analytics scripts

### Dark Mode Implementation

**Important**: This site is dark-mode only. Dark mode is enforced via:
1. `className="dark"` on the `<html>` element in `src/app/layout.js:65`
2. Inline script with `beforeInteractive` strategy that adds dark class and sets localStorage

When styling components, only use dark mode variants (`dark:` prefix) or assume dark mode is always active. Do not add light mode toggle functionality.

### Adding New Content

**New Blog Post**:
1. Create markdown file in `/content/blog/{slug}.md`
2. Add YAML frontmatter with required fields
3. Blog will automatically appear via `/api/blogs` and sitemap

**New Page with SEO**:
1. Create page in `src/app/{page}/page.js`
2. Create metadata file in `data/meta/{page}/index.json`
3. Import and spread metadata in page: `export const metadata = { ...meta }`

**New Career Listing**:
1. Add to `data/career/list.json` with `slug` field
2. Create career page at `career/[careerSlug]/page.js`

**Navigation Updates**:
- Main navigation: Edit `data/navbar/items.json`
- Navigation logic handled in `src/app/components/Navbar.js`
