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
  const [showAll, setShowAll] = useState(false)

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag))
  const featured = filtered.filter((project) => project.featured)
  const moreProjects = filtered.filter((project) => !project.featured)
  const visibleProjects = showAll ? filtered : (featured.length > 0 ? featured : filtered)

  return (
    <section id="archive" className={`section-border section-pad`}>
      <div className="container" ref={sectionRef}>
        <div className={styles.header}>
          <div className={styles.headerCopy}>
            <h2 className={styles.sectionLabel}>02 / Projects</h2>
          </div>
          <div className={styles.headerControls}>
            <div className={styles.filters}>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`${styles.filter} ${activeTag === tag ? styles.filterActive : ''}`}
                  onClick={() => {
                    setActiveTag(tag)
                    setOpenId(null)
                    setShowAll(false)
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            {moreProjects.length > 0 && (
              <button
                className={styles.expandButton}
                onClick={() => {
                  setShowAll((value) => !value)
                  setOpenId(null)
                }}
                aria-expanded={showAll}
              >
                {showAll ? 'Show fewer' : `Show ${moreProjects.length} more`}
              </button>
            )}
          </div>
        </div>

        <div className={styles.list}>
          {visibleProjects.map((project) => (
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
