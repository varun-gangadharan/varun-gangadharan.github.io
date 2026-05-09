import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

const sections = [
  { id: 'index', label: 'Index' },
  { id: 'archive', label: 'Archive' },
  { id: 'research', label: 'Research' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

interface Props {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Navigation({ theme, onToggleTheme }: Props) {
  const [active, setActive] = useState('index')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.inner}>
        <div className={styles.links}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`${styles.link} ${active === s.id ? styles.active : ''}`}
            >
              {s.label}
            </a>
          ))}
        </div>
        <button
          className={styles.toggle}
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? 'DARK' : 'LIGHT'}
        </button>
      </div>
    </nav>
  )
}
