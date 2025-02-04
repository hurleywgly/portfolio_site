import { Project, WorkExperience, Tool, Essay } from "./types"

export const projects: Project[] = [
  {
    id: "marketplace",
    title: "Music Marketplace",
    description: "Rights management technology for DJ mixes and remixes.",
    coverImage: "/mixbank-demo-ss.png?height=630&width=1200",
    prototypeUrl: "https://super-frangollo-031a70.netlify.app/",
    problemStatement: "In 2014, the music industry faced a critical challenge: there was no way to legally distribute and monetize derivative works like DJ mixes and remixes on major streaming platforms. Content creators couldn't legitimately share their work, rights holders couldn't track usage of their intellectual property, and streaming platforms couldn't tap into this growing content category. The industry needed a solution that could identify copyrighted content within derivative works, manage licensing, and distribute royalties – all at scale.",
    myRole: "As product owner from concept through acquisition, I led the development of MixBANK, a first-of-its-kind B2B2C marketplace for licensing and distributing derivative music content. The challenge was multifaceted: we needed to create entirely new workflows for content identification, build a scalable licensing system, and develop automated distribution pipelines – all while managing complex stakeholder relationships across the music industry. \n\n Starting with a small team of four developers, I wore multiple hats as sprint manager, engineering ops lead, and product manager. As the platform evolved, I scaled the team to 30+ members, including 10 developers, 2 QA engineers, and 11 content operations specialists. Throughout this growth, I maintained ownership of product strategy, stakeholder management, and technical direction.",
    technicalInnovation: "The core of our solution was MixSCAN, our proprietary audio fingerprinting and rights attribution technology. We faced unique technical challenges: DJ mixes featured overlapping songs, tempo/pitch changes, and audio effects that made traditional fingerprinting insufficient. Our solution combined advanced audio fingerprinting with textual data disambiguation, pushing identification accuracy from 15% to an industry-leading 70%. \n\n We built a robust cloud infrastructure on AWS, using MongoDB with Redis for high-throughput content processing and RDS with Postgres for reliable royalty tracking. The system could process an hour of audio in under 10 minutes, scaling both vertically and horizontally to handle millions of tracks. To ensure continuous improvement, we developed a TestSuite with 500+ benchmark content pieces, allowing us to experiment with various approaches including NLP techniques and machine learning models.",
    strategicExecution: 'Our development journey followed three key phases: \n\n __2014-2016:__ We focused on perfecting our licensing and audio fingerprinting technology. Working closely with major labels (Universal, Sony, Warner) and publishers, we achieved coverage of over 100M tracks – representing 90% of the world\'s licensed discography. \n\n __2016-2018:__ We launched partnerships with Apple Music and Spotify, helping Apple create an entirely new "DJs & Mixes" genre category. This required solving complex integration challenges, from metadata formatting to automated content delivery pipelines. We implemented support for both manual CSV imports and DDEX XML Schema, accommodating organizations of all sizes. \n\n __2018-2020:__ We scaled the platform to process $2MM in monthly royalties while maintaining a 1.3% discrepancy rate and 99% fraud detection rate. This growth phase required careful balance of technical debt against market pressures, leading to successful acquisition by PEX in 2020.',
    stakeholderManagement: "Success required coordinating across multiple stakeholder groups:\n\n Maintained monthly in-person meetings with major labels and publishers in NYC • Collaborated with 25 influential DJs for feature development and testing • Conducted bi-monthly sessions with independent labels for pipeline refinement • Worked directly with Apple and Spotify on content delivery optimization  • Led weekly executive standups and regular board presentations • Managed daily engineering operations with remote technical teams.",
    impactAndLegacy: "The platform revolutionized how derivative music content is monetized and distributed: \n\n Created new revenue streams for content creators and rights holders • Built a network of 20K+ DJ talents •Processed millions of hours of audio content • Established industry standards for rights management of derivative works • Technology now powers copyright protection across major social media platforms worldwide",
    keyLearnings: "This journey taught me invaluable lessons about leading complex technical products: \n\n Building innovative solutions requires balancing stakeholder needs with technical vision • Success in nascent markets demands systematic, data-driven decision making • Strong relationships across technical and business stakeholders are crucial • Protecting engineering teams while maintaining progress requires careful management • Clear product vision and prioritization processes are essential for healthy company culture \n\n The MixBANK story demonstrates how technical innovation, strategic product management, and careful stakeholder coordination can solve complex industry challenges while creating significant business value."
  },
  {
    id: "apiinfra",
    title: "Enterprise API Rebuild",
    description: "Scaling a key piece of Amazon infrastructure.",
    coverImage: "/api-infra-before-after.png?height=630&width=1200",
    prototypeUrl: "https://customer-activation-simulator-ryanwigley522.replit.app/",
    problemStatement: "Our subscription management platform experienced significant growth, evolving from serving early adopters to becoming a major enterprise solution. The legacy monolithic architecture struggled to scale with this growth, resulting in elevated error rates, challenging partner integrations, and reduced development velocity. As customer adoption increased, these technical limitations began impacting business growth and partner satisfaction.",
    myRole: "As technical product leader, I spearheaded the initiative to modernize our API infrastructure. I led cross-functional engineering teams through the architectural transformation, managing stakeholder alignment across engineering, business, and operations. My responsibilities included developing the migration strategy, coordinating with technical program managers and integration specialists, and maintaining executive alignment throughout the project.",
    processOverview: "The transformation followed a strategic, phased approach. Initially, we conducted a thorough analysis of the existing architecture, uncovering various custom integrations that had accumulated over time. We developed a migration strategy that balanced maintaining existing operations while building the new architecture. \n\n A significant challenge was managing the transition period - supporting active partners on the legacy system while developing the new platform. This required careful resource allocation and prioritization across maintenance and development efforts. \n\n The migration followed a methodical approach: starting with pilot partners for initial validation, expanding to early adopters for process refinement, and finally executing a broad rollout. Throughout this process, we maintained close coordination with technical account managers and integration partners to ensure smooth transitions.",
    technologyHighlights: "We implemented a modern service-oriented architecture, decomposing the monolith into focused services handling distinct business capabilities: \n\n Modular service architecture for subscriptions and billing • Enhanced API gateway with robust authentication • Support for asynchronous operations • Improved data management with dedicated service databases • Flexible integration patterns supporting diverse partner requirements",
    impact: "The transformation delivered substantial improvements across key metrics: \n\nSignificant reduction in transaction processing times • Dramatic decrease in error rates • Streamlined partner onboarding process • Accelerated feature delivery • Reduced customer support volume • Enhanced subscription lifecycle automation",
    customerAndStakeholderFeedback: "Partners reported increased satisfaction with the platform's reliability and performance. The new architecture enabled improved automation capabilities and provided a better technical integration experience. We observed a notable reduction in support incidents and strong adoption of new platform capabilities.",
    lessonsLearned: "The project revealed valuable insights about large-scale system transformation. While the new API improved technical efficiency, we learned important lessons about scaling our onboarding processes. Early discovery of partner requirements proved crucial, as integration complexity often extended beyond initial assessments. \n\n Success hinged on maintaining strong communication channels with stakeholders and carefully orchestrating migrations to minimize business impact. The transformation elevated our technical standards and improved our ability to serve enterprise customers. It demonstrated that complex architectural transformations can be executed successfully while maintaining business continuity through careful planning, clear communication, and strategic technical leadership.",
  },
  {
    id: "music-charts",
    title: "Performance Metrics Dashboard",
    description: "Real-time analytics platform for music performance tracking",
    coverImage: "/MusicCharts-dashboard.png?height=630&width=1200",
    prototypeUrl: "https://ejkkikxkwskjgv2d.vercel.app/",
    problemStatement: "Empire Distribution, known for launching the careers of artists like Kendrick Lamar and Cardi B, faced a critical turning point in their data operations. Their legacy analytics platform had become a bottleneck, with teams waiting up to an hour for basic report filters to load. Each new user or data ingestion task further degraded system performance, creating a ripple effect across the organization. The challenge wasn't just technical – it was affecting Empire's ability to make timely business decisions and serve their artists effectively.",
    myRole: "As the technical product lead, I stepped into a three-month engagement tasked with modernizing Empire's analytics infrastructure. Working alongside a team of five developers, finance specialists, and project managers, I quickly identified that success would require more than just technical solutions – it demanded a careful balance of innovation and operational stability. \n\n The existing monolithic architecture needed a complete overhaul, but we couldn't disrupt daily operations. I designed a strategy that would introduce modern technology while respecting the complexities of Empire's established workflows. This meant building a React frontend and Ruby on Rails backend that could seamlessly integrate with their legacy systems while laying groundwork for future scalability.",
    technicalInnovation: "We approached the rebuild methodically, focusing on three critical areas. First, we tackled the performance issues by implementing a new data architecture using MongoDB and SQLite. This immediately reduced report generation time from over an hour to under five minutes. Next, we automated the data ingestion process, eliminating the manual intervention that had been consuming valuable team resources. \n\n The most challenging aspect was integrating with multiple streaming platforms while maintaining system performance. We built efficient data mapping workflows for services like Spotify, Apple Music, and YouTube, enhancing Empire's existing trend detection system to provide more actionable insights. The new architecture eliminated the performance degradation issues that had plagued the old system, allowing concurrent users to work without impacting each other.",
    implementationAndImpact: "Worked closely with industry analysts to identify key metrics and visualization needs. Iteratively improved based on user feedback.",
    lookingForward: "This project demonstrated how thoughtful technical architecture combined with strategic implementation could transform a critical business system. We not only solved immediate operational challenges but established a foundation for Empire's future growth. The platform's API-first design and scalable architecture positioned Empire to continue evolving their analytics capabilities as industry needs change. \n\n The success of this transformation came from balancing technical excellence with business realities – understanding that the best solutions are those that not only solve today's problems but enable tomorrow's opportunities. Through careful planning and execution, we turned what could have been a disruptive overhaul into a smooth evolution of Empire's technical capabilities. ",
    keyLearnings: "The Empire Analytics project reinforced crucial lessons about modernizing legacy systems in fast-moving industries. Building clear boundaries between old and new architectures proved essential for managing complexity, while our standalone component approach enabled rapid testing and iteration. The dramatic performance improvements we achieved came primarily from addressing database bottlenecks early – a reminder that in data-heavy applications, the foundation must be solid before adding features. \n\n Perhaps the most valuable insight was about managing change in established organizations. By involving operational teams early and demonstrating concrete benefits quickly, we built the trust needed to implement broader changes. Starting with core workflows that delivered immediate value helped secure buy-in for more ambitious improvements. \n\n This experience showed that successful technical transformation isn't just about building new systems – it's about understanding how technology, business processes, and people intersect. In the end, creating flexible systems that can evolve with changing needs proved more valuable than pursuing feature completeness from the start."
  },
  {
    id: "bookshelf",
    title: "Acquired Bookshelf",
    description: "AI assisted bookshelf for the Acquired podcast.",
    coverImage: "/acquired-bookshelf.png?height=630&width=1200",
    prototypeUrl: "https://acquired-bookshelf.vercel.app/",
    problemStatement: "The Acquired podcast, known for its deep research and comprehensive analysis of company stories, frequently references valuable books and resources throughout its episodes. However, listeners faced a significant challenge: these recommendations were scattered across hundreds of episodes, making it difficult to discover and access these learning materials efficiently. There was no central repository where listeners could explore all referenced resources, limiting the educational impact of the podcast's rich content.",
    myRole: "As the sole developer of this project, I took complete ownership from conception to deployment. This included initial planning, technical architecture decisions, development, and ongoing maintenance. The project showcased my ability to identify community needs, leverage modern development tools, and ship valuable features efficiently.",
    processOverview: "I implemented a rapid development approach leveraging AI-powered development tools for maximum efficiency: \n\n **1. Frontend Development (MVP)** \n\n Used V0 to rapidly scaffold the initial Next.js website structure • Leveraged Cursor AI-powered IDE for efficient code completion and refinement • Created responsive UI components with TailwindCSS • Implemented an intuitive horizontal scrolling interface for book discovery \n\n **2. Data Pipeline Implementation** \n\n Developed a manual data management system using JSON • Integrated with Open Library API for book metadata enrichment • Built robust fallback systems for missing data \n\n **3. Testing & Deployment:** \n\n Set up automated testing workflows • Deployed to Vercel for reliable hosting • Implemented monitoring for API usage and performance",
    technologyHighlights: "**Frontend:** Next.js with TypeScript for type safety and improved development experiencene • **Styling:** TailwindCSS for rapid UI development and consistent design • **Data Management:** Static site generation with JSON for optimal performance • **API Integration:** Open Library API with rate limiting and caching • **Deployment:** Vercel for automated deployment and hosting",
    impact: "The project has demonstrated significant impact since launch: \n\n Attracted over 10,000 visitors in the first two months • Created a searchable database of podcast-referenced books • Contributed a valuable resource to the Acquired podcast community • Successfully automated the resource discovery process for listeners",
    lessonsLearned: "__AI-Powered Development:__ Strategic use of V0 for scaffolding and Cursor IDE for development significantly accelerated project delivery while maintaining code quality. • __Community Focus:__ Understanding and addressing specific community needs leads to higher user engagement. • __Technical Architecture:__ Choosing a modern, maintainable tech stack enables quick iterations and reliable performance. • __Solo Development:__ Effective planning and tool selection are crucial for successful solo project execution.",
  }
]

export const tools: Tool[] = [
    { 
        name: "Notion", 
        description: "Flexible database for my family, projects, and new ideas.",
        icon: {
          light: "/tools/notion-icon.svg",
          dark: "/tools/notion-icon2.svg"
        }
    },
    { 
        name: "ChatGPT", 
        description: "Thought partner, information organizer, and planning assistant.",
        icon: {
          light: "/tools/chatgpt-icon.svg",
          dark: "/tools/chatgpt-icon2.svg"
        }
    },
    { 
        name: "Claude", 
        description: "My favorite project assistant, rapid prototyper, and everything-else copilot.",
        icon: {
          light: "/tools/claude-icon.svg",
          dark: "/tools/claude-icon2.svg"
        }
    },
    { 
        name: "Perplexity", 
        description: "My go-to model for research and web browsing with context.",
        icon: {
            light: "/tools/perplexity-ai-icon.svg",
            dark: "/tools/perplexity-ai-icon2.svg"
          }
    },
    { 
        name: "Cursor", 
        description: "AI-powered code editor and composer.",
        icon: {
            light: "/tools/code-tags.svg",
            dark: "/tools/code-tags2.svg"
          }
    },
    { 
        name: "v0", 
        description: "Quickest way to build and deploy prototypes with designs or specs.",
        icon: {
            light: "/tools/v0-icon.svg",
            dark: "/tools/v0-icon2.svg"
          }
    },
    { 
        name: "Replit", 
        description: "Create fast apps, agents, and tools with your data or through integration.",
        icon: {
            light: "/tools/replit-icon.svg",
            dark: "/tools/replit-icon2.svg"
          }
    },
]

export const essays: Essay[] = [
    {
        id: "1",
        date: "1/26/25",
        title: "Thought Partner, Assistant, & Agent",
        preview: "A PM’s practical guide to using AI: mental models, prompts, and tools.",
        url: "https://blog.ryanwigley.com/thought-partner-assistant-and-agent",
      },
      {
        id: "2",
        date: "12/12/24",
        title: "100 days of AI",
        preview: "I've been finding myself thinking a lot about young Ryan lately.",
        url: "https://blog.ryanwigley.com/100-days-of-ai",
      },
      {
        id: "3",
        date: "12/5/24",
        title: "Free-range AI agents",
        preview: "I can't stop thinking about AI agents. We're witnessing the dawn of truly autonomous digital beings",
        url: "https://blog.ryanwigley.com/free-range-ai-agents",
      },
      {
        id: "4",
        date: "10/31/24",
        title: "The growing AI innovation gap",
        preview: "This gap isn't just about access to tools, it's about the pace of innovation.",
        url: "https://blog.ryanwigley.com/the-growing-ai-innovation-gap",
      },
      {
        id: "5",
        date: "10/22/24",
        title: "How to avoid overthinking your API",
        preview: "If you are in the business of software integrations, your API is your brand's digital handshake with the world.",
        url: "https://blog.ryanwigley.com/how-to-avoid-overthinking-your-api",
      },
]

export const workExperience: WorkExperience[] = [
    {
        company: "Amazon",
        role: "Sr Technical PM",
        period: "2021 - today",
        logo: {
          light: "/companies/amazon-icon.svg",
          dark: "/companies/amazon-icon2.svg"
        }
    },
    {
        company: "Productonics",
        role: "Founder",
        period: "2020 - today",
        logo: {
          light: "/companies/volcano-icon.svg",
          dark: "/companies/volcano-icon2.svg"
        }
    },
    {
        company: "Dubset Media",
        role: "Founding PM",
        period: "2012 - 2020",
        logo: {
            light: "/companies/dubset-icon.svg",
            dark: "/companies/dubset-icon2.svg"
          }
    },
    {
        company: "Bouncebug",
        role: "Co-Founder",
        period: "2011 - 2012",
        logo: {
            light: "/companies/bouncebug-icon.svg",
            dark: "/companies/bouncebug-icon2.svg"
          }
    }
] 