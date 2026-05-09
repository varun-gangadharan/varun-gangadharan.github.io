export interface ResearchPaper {
  id: string
  title: string
  year: string
  field: string
  summary: string
  links: { label: string; url: string }[]
}

export const research: ResearchPaper[] = [
  {
    id: 'R01',
    title: 'Extending GrabCuts',
    year: '2024',
    field: 'Computer Vision',
    summary:
      'Multi-object segmentation study extending GrabCut-style foreground extraction for richer feature isolation.',
    links: [{ label: 'PDF', url: '/grabcuts_paper.pdf' }],
  },
  {
    id: 'R02',
    title: 'Clarifying Nutrition',
    year: '2024',
    field: 'AI / NLP',
    summary:
      'Retrieval-augmented generation applied to dietary advice, enhancing transparency and trust through source citations.',
    links: [
      { label: 'GitHub', url: 'https://github.com/varun-gangadharan/NutritionChatbot' },
      { label: 'PDF', url: '/nutrition_chatbot_paper.pdf' },
    ],
  },
  {
    id: 'R03',
    title: 'Adversarial ML in Network Detection',
    year: '2023',
    field: 'Cybersecurity',
    summary:
      'GAN-based approach to strengthening network intrusion detection against novel adversarial threats.',
    links: [{ label: 'PDF', url: '/Adversarial_ML_for_CID_final_report.pdf' }],
  },
  {
    id: 'R04',
    title: 'Measuring Foot Traffic with BLE',
    year: '2023',
    field: 'IoT / Embedded',
    summary:
      'Bluetooth Low Energy broadcasting system for cost-effective foot traffic monitoring in public spaces.',
    links: [
      { label: 'GitHub', url: 'https://github.com/SuP3RM/Foot-Traffic' },
      { label: 'PDF', url: '/BLE_foot_traffic_research.pdf' },
    ],
  },
]
