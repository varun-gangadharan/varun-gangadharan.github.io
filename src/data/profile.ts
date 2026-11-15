export interface Experience {
  company: string
  title: string
  dates: string
  blurb: string
}

export const profile = {
  name: 'Varun Gangadharan',
  title: 'Software Engineer',
  tagline: 'Backend systems, secrets infrastructure, and AI integrations — most recently building zero-to-one platform tooling at GEICO.',
  email: 'varun.gangadharan.63@gmail.com',
  phone: '+1 301 250 8286',
  phoneHref: 'tel:+13012508286',
  github: 'https://github.com/varun-gangadharan',
  linkedin: 'https://www.linkedin.com/in/varung63/',
  resumePdf: '/assets/varun_gangadharan_resume.pdf',
  experience: [
    {
      company: 'GEICO',
      title: 'Software Engineer — Secrets Platform',
      dates: '2024 — Present',
      blurb:
        'Built SecretShare from zero-to-one: a Go service on Kubernetes using Vault response-wrapping for ephemeral, single-use credential handoffs — now used company-wide by 4,000+ engineers. Designed a JWT-secured REST API (Microsoft Entra, JWKS validation) for programmatic API-key delivery to LLM pipelines. Instrumented with Prometheus metrics and Grafana dashboards; deployed via Terraform and Vault Agent sidecars on AKS.',
    },
  ] as Experience[],
  skills: [
    {
      group: 'AI / Agents',
      items: ['MCP', 'LLM Tooling', 'RAG', 'OpenAI API', 'LlamaIndex', 'NLP'],
    },
    {
      group: 'Languages',
      items: ['Go', 'TypeScript', 'Python', 'C++', 'Java', 'SQL'],
    },
    {
      group: 'Frontend',
      items: ['React', 'Next.js', 'Vite', 'CSS Architecture', 'UI Systems'],
    },
    {
      group: 'Backend / Infra',
      items: ['Node.js', 'Django', 'PostgreSQL', 'Supabase', 'HashiCorp Vault', 'Kubernetes', 'Docker'],
    },
    {
      group: 'Research',
      items: ['Computer Vision', 'Cybersecurity', 'BLE Systems', 'Nutrition AI'],
    },
  ],
}
