import { useState } from 'react'
import { research } from '../data/research'
import type { ResearchPaper } from '../data/research'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './ResearchSection.module.css'

function ResearchRow({ paper, isOpen, onToggle }: { paper: ResearchPaper; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`${styles.row} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.rowHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`paper-${paper.id}`}
      >
        <span className={styles.rowId}>{paper.id}</span>
        <span className={styles.rowTitle}>{paper.title}</span>
        <span className={styles.rowField}>{paper.field}</span>
        <span className={styles.rowYear}>{paper.year}</span>
        <span className={styles.rowArrow}>{isOpen ? '\u2212' : '+'}</span>
      </button>

      <div
        id={`paper-${paper.id}`}
        className={styles.rowDetail}
        role="region"
        aria-hidden={!isOpen}
      >
        <div className={styles.detailInner}>
          <p className={styles.summary}>{paper.summary}</p>
          <div className={styles.links}>
            {paper.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.paperLink}
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

export default function ResearchSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>()
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="research" className="section-border section-pad">
      <div className="container" ref={sectionRef}>
        <h2 className={styles.sectionLabel}>03 / Research</h2>

        <div className={styles.list}>
          {research.map((paper) => (
            <ResearchRow
              key={paper.id}
              paper={paper}
              isOpen={openId === paper.id}
              onToggle={() => setOpenId(openId === paper.id ? null : paper.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
