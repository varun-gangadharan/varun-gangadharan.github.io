export interface Project {
  id: string
  title: string
  category: string
  year: string
  summary: string
  stack: string[]
  tags: string[]
  links: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    id: '001',
    title: 'Time Capsule',
    category: 'Full-stack App',
    year: '2026',
    summary:
      'Digital time capsule with server-enforced locking — messages sealed to a future date, shared via email with OTP verification. Retro design system with chunky borders and paper textures.',
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    tags: ['Full-stack'],
    links: [
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/time-capsule' },
    ],
  },
  {
    id: '002',
    title: 'FitCheck',
    category: 'Chrome Extension',
    year: '2026',
    summary:
      'Browser extension generating personalized fit-risk scores on fashion product pages — sizing recommendations derived from body measurements, brand history, and web-sourced evidence.',
    stack: ['JavaScript', 'Chrome MV3', 'Node.js', 'Firecrawl'],
    tags: ['AI', 'Full-stack'],
    links: [
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/fitcheck' },
    ],
  },
  {
    id: '003',
    title: 'NutriGenie',
    category: 'AI System',
    year: '2024',
    summary:
      'Deficiency-aware nutrition assistant using retrieval-augmented generation to produce cited dietary guidance.',
    stack: ['OpenAI API', 'LlamaIndex', 'RAG', 'Nutrition Data'],
    tags: ['AI', 'Research', 'NLP'],
    links: [
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/NutritionChatbot' },
      { label: 'Paper', url: '/nutrition_chatbot_paper.pdf' },
    ],
  },
  {
    id: '004',
    title: 'Insightify',
    category: 'NLP Tool',
    year: '2024',
    summary:
      'Browser-based summarization tool exploring BART-powered abstraction for dense web text.',
    stack: ['Hugging Face', 'BART', 'Chrome Extension', 'NLP'],
    tags: ['AI', 'NLP'],
    links: [
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/SummarizeExtension' },
    ],
  },
  {
    id: '005',
    title: 'BrawlMetric',
    category: 'Full-stack App',
    year: '2024',
    summary:
      'Strategy companion for Brawl Stars players, combining recommendations, leaderboards, and player-context insights.',
    stack: ['React', 'Node.js', 'API Integration'],
    tags: ['Full-stack'],
    links: [
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/brawl-metrics' },
    ],
  },
  {
    id: '006',
    title: 'GeoSentiment',
    category: 'Data Pipeline',
    year: '2023',
    summary:
      'Live Twitter sentiment pipeline mapping public language into geographic and behavioral signals.',
    stack: ['Python', 'Tweepy', 'NLTK', 'SpaCy', 'Docker'],
    tags: ['AI', 'NLP', 'Full-stack'],
    links: [
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/twitter-scraping-bot' },
    ],
  },
]

export const allTags = ['All', 'AI', 'Full-stack', 'Research', 'NLP']
