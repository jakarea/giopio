# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GIOPIO is a Next.js 14 web design and development agency website using the App Router architecture. The project is data-driven with JSON content management, Tailwind CSS styling, and includes email integration, blog, career listings, case studies, and e-commerce features.

## Development Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Directory Structure

- **`src/app/`** - Next.js App Router pages and layouts
  - `about/`, `blogs/`, `career/`, `case-studies/`, `contact/`, `ecommerce/` - Page routes
  - `components/` - Shared/reusable components
  - `home-components/` - Home page specific components
  - `shopify-component/` - Shopify-related pages
  - `api/` - API routes (contact, subscribe, ecommerce)
- **`data/`** - JSON content management for blogs, careers, FAQs, metadata, navigation
- **`public/`** - Static assets

### Content Management

Content is stored as JSON files in `/data/` with separate directories:
- `blog/` - Blog posts and metadata
- `career/` - Job listings and FAQs
- `case-study/` - Case study content
- `ecommerce/` - E-commerce data
- `faq/` - FAQ data by page
- `meta/` - SEO metadata per page
- `navbar/` - Navigation items

When adding new pages that need SEO, add metadata JSON to `data/meta/` following the existing pattern.

### Styling

- **Tailwind CSS** with custom theme colors: primary `#FF9040` (orange), secondary `#26404C` (deep blue)
- **Dark mode** enabled - use `dark:` prefix for dark mode styles
- Conditional styling classes: `ltd` (light mode), `dtl` (dark mode)
- Custom animations defined in `tailwind.config.js`

### API Routes

- **Contact API** (`api/contact/route.js`) - Contact form submissions via Nodemailer
- **Subscribe API** (`api/subscribe/route.js`) - Newsletter subscriptions
- **Ecommerce API** (`api/ecommerce/route.js`) - E-commerce functionality

### Dynamic Routes

- Blog posts: `blogs/[slug]` - uses `data/blog/` JSON
- Careers: `career/[careerSlug]` - uses `data/career/` JSON

### Key Dependencies

- **Next.js 14.2.4** - App Router architecture
- **Nodemailer** - Email form submissions
- **react-draggable** - Draggable components
- **Tailwind CSS 3.4.1** - Styling

### SEO Configuration

Each page imports metadata from `data/meta/` for:
- Open Graph tags
- Twitter Cards
- Canonical URLs
- Dutch locale alternates (`nl_NL`)
- Google Tag Manager and Facebook Pixel integration

### Image Optimization

Next.js Image component configured with Pixabay remote patterns. Use `<Image />` for all images.

### Fonts

Multiple Google Fonts loaded with display swap: Poppins, Plus Jakarta Sans, Outfit, Manrope, Inter, DM Sans.
