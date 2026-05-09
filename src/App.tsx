import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroIndex from './components/HeroIndex'
import ArchiveSection from './components/ArchiveSection'
import ResearchSection from './components/ResearchSection'
import ResumeSection from './components/ResumeSection'
import ContactFooter from './components/ContactFooter'

function getInitialTheme(): 'light' | 'dark' {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <>
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <HeroIndex />
        <ArchiveSection />
        <ResearchSection />
        <ResumeSection />
        <ContactFooter />
      </main>
    </>
  )
}
