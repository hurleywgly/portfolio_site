# Projects Portfolio Approach

## Overview
This document outlines the structure and presentation of project case studies on ryanwigley.com.

## Project Display Standards

### Home Page Grid
- Maximum of 6 projects displayed
- Responsive grid layout adjusts based on available projects
- Projects ordered by recent date

### Image Standards
- Cover images: 1200x630px (16:9 ratio)
- Format: WebP with JPEG fallback
- Max file size: 200KB
- Lazy loading enabled for performance
- Alt text required for accessibility

### Project Card (List View)
- Cover image
- Project title (max 60 characters)
- Preview description (max 120 characters)
- Hover state with slight elevation
- Loading state skeleton

### Project Page (Expanded View)
- Hero cover image with prototype link overlay
- Project title
- Full description
- Multiple content sections supported
- In-line images (800px max width)
- Navigation between projects

## Content Structure

### Required Project Fields
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: {
    url: string;
    alt: string;
  };
  prototypeUrl?: string;
  content: ContentBlock[];
  metadata: {
    publishDate: Date;
    lastUpdated: Date;
    tags: string[];
  };
}
```

### Content Sections
- Problem Statement
- Solution Approach
- Technical Implementation
- Results/Impact
- Lessons Learned

## SEO Guidelines

### Meta Tags
```html
<title>{projectTitle} - Ryan Wigley's Portfolio</title>
<meta name="description" content={projectDescription}>
<meta property="og:title" content={projectTitle}>
<meta property="og:description" content={projectDescription}>
<meta property="og:image" content={coverImageUrl}>
```

### URL Structure
- Clean URLs: `/projects/[project-slug]`
- Canonical URLs for each project
- XML sitemap inclusion

### Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Project Title]",
  "author": {
    "@type": "Person",
    "name": "Ryan Wigley"
  },
  "datePublished": "[Publish Date]",
  "dateModified": "[Last Updated]",
  "image": "[Cover Image URL]"
}
```

## Interaction Design
- Smooth transitions between list and expanded views
- Keyboard navigation support
- Mobile-optimized touch interactions
- Loading states and error boundaries

## Analytics Integration
- Page view tracking
- Prototype link click tracking
- Time on page metrics
- Scroll depth tracking