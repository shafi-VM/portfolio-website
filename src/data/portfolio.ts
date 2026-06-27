import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Shafi Ahmed',
    title: 'Backend & AI Engineer',
    tagline: 'I build production AI-powered platforms — multi-tenant RAG systems, distributed services, and clean backends in Go & Python.',
    email: 'shfahmd001@gmail.com',
    phone: '+91 8707074725',
    location: 'Hyderabad, India',
    linkedin: 'https://www.linkedin.com/in/shafi-ah01/',
    github: 'https://github.com/shafi-VM',
    resumeUrl: '/Shafi_Ahmed_Resume.pdf',
    bio: [
      "I'm a backend engineer with ~2 years of experience building production AI-powered banking platforms in Go and Python. The work I care about lives close to the data and the architecture — multi-tenancy, retrieval, authorization, and the unglamorous correctness that keeps a system trustworthy.",
      "At VaidhyaMegha I engineered the core backend for QORRO: 260+ REST endpoints across 67 service modules, a production RAG system over regulatory documents, and a recommendation pipeline wired to three ML scoring models. Alongside it, I built reusable Go microservices that two engineering teams now depend on.",
      "Outside work I contribute to open source — three of my fixes are merged into Medusa, a 34k★ commerce platform — and build systems projects for the fun of understanding things end to end: LLM observability pipelines, server-authoritative game backends, geospatial tooling.",
      "What I value most is sincerity in the work: clean architecture, owning the details, and leaving every system a little clearer, faster, and more reliable than I found it.",
    ],
  },

  experience: [
    {
      id: 1,
      company: 'VaidhyaMegha',
      companyUrl: 'https://vaidhyamegha.com',
      role: 'Software Developer',
      period: 'Jul 2024 — Present',
      location: 'Hyderabad, India',
      description:
        'Building multi-tenant, AI-powered banking platforms — RAG systems, recommendation engines, and reusable Go microservices.',
      highlights: [
        'Engineered the core backend for QORRO, a multi-tenant AI banking platform — 260+ REST endpoints across 67 service modules on FastAPI and PostgreSQL.',
        'Built recommendation and offer-matching services on a pluggable scoring framework integrating 3 ML models (attrition, deposit-growth, and personal-loan propensity).',
        'Designed and deployed a production RAG system using OpenAI embeddings, PostgreSQL full-text search, and pgvector hybrid retrieval for regulatory and policy search.',
        'Implemented tenant isolation with 48+ PostgreSQL RLS policies, RBAC, step-up authentication, and Azure AD / GCP Identity Platform SSO.',
        'Developed reusable Go microservices adopted across 2 engineering teams; managed deployments with Docker, GitHub Actions, Cloud Run, and 35 Alembic migrations.',
      ],
      stack: ['Go', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'GCP', 'Docker'],
    },
  ],

  education: [
    {
      id: 1,
      institution: 'Dayananda Sagar College of Engineering',
      degree: 'B.E. in Industrial Engineering & Management',
      period: 'Graduated Aug 2024',
      gpa: '8.01 / 10',
      location: 'Bangalore, Karnataka',
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['Go', 'Python', 'TypeScript', 'Java', 'SQL', 'C++'],
    },
    {
      category: 'Backend & Architecture',
      items: ['Distributed Systems', 'Microservices', 'Multi-Tenancy', 'REST APIs', 'Event-Driven', 'RBAC', 'JWT', 'SSO'],
    },
    {
      category: 'AI & Search',
      items: ['RAG', 'LLM Integration', 'OpenAI APIs', 'Embeddings', 'pgvector', 'Hybrid & Semantic Search', 'LangChain'],
    },
    {
      category: 'Data & Storage',
      items: ['PostgreSQL', 'PostgreSQL RLS', 'Redis', 'asyncpg', 'SQLAlchemy', 'Alembic', 'MongoDB', 'Supabase'],
    },
    {
      category: 'Frameworks & Tools',
      items: ['FastAPI', 'Gin', 'Service Weaver', 'Spring Boot', 'Pydantic', 'Docker', 'Kubernetes', 'GitHub Actions'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['GCP (Cloud Run, Cloud SQL, GCS)', 'AWS (S3)', 'Azure AD', 'CI/CD', 'Git'],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'QORRO',
      tagline: 'Enterprise AI Banking Platform',
      category: 'Professional',
      proprietary: true,
      featured: true,
      description:
        'An enterprise AI banking platform that turns customer data, contextual signals, and ML scoring into actionable banker recommendations — backed by a multi-tenant FastAPI + PostgreSQL backend and a production RAG knowledge base.',
      technologies: ['FastAPI', 'PostgreSQL', 'pgvector', 'GCP', 'OpenAI', 'Azure AD SSO', 'Salesforce Canvas'],
      highlights: [
        'Recommendation pipeline combining customer facts, contextual signals, business rules, and 3 ML scoring models.',
        'RAG knowledge base over regulatory & policy documents (OpenAI embeddings + pgvector + full-text hybrid retrieval).',
        'Dynamic Contextual Conversation Guide (DCCG) surfacing real-time, personalized banker talking points via Salesforce Canvas.',
        '260+ REST endpoints across 67 modules, per-bank provisioning, 48+ RLS policies, RBAC, and Azure AD / GCP SSO.',
      ],
    },
    {
      id: 2,
      title: 'Olive',
      tagline: 'LLM Inference Logging & Ingestion',
      category: 'Personal',
      featured: true,
      description:
        'A production-shaped observability pipeline for LLM calls: a reusable SDK captures inference telemetry on every call and ships it, in near real time, through an ingestion service and queue into a Postgres analytics store that powers a metrics dashboard.',
      technologies: ['Next.js', 'Fastify', 'PostgreSQL', 'Redis', 'BullMQ', 'TypeScript', 'SSE', 'Docker'],
      highlights: [
        'Reusable LLM SDK auto-captures inference metadata across Gemini, OpenAI, OpenRouter, and a key-free mock provider.',
        'Event-driven ingestion via Redis + BullMQ with retries and a dead-letter queue.',
        'Token-by-token streaming over SSE, with mid-stream cancel wired to an AbortController.',
        'Dashboards for p50/p95 latency, throughput, and token usage — with PII redaction before persistence.',
      ],
      githubLink: 'https://github.com/shafi-VM/Olive',
    },
    {
      id: 3,
      title: 'Verifast NewsBot',
      tagline: 'RAG-powered news chatbot',
      category: 'Personal',
      description:
        "A RAG-powered chatbot for news websites — Jina embeddings, a Qdrant vector store, and Google's Gemini API for contextual, grounded answers.",
      technologies: ['Node.js', 'Express', 'Qdrant', 'Redis', 'Gemini API', 'Jina AI', 'React'],
      highlights: [
        'Vector search over a Qdrant store for relevant article retrieval.',
        'Fusion ranking combining vector and full-text search (80%+ accuracy).',
        'Grounded prompting tuned for factual answers without hallucination.',
        'Session management with Redis for chat history and configurable TTL.',
      ],
      githubLink: 'https://github.com/ita004/verifast-newsbot',
    },
    {
      id: 4,
      title: 'Analytics Engine',
      tagline: 'High-volume analytics API',
      category: 'Personal',
      description:
        'A scalable, production-ready backend API for collecting and analyzing website and mobile-app analytics — built with Node.js, TypeScript, PostgreSQL, and Redis.',
      technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Express', 'Docker', 'Swagger'],
      highlights: [
        'High-volume event collection handling millions of analytics events.',
        'Redis caching and rate limiting for optimized query performance.',
        'Indexed queries and database optimization for fast aggregations.',
        'Google OAuth, secure API-key management, and interactive Swagger docs.',
      ],
      githubLink: 'https://github.com/ita004/analytics_engine',
      liveLink: 'https://analyticsengine-production.up.railway.app',
    },
    {
      id: 5,
      title: 'Multiplayer Tic-Tac-Toe',
      tagline: 'Server-authoritative real-time game',
      category: 'Personal',
      description:
        'A real-time multiplayer game built on Nakama with a server-authoritative Go match handler — matchmaking, a persistent leaderboard, timed mode, and anti-cheat validation on every move.',
      technologies: ['Go', 'Nakama', 'PostgreSQL', 'React', 'TypeScript', 'WebSocket', 'Railway'],
      highlights: [
        'Server-authoritative match loop in Go — clients send intent, the server validates and broadcasts full state.',
        'Matchmaking, server-enforced timed mode, and forfeit-on-disconnect handling.',
        'Persistent leaderboard tracking wins, losses, and streaks across sessions.',
        'Anti-cheat: every move validated server-side; invalid inputs silently dropped.',
      ],
      githubLink: 'https://github.com/shafi-VM/lila-tictacto',
      liveLink: 'https://lila-tictacto.vercel.app',
    },
    {
      id: 6,
      title: 'GeoTIFF Processing App',
      tagline: 'Geospatial image processing',
      category: 'Personal',
      description:
        'A full-stack web app for comparing and processing GeoTIFF imagery with split-view visualization and area-of-interest (AOI) processing.',
      technologies: ['React', 'TypeScript', 'Python', 'Rasterio', 'GDAL', 'Leaflet', 'Docker'],
      highlights: [
        'Interactive Leaflet split-view map with synchronized pan/zoom.',
        'Image processing: clip and align via phase correlation.',
        'Auto-normalized PNG previews with robust percentile stretching.',
        'Contrast enhancement tuned for SAR / EO imagery.',
      ],
      githubLink: 'https://github.com/ita004/geotiff-processing-app',
    },
  ],

  openSource: [
    {
      id: 1,
      repo: 'medusajs/medusa',
      repoUrl: 'https://github.com/medusajs/medusa',
      stars: '34k+',
      prNumber: 15510,
      prUrl: 'https://github.com/medusajs/medusa/pull/15510',
      title: 'Clear session cookie on DELETE /auth/session',
      area: 'auth',
      description:
        "Logout was leaving the session cookie set. Fixed it so the cookie is properly cleared — closing a session-hygiene gap on the auth path.",
      status: 'Merged',
    },
    {
      id: 2,
      repo: 'medusajs/medusa',
      repoUrl: 'https://github.com/medusajs/medusa',
      stars: '34k+',
      prNumber: 15538,
      prUrl: 'https://github.com/medusajs/medusa/pull/15538',
      title: 'Apply customer-group price lists when creating a draft order',
      area: 'core-flows',
      description:
        "Creating a draft order with items charged the default price instead of the customer's group price list. Fixed the pricing context on the creation path.",
      status: 'Merged',
    },
    {
      id: 3,
      repo: 'medusajs/medusa',
      repoUrl: 'https://github.com/medusajs/medusa',
      stars: '34k+',
      prNumber: 15532,
      prUrl: 'https://github.com/medusajs/medusa/pull/15532',
      title: 'Prevent negative taxable base when stacking promotions',
      area: 'promotion',
      description:
        'Stacking multiple promotions could drive the taxable base negative. Corrected the totals calculation so the base stays valid.',
      status: 'Merged',
    },
  ],
};
