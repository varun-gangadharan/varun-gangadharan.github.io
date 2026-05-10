import { useEffect, useRef } from 'react'
import { profile } from '../data/profile'
import styles from './HeroIndex.module.css'

export default function HeroIndex() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    // Small delay so the browser paints the initial state first
    requestAnimationFrame(() => {
      el.classList.add(styles.visible)
    })
  }, [])

  return (
    <section id="index" className={styles.hero} ref={sectionRef}>
      {/* Full-width editorial portrait band */}
      <div className={styles.portraitBand}>
        <div className={styles.portraitInner}>
          <img
            src="/images/portrait.jpg"
            alt="Varun Gangadharan standing in an architectural corridor"
            className={styles.portrait}
          />
          <div className={styles.portraitOverlay} />
        </div>
        {/* Name overlaid on portrait for editorial effect */}
        <h1 className={styles.nameOverlay}>
          <span className={styles.firstName}>Varun</span>
          <span className={styles.lastName}>Gangadharan</span>
        </h1>
      </div>

      {/* Metadata rail below */}
      <div className={styles.rail}>
        <div className={styles.railLeft}>
          <p className={styles.title}>{profile.title}</p>
          <p className={styles.tagline}>{profile.tagline}</p>
        </div>
        <div className={styles.railRight}>
          <div className={styles.meta}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className={styles.sep}>/</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className={styles.sep}>/</span>
            <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
          <a href={profile.phoneHref} className={styles.phone}>{profile.phone}</a>
          <p className={styles.location}>01 / Index</p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
