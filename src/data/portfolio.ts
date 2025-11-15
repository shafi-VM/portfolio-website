import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Shafi Ahmed",
    title: "I build clean, scalable systems.",
    email: "shfahmd001@gmail.com",
    phone: "+91-8707074725",
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/shafi-ah01/",
    github: "https://github.com/ita004",
    bio: "Full-stack engineer who believes great systems are built with care — clean architecture, thoughtful design, and an obsession for learning. I love building tools and platforms that make technology feel simple and human",
  },

  experience: [
    {
      id: 1,
      company: "Samyama.ai(VaidhyaMegha Pvt Ltd)",
      role: "Software Developer",
      period: "Jul 2024 - Present",
      location: "Hyderabad, India",
      description: "Building AI-driven banking systems with LLMs, RAG pipelines, and multi-tenant architecture.",
      highlights: [
        "Contributed to Banking Insight Platform using TypeScript, Supabase, PostgreSQL (pgvector), and OpenAI APIs",
        "Built production-grade knowledge base retrieval system combining vector search, full-text search, and fusion ranking for 80%+ accurate responses",
        "Enhanced AI feature development efficiency by introducing modular pipelines for document processing, embeddings generation, and caching",
        "Designed enterprise-grade authentication and RBAC with Supabase Auth, PostgreSQL RLS, and hierarchical multi-organization support",
        "Developed reusable Go microservices for secure file handling (S3 + presigned URLs), Redis messaging, and internal service-gateway framework",
      ],
    },
  ],

  education: [
    {
      id: 1,
      institution: "NIT Warangal",
      degree: "B.Tech in Chemical Engineering",
      period: "2018 - 2022",
      gpa: "8.46/10",
      location: "Warangal, India",
    },
  ],

  skills: {
    development: {
      webFrameworks: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Gin"],
      databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
      architecture: ["Microservices", "Event-driven systems", "REST APIs", "RAG Services"],
      devops: ["Docker", "Kubernetes(beginner-intermediate)", "CI/CD", "Git"],
      cloud: ["AWS (EC2, S3, Lambda)", "Railway", "Vercel", "Netlify"],
    },
    languages: {
      primary: ["Go", "JavaScript", "TypeScript", "Python"],
      systems: ["C++"],
      web: ["HTML5", "CSS3"],
    },
    aiAndML: {
      frameworks: ["LangChain", "LlamaIndex"],
      providers: ["OpenAI", "Gemini API", "Anthropic Claude"],
      vectorAndRAG: ["Qdrant", "pgvector", "Jina"],
      techniques: ["RAG Pipelines", "Prompt Engineering", "Fine-tuning"],
      agents: ["Tool Calling", "Multi-step Agents", "Context Orchestration"],
    },
    tools: {
      development: ["VS Code", "Git", "GitHub"],
      apiAndTesting: ["Postman", "Swagger", "Jest", "Pytest"],
      collaboration: ["JIRA", "Notion", "Slack"],
    },
  },

  projects: [
    {
      id: 1,
      title: "Analytics Engine",
      description: "A scalable, production-ready backend API for collecting and analyzing website and mobile app analytics. Built with Node.js, TypeScript, PostgreSQL, and Redis.",
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Express.js", "Docker", "Swagger", "Passport.js"],
      highlights: [
        "Google OAuth authentication with secure API key management",
        "High-volume event collection handling millions of analytics events",
        "Redis caching for optimized query performance with rate limiting",
        "Comprehensive API documentation with interactive Swagger UI",
        "Database optimization with indexed queries for fast aggregations",
      ],
      githubLink: "https://github.com/ita004/analytics_engine",
      liveLink: "https://analyticsengine-production.up.railway.app",
    },
    {
      id: 2,
      title: "GeoTIFF Processing App",
      description: "A production-quality full-stack web application for comparing and processing GeoTIFF images with split-view visualization and area of interest (AOI) processing capabilities.",
      technologies: ["React", "TypeScript", "Node.js", "Python", "Rasterio", "GDAL", "Leaflet", "Docker", "TailwindCSS"],
      highlights: [
        "Interactive Leaflet-based split-view map with synchronized pan/zoom",
        "Advanced image processing: clip, align using phase correlation",
        "Auto-normalized PNG previews with robust percentile stretching",
        "Real-time job status tracking with progress updates",
        "Web-optimized display with proper contrast enhancement for SAR/EO imagery",
      ],
      githubLink: "https://github.com/ita004/geotiff-processing-app",
    },
    {
      id: 3,
      title: "Verifast NewsBot",
      description: "RAG-powered chatbot for news websites using Jina Embeddings, Qdrant vector database, and Google's Gemini API for contextual, informative responses.",
      technologies: ["Node.js", "Express", "Qdrant", "Redis", "Gemini API", "Jina AI", "React", "RAG Pipeline"],
      highlights: [
        "Vector database with semantic search for relevant article retrieval",
        "Session management with Redis for chat history and configurable TTL",
        "Enhanced prompting for detailed, factual responses without hallucination",
        "Fusion ranking combining vector search and full-text search (80%+ accuracy)",
        "Clean, responsive chat interface with session persistence",
      ],
      githubLink: "https://github.com/ita004/verifast-newsbot",
    },
    {
      id: 4,
      title: "Chatbot Flow Builder",
      description: "A modern, intuitive visual flow builder for creating chatbot conversations with drag-and-drop interface, visual connections, and smart validation.",
      technologies: ["React", "TypeScript", "React Flow", "Vite", "CSS3"],
      highlights: [
        "Intuitive drag-and-drop interface with visual connection system",
        "Real-time editing with instant visual feedback and flow validation",
        "Auto-save to localStorage with flow restoration on page refresh",
        "Custom React hooks for reusable logic and clean architecture",
        "Extensible design for easy addition of new node types",
      ],
      githubLink: "https://github.com/ita004/bitespeed-chatbot-flow-builder",
      liveLink: "https://bitespeed-chatbot-flow-builder-snowy.vercel.app",
    },
  ],

  achievements: [
    "Published research paper on Chemical Engineering optimization",
    "Won 2nd place in college hackathon for building a recommendation system",
    "Active contributor to open-source projects",
  ],
};
