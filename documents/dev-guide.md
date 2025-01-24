# Development Guide

## Setup Requirements

### Prerequisites
- Node.js (latest LTS version)
- Git
- Text editor of choice

### Project Setup
```bash
git clone https://github.com/[username]/ryanwigley.com.git
cd ryanwigley.com
npm install
```

## Development Workflow

### Local Development
```bash
npm run dev
```
This will start the development server on `http://localhost:3000`

### Build and Deploy
```bash
npm run build  # Build the project
npm run start  # Start the production server
```

## Deployment Pipeline
1. Push changes to Github repository
2. Netlify automatically builds from the main branch
3. Deploy preview is created for pull requests
4. Production deployment occurs after merge to main

## Project Structure
```
ryanwigley.com/
├── components/       # React components
├── pages/           # Next.js pages
├── public/          # Static assets
├── styles/          # Tailwind styles
├── lib/             # Utility functions
├── database/        # Database configurations
└── cache/           # Cache configurations
```

## Code Standards
- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for code formatting
- Component-specific styles should use Tailwind classes

## Testing
```bash
npm run test        # Run tests
npm run test:watch  # Run tests in watch mode
```

## Performance Monitoring
- Netlify analytics dashboard
- Lighthouse scores monitoring
- Performance budgets

## Database Interactions
- Use provided database utilities in `lib/db`
- Always implement error handling
- Follow the caching strategy for data fetching

## Cache Management
- Weekly cache refresh for blog posts
- Cache invalidation on new project additions
- Manual cache clearing available through admin interface