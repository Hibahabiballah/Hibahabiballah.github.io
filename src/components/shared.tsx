import type { ReactNode } from 'react'
import { ArrowUpRight, Code2, GraduationCap, Link2, Mail } from 'lucide-react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react'
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

export function Section({ id, number, label, title, children }: {
  id: string; number: string; label: string; title: string; children: ReactNode
}) {
  const reduced = useReducedMotion()
  return <section id={id} aria-labelledby={id + '-title'} tabIndex={-1} className="section">
    <LazyMotion features={domAnimation}>
      <m.div className="shell" initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: reduced ? 0 : 0.55, ease: [0.22, 0.61, 0.36, 1] }}>
        <div className="section-heading">
          <div className="eyebrow"><span className="section-number">{number}</span>{label}</div>
          <h2 id={id + '-title'}>{title}</h2>
        </div>
        {children}
      </m.div>
    </LazyMotion>
  </section>
}

export function Tags({ items }: { items: string[] }) {
  return <ul className="tags">{items.map(item => <li key={item}>{item}</li>)}</ul>
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return <ol className="timeline">{entries.map(entry => (
    <li key={entry.title}>
      <p className="mono timeline-period">{entry.period}</p>
      <div>
        <div className="timeline-organization">
          {entry.logo && <img className="company-logo" src={asset(entry.logo.path)} alt={entry.logo.alt} width={72} height={56} loading="lazy" decoding="async" />}
          <p className="timeline-org">{entry.organization}</p>
        </div>
        <h3>{entry.title}</h3>
        <p>{entry.description}</p>
        {entry.domain && <p className="timeline-domain">{entry.domain}</p>}
      </div>
    </li>
  ))}</ol>
}
