import { create } from 'zustand';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  tools: string[];
  impact: string;
}

interface ProjectStore {
  projects: Project[];
}

export const useProjectStore = create<ProjectStore>(() => ({
  projects: [
    {
      id: 'project-flatmayt',
      title: 'Flatmayt',
      description: 'Built <a href="https://business.flatmayt.com" target="_blank" rel="noopener noreferrer" style="color: hsl(270, 85%, 60%); text-decoration: underline;">business.flatmayt.com</a>, ad platform enabling local businesses to reach users of <a href="https://flatmayt.com" target="_blank" rel="noopener noreferrer" style="color: hsl(270, 85%, 60%); text-decoration: underline;">Flatmayt.com</a> through geo & demographic-based targeting.',
      image: 'https://i.ibb.co/whq1JFCG/flat.png',
      imageAlt: 'flatmayt logo',
      challenge: 'Local businesses lacked an easy and efficient way to promote their services directly to <a href="https://flatmayt.com" target="_blank" rel="noopener noreferrer" style="color: hsl(270, 85%, 60%); text-decoration: underline;">Flatmayt\'s</a> audience without manual coordination or third-party tools.',
      solution: 'Developed a scalable, mobile-first advertising platform where businesses can independently create, launch, and manage ad campaigns. The system supports multi-step ad creation, live analytics (CTR, redemptions), and real-time campaign insights. Integrated Stripe for automated billing, AWS S3 for secure asset storage, and NextAuth.js with Google OAuth for seamless authentication.',
      tools: [
        "React Native",
        "Next.js 14",
        "Tailwind CSS",
        "TypeScript",
        "Android",
        "Kotlin",
        "Java",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "AWS S3",
        "NextAuth.js",
        "Recharts",
      ],
      impact: 'The project streamlined the flatmate search process, offering users an engaging and intuitive experience. Local businesses gained access to an automated ad platform that simplified campaign creation and management while providing real-time insights into performance metrics. This resulted in higher user engagement, improved targeting accuracy, and better ROI for advertisers.'
    },
    {
      id: 'project-estore-ai',
      title: 'EStore AI',
      description: '<a href="https://github.com/eldorado505/EStore-AI" target="_blank" rel="noopener noreferrer" style="color: hsl(270, 85%, 60%); text-decoration: underline;">EStore AI</a> is an AI-powered shopping assistant that transforms e-commerce interactions using natural language understanding.',
      image: 'https://i.postimg.cc/zvpB1SFF/shoppinggpt-logo.jpg',
      imageAlt: 'estore ai logo',
      challenge: 'Online shoppers often face fragmented experiences across product discovery, policy queries, and support chats. Traditional systems rely on keyword search or rule-based bots that fail to understand nuanced queries and deliver contextually relevant information.',
      solution: 'EStore AI integrates Large Language Models (Gemini-1.5-Flash) with a RAG architecture to deliver intelligent, real-time responses. It uses a <a href="https://github.com/aurelio-labs/semantic-router" target="_blank" rel="noopener noreferrer" style="color: hsl(270, 85%, 60%); text-decoration: underline;">Semantic Router</a> for query classification, combining SQLite for product search and FAISS (Facebook AI Similarity Search) for policy retrieval. The system routes user messages to specialized handlers ensuring seamless, human-like interactions through a Flask-based web interface.',
      tools: ["Python", "Flask", "LangChain", "Gen AI", "LLMs", "Semantic Router", "RAG", "SQLite", "RAG Architecture", "Embeddings", "HTML/CSS"],
      impact: 'EStore AI delivers a smarter and faster shopping experience by merging AI-driven conversation with real product intelligence. It reduces search friction, personalizes recommendations, and showcases how LLMs can enhance e-commerce workflows—laying the foundation for next-gen AI shopping assistants.',
    },
    {
      id: 'project-fit-track',
      title: 'Fit Track',
      description: '<a href="https://github.com/eldorado505/Fit-Track" target="_blank" rel="noopener noreferrer" style="color: hsl(270, 85%, 60%); text-decoration: underline;">Fit Track</a> is a privacy-focused Android fitness app that helps users track workout routines efficiently while ensuring complete data privacy.',
      image: 'https://i.postimg.cc/brYnbv61/Fit-Track-2.png',
      imageAlt: 'fit track logo',
      challenge: 'Most fitness tracking apps rely heavily on online accounts or cloud storage, raising privacy concerns and making users dependent on external servers. Additionally, many apps complicate simple workout tracking with unnecessary social or subscription features, distracting from the core goal — personal training data management.',
      solution: 'Fit Track offers a lightweight, offline-first fitness tracking experience. Users can add customized exercises, color-coded plans, and notes; log training data with automatic progress tracking; and use built-in calculators like BMI. The app employs Material You design for a clean interface, supports data import/export, and offers bilingual support (English/German). All data stays private and fully under user control.',
      tools: ["Android", "Kotlin", "Java", "SQLite"],
      impact: 'Fit Track empowers users to take control of their fitness data without sacrificing privacy or simplicity. Its local-first architecture ensures zero data sharing while providing detailed progress analytics and an intuitive experience. The app demonstrates how personal fitness tracking can remain secure, transparent, and user-centric — setting a benchmark for ethical app design.',
    },
  ],
}));
