import { useState } from 'react'
import { projects, allTags } from '../data/projects'
import type { Project } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './ArchiveSection.module.css'

function ProjectRow({ project, isOpen, onToggle }: { project: Project; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`${styles.row} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.rowHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`project-${project.id}`}
      >
        <span className={styles.rowId}>{project.id}</span>
        <span className={styles.rowTitle}>{project.title}</span>
        <span className={styles.rowCategory}>{project.category}</span>
        <span className={styles.rowYear}>{project.year}</span>
        <span className={styles.rowArrow}>{isOpen ? '\u2212' : '+'}</span>
      </button>

      <div
        id={`project-${project.id}`}
        className={styles.rowDetail}
        role="region"
        aria-hidden={!isOpen}
      >
        <div className={styles.detailInner}>
          <p className={styles.summary}>{project.summary}</p>
          <div className={styles.stack}>
            {project.stack.map((s) => (
              <span key={s} className={styles.stackItem}>{s}</span>
            ))}
          </div>
          <div className={styles.links}>
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                {link.label}
                <span className={styles.linkArrow}>&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ArchiveSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>()
  const [activeTag, setActiveTag] = useState('All')
  const [openId, setOpenId] = useState<string | null>(null)

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <section id="archive" className={`section-border section-pad`}>
      <div className="container" ref={sectionRef}>
        <div className={styles.header}>
          <h2 className={styles.sectionLabel}>02 / Archive</h2>
          <div className={styles.filters}>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`${styles.filter} ${activeTag === tag ? styles.filterActive : ''}`}
                onClick={() => { setActiveTag(tag); setOpenId(null) }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.list}>
          {filtered.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              isOpen={openId === project.id}
              onToggle={() => setOpenId(openId === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
