import { profile } from '../data/profile'
import styles from './ContactFooter.module.css'

export default function ContactFooter() {
  return (
    <footer id="contact" className={`section-border ${styles.footer}`}>
      <div className="container">
        <h2 className={styles.sectionLabel}>05 / Contact</h2>

        <div className={styles.content}>
          <a href={`mailto:${profile.email}`} className={styles.email}>
            {profile.email}
          </a>

          <div className={styles.links}>
            <a href={profile.phoneHref}>{profile.phone}</a>
            <span className={styles.sep}>/</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className={styles.sep}>/</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className={styles.sep}>/</span>
            <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>

        <p className={styles.colophon}>
          Varun Gangadharan / Selected Works / 2026
        </p>
      </div>
    </footer>
  )
}
