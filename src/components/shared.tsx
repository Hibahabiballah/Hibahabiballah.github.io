import type { ReactNode } from 'react'
import { ArrowUpRight, Code2, GraduationCap, Link2, Mail } from 'lucide-react'
import { m, useReducedMotion, type MotionProps } from 'motion/react'
import { profile, type TimelineEntry } from '../data/portfolio'

export function asset(path: string) {
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}

export function SocialLinks() {
  const links = [
    { label: 'LinkedIn', href: profile.linkedin, Icon: Link2 },
    { label: 'GitHub', href: profile.github, Icon: Code2 },
    { label: 'Email', href: 'mailto:' + profile.email, Icon: Mail },
    { label: 'Google Scholar', href: profile.scholar, Icon: GraduationCap },
  ]
  return <ul className="socials" aria-label="Social and contact links">{links.map(({ label, href, Icon }) => href && (
    <li key={label}><a href={href}><Icon size={15} aria-hidden="true" />{label}{label !== 'Email' && <ArrowUpRight size={13} aria-hidden="true" />}</a></li>
  ))}</ul>
}

export function useReveal() {
  const reduced = useReducedMotion()

  return (delay = 0): MotionProps => ({
    initial: reduced ? false : { opacity: 0.3, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 'some' },
    transition: { duration: reduced ? 0 : 0.5, delay: reduced ? 0 : delay, ease: [0.22, 0.61, 0.36, 1] },
  })
}

export function Section({ id, number, label, title, children }: {
  id: string; number?: string; label?: string; title: string; children: ReactNode
}) {
  const reveal = useReveal()
  return <section id={id} aria-labelledby={id + '-title'} tabIndex={-1} className="section">
    <div className="shell">
      <m.div className="section-heading" {...reveal()}>
        {(number || label) && <div className="eyebrow">{number && <span className="section-number">{number}</span>}{label}</div>}
        <h2 id={id + '-title'}>{title}</h2>
      </m.div>
      {children}
    </div>
  </section>
}

export function Tags({ items }: { items: string[] }) {
  return <ul className="tags">{items.map(item => <li key={item}>{item}</li>)}</ul>
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const reveal = useReveal()
  return <ol className="record-list">{entries.map(entry => (
    <m.li className="reading-entry" key={entry.title} {...reveal()}>
      <div>{entry.period && <p className="mono timeline-period">{entry.period}</p>}</div>
      <div>
        <h3>{entry.title}</h3>
        <p className="timeline-org">{entry.organization}</p>
        <p>{entry.description}</p>
        {entry.domain && <p className="timeline-domain">{entry.domain}</p>}
      </div>
    </m.li>
  ))}</ol>
}
