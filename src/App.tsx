import { BotanicalBackground } from './components/BotanicalBackground'
import { useEffect, useLayoutEffect, useState } from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react'
import {
  ArrowRight, ArrowUp, BrainCircuit, Code2, Database,
  Mail,
  ScanLine,
} from 'lucide-react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Experience } from './components/Experience'
import { Section, Tags, Timeline, useReveal } from './components/shared'
import { education, outreach, profile, skillGroups } from './data/portfolio'

const skillIcons = [BrainCircuit, ScanLine, Code2, Database]

function App() {
  const reveal = useReveal()
  const reducedMotion = useReducedMotion()
  const [showIntro, setShowIntro] = useState(() =>
    !window.location.hash && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (!showIntro) return
    if (reducedMotion) {
      setShowIntro(false)
      return
    }
    const timer = window.setTimeout(() => setShowIntro(false), 2500)
    return () => window.clearTimeout(timer)
  }, [showIntro, reducedMotion])

  useLayoutEffect(() => {
    if (showIntro) return
    // The browser may resolve the initial fragment before React mounts the sections.
    const target = document.getElementById(window.location.hash.slice(1))
    target?.scrollIntoView({ behavior: 'instant' })
  }, [showIntro])

  if (showIntro) return <Intro onComplete={() => setShowIntro(false)} />

  return (
    <LazyMotion features={domAnimation}>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <BotanicalBackground />
        <Hero />
        <Section id="about" number="01" label="Profile" title="About Me">
          <div className="about-grid">
            <div className="prose-copy">{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
            <dl className="facts">{profile.facts.map(({ label, value }) => (
              <div className="fact" key={label}><dt className="mono">{label}</dt><dd>{value}</dd></div>
            ))}</dl>
          </div>
        </Section>
        <Section id="experience" number="02" label="Research & industry" title="Research & Professional Experience"><Experience /></Section>
        <Section id="education" number="03" label="Academic path" title="Education"><Timeline entries={education} /></Section>
        <Section id="skills" number="04" label="Methods & tools" title="Technical Skills">
          <div className="topic-grid">{skillGroups.map((item, index) => {
            const Icon = skillIcons[index] || Code2
            return (
              <m.article className="reading-entry" key={item.title} {...reveal((index % 2) * 0.06)}>
                <span className="entry-icon" aria-hidden="true"><Icon size={19} /></span>
                <h3>{item.title}</h3>
                <Tags items={item.skills} />
              </m.article>
            )
          })}</div>
        </Section>
        <Section id="outreach" number="05" label="Community & service" title="Outreach"><Timeline entries={outreach} /></Section>
        <section id="contact" className="contact section" aria-labelledby="contact-title" tabIndex={-1}>
          <div className="shell">
            <div className="contact-content">
              <div className="eyebrow"><span className="section-number">06</span> Contact</div>
              <h2 id="contact-title">Let's Connect</h2>
              <p>{profile.contact}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a className="button primary" href={'mailto:' + profile.email}><Mail size={16} /> {profile.email}</a>
                <a className="button secondary" href={profile.linkedin}>LinkedIn <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell footer">
        <p><span className="brand-mark">{profile.initials}</span> {profile.name}</p>
        <a href="#home" className="mono">Back to top <ArrowUp size={15} /></a>
      </footer>
    </LazyMotion>
  )
}

export default App
