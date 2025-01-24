# Portfolio Website Product Specification

## Description: What is it?
A modern, performance-optimized personal portfolio website for Ryan Wigley at ryanwigley.com, built with NextJS and Tailwind. The site serves as a professional showcase featuring projects, blog content, and tool recommendations, with a particular focus on AI expertise. The site integrates with a Posthaven-hosted blog and includes dynamic project pages with interactive prototypes.

## Problem: What problem is this solving?
Technical product leaders need a professional online presence that demonstrates both their technical capabilities and product thinking. Current portfolio solutions often lack the depth needed to showcase complex technical projects and product cases, or they sacrifice performance for aesthetics.

## Why: How do we know this is a real problem and worth solving?
As a Senior Technical PM at Amazon and founder of multiple technical ventures, having a high-quality portfolio site is crucial for professional networking and thought leadership. The integration of AI tools showcase and blog content will position Ryan as an authority in modern technical product management.

## Success: How do we know if we've solved this problem?
- Site achieves >90 scores across all Netlify analytics metrics
- Successfully integrates blog posts from Posthaven with <2s loading time
- Project showcases load and render dynamic OG images correctly
- Site ranks for relevant SEO terms related to technical product management
- Maintains responsive design across all device sizes
- Zero hydration errors in production

## Audience: Who are we building for?
Primary: Technical recruiters and potential professional collaborators
Secondary: Fellow technical product managers and developers interested in Ryan's insights and tool recommendations
Tertiary: Users interested in learning about technical product management and AI tools

## What: Roughly, what does this look like in the product?
A single-page application with:
1. Header with social links (LinkedIn, Twitter, Email)
2. Project showcase section with:
   - List view: Cover image, title, preview description
   - Expanded view: Full-width cover image with prototype link overlay
   - Detailed content support for multiple sections and embedded images
3. Blog integration showing recent posts from ryanwigley.posthaven.com
4. AI tools showcase section highlighting preferred development and productivity tools
5. Footer with links to blog, contact, and Github source

## How: What is the experiment plan?
Phase 1: Core Site Infrastructure
- Set up NextJS project with Tailwind v4
- Implement SEO optimizations and dynamic OG image generation
- Configure Github repository and Netlify deployment pipeline
- Set up continuous deployment: Cursor > Github > Netlify

Phase 2: Content Integration
- Build Posthaven blog integration (ryanwigley.posthaven.com)
- Create project showcase components
- Implement prototype linking system
- Configure DNS settings to route ryanwigley.com to Netlify deployment

Phase 3: Performance Optimization
- Enable Netlify analytics
- Optimize image loading and hydration
- Implement proper caching strategies
- Final DNS propagation verification

## When: When does it ship and what are the milestones?
[Timeline to be defined based on project constraints]

## Technical Implementation Notes
- NextJS for framework
- MDX and Markdown support for content management
- SEO optimization package including:
  - Sitemap generation
  - robots.txt configuration
  - JSON-LD schema implementation
- Dynamic OG image generation for main and project pages
- Syntax highlighting for code blocks
- Tailwind v4 for styling
- Netlify for hosting and analytics
- Geist font for typography
- Custom integration with Posthaven blog platform