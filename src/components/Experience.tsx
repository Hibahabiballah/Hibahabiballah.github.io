import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { experience } from '../data/portfolio'

export function Experience() {
  const [selected, setSelected] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const id = useId()

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number
    switch (event.key) {
      case 'ArrowDown':
        next = (index + 1) % experience.length
        break
      case 'ArrowUp':
        next = (index + experience.length - 1) % experience.length
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = experience.length - 1
        break
      default:
        return
    }
    event.preventDefault()
    setSelected(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="experience-layout">
      <div className="experience-tabs" role="tablist" aria-label="Research and industry roles" aria-orientation="vertical">
        {experience.map((entry, index) => (
          <button key={entry.organization} ref={element => { tabRefs.current[index] = element }}
            type="button" role="tab" id={id + '-tab-' + index}
            aria-controls={id + '-panel-' + index} aria-selected={selected === index}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)} onKeyDown={event => navigate(event, index)}>
            <span className="experience-tab-name">{entry.organization}</span>
            <span className="experience-tab-field">{entry.domain?.split(' · ')[0]}</span>
          </button>
        ))}
      </div>
      {experience.map((entry, index) => (
        <div key={entry.organization} role="tabpanel" className="experience-panel"
          id={id + '-panel-' + index} aria-labelledby={id + '-tab-' + index}
          tabIndex={0} hidden={selected !== index}>
          {selected === index && <div className="experience-detail">
            {entry.period && <p className="mono timeline-period">{entry.period}</p>}
            <h3>{entry.title}</h3>
            <p className="experience-description">{entry.description}</p>
            {entry.domain && <p className="experience-domain">{entry.domain}</p>}
          </div>}
        </div>
      ))}
    </div>
  )
}
