import { profile } from '../data/profile'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './ResumeSection.module.css'

export default function ResumeSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="resume" className="section-border section-pad">
      <div className="container" ref={sectionRef}>
        <h2 className={styles.sectionLabel}>04 / Resume</h2>

        <p className={styles.statement}>
          Software engineer focused on AI systems, full-stack applications, and applied research.
        </p>

        <div className={styles.skillGroups}>
          {profile.skills.map((group) => (
            <div key={group.group} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.group}</h3>
              <p className={styles.groupItems}>{group.items.join(', ')}</p>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.action}
          >
            View PDF <span>&rarr;</span>
          </a>
          <a
            href={profile.resumePdf}
            download
            className={styles.action}
          >
            Download PDF <span>&darr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
