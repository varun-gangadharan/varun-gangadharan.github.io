export interface Project {
  id: string
  title: string
  category: string
  year: string
  summary: string
  featured?: boolean
  stack: string[]
  tags: string[]
  links: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    id: '001',
    title: 'Runman + RunCoach',
    category: 'Platform + MCP Server',
    year: '2026',
    summary:
      'Training dashboard and MCP server that pull real Strava activity data (200+ runs) to surface load trends, race predictions, and weekly planning — RunCoach exposes these as LLM-callable tools for natural-language coaching.',
    featured: true,
    stack: ['TypeScript', 'Node.js', 'MCP', 'Supabase', 'React', 'Vercel'],
    tags: ['AI', 'Full-stack'],
    links: [
      { label: 'Live', url: 'https://runman-pied.vercel.app' },
      { label: 'Runman', url: 'https://github.com/varun-gangadharan/runman' },
      { label: 'RunCoach', url: 'https://github.com/varun-gangadharan/runcoach' },
    ],
  },
  {
    id: '002',
    title: 'Long Box',
    category: 'Full-stack App',
    year: '2026',
    summary:
      'Comic-reading guide covering 50+ curated runs across Marvel and DC — helps readers find a starting point and discover arcs without guessing through decades of issues.',
    featured: true,
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind'],
    tags: ['Full-stack'],
    links: [
      { label: 'Live', url: 'https://long-box.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/long-box' },
    ],
  },
  {
    id: '003',
    title: 'VarCapsule',
    category: 'Full-stack App',
    year: '2026',
    summary:
      'Digital time capsule with server-enforced locking: sealed messages, private archives, email sharing, OTP verification, and scheduled notification emails.',
    featured: true,
    stack: ['React', 'TypeScript', 'Supabase', 'Vercel', 'Resend'],
    tags: ['Full-stack'],
    links: [
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/time-capsule' },
      { label: 'Live', url: 'https://varcapsule.xyz' },
    ],
  },
  {
    id: '004',
    title: 'FitCheck',
    category: 'Chrome Extension',
    year: '2026',
    summary:
      'Browser extension generating personalized fit-risk scores on fashion product pages — sizing recommendations derived from body measurements, brand history, and web-sourced evidence.',
    featured: true,
    stack: ['JavaScript', 'Chrome MV3', 'Node.js', 'Firecrawl'],
    tags: ['AI', 'Full-stack'],
    links: [
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/fitcheck' },
    ],
  },
  {
    id: '005',
    title: 'NutriGenie',
    category: 'AI System',
    year: '2024',
    summary:
      'Deficiency-aware nutrition assistant using retrieval-augmented generation over 1,200+ food entries to produce cited dietary guidance.',
    stack: ['OpenAI API', 'LlamaIndex', 'RAG', 'Nutrition Data'],
    tags: ['AI', 'Research', 'NLP'],
    links: [
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/NutritionChatbot' },
      { label: 'Paper', url: '/nutrition_chatbot_paper.pdf' },
    ],
  },
  {
    id: '006',
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
    id: '007',
    title: 'BrawlMetric',
    category: 'Full-stack App',
    year: '2024',
    summary:
      'Strategy companion for Brawl Stars players, combining recommendations, leaderboards, and player-context insights.',
    stack: ['React', 'Node.js', 'MongoDB', 'API Integration'],
    tags: ['Full-stack'],
    links: [
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/brawl-metrics' },
    ],
  },
  {
    id: '008',
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
  {
    id: '009',
    title: 'Undo for Agents',
    category: 'AI Infrastructure',
    year: '2026',
    summary:
      'A rewindable agent sandbox: every command forks a microVM checkpoint, letting users restore the full environment before a mistake. The public demo runs offline by default; live sessions use each visitor’s revocable keys in browser-session memory only.',
    featured: true,
    stack: ['Python', 'Streamlit', 'MCP', 'Archil', 'Anthropic'],
    tags: ['AI', 'Full-stack'],
    links: [
      { label: 'Live demo', url: 'https://undo-for-agents.streamlit.app/' },
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/undo-for-agents' },
    ],
  },
]

export const allTags = ['All', 'AI', 'Full-stack', 'Research', 'NLP']
