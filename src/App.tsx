import { BotanicalBackground } from './components/BotanicalBackground'
import { useLayoutEffect } from 'react'
import {
  ArrowRight, ArrowUp, ArrowUpRight, BrainCircuit, Code2, Database, Focus,
  GraduationCap, Layers3, Leaf, Mail, Network,
  ScanLine, Tag, Trophy, UsersRound,
} from 'lucide-react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { asset, Section, Tags, Timeline } from './components/shared'
import { achievements, education, experience, keywords, profile, projects, research, skillGroups } from './data/portfolio'

const researchIcons = [Network, Layers3, ScanLine, Focus, Leaf, Tag]
const skillIcons = [BrainCircuit, ScanLine, Code2, Database]
const achievementIcons = [Trophy, UsersRound]

function App() {
  useLayoutEffect(() => {
    // The browser may resolve the initial fragment before React mounts the sections.
    const target = document.getElementById(window.location.hash.slice(1))
    target?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <>
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
        <Section id="research" number="02" label="Research focus" title="Research Interests">
          <div className="research-grid">{research.map((area, index) => {
            const Icon = researchIcons[index] || Network
            return <article className="research-entry" key={area.title}>
              <div className="flex items-center justify-between"><span className="entry-icon" aria-hidden="true"><Icon size={21} /></span><span className="mono entry-index">{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{area.title}</h3><p>{area.description}</p>
            </article>
          })}</div>
          <div className="keywords"><p className="mono">Keywords</p><Tags items={keywords} /></div>
        </Section>
        <Section id="projects" number="03" label="Applied work" title="Selected Projects">
          <div className="project-list">{projects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className="project-meta">
                <span className="mono entry-index" aria-hidden="true">{String(index + 1).padStart(2, '0')} /</span>
                <p className="eyebrow">{project.domain}</p>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                {project.image && <img className="project-image" src={asset(project.image.path)} alt={project.image.alt} loading="lazy" decoding="async" />}
                <p>{project.description}</p>
                {project.status && <p className="status"><span className="accent-dot" />{project.status}</p>}
                {project.results && <p>{project.results}</p>}
                <Tags items={project.tags} />
                {(project.repository || project.details) && <div className="resource-links">
                  {project.repository && <a href={project.repository}>Repository <ArrowUpRight size={14} /></a>}
                  {project.details && <a href={project.details}>Project details <ArrowUpRight size={14} /></a>}
                </div>}
              </div>
            </article>
          ))}</div>
        </Section>
        <Section id="experience" number="04" label="Industry" title="Professional Experience"><Timeline entries={experience} /></Section>
        <Section id="education" number="05" label="Academic path" title="Education"><Timeline entries={education} /></Section>
        <Section id="skills" number="06" label="Methods & tools" title="Technical Skills">
          <div className="pair-grid">{skillGroups.map((group, index) => {
            const Icon = skillIcons[index] || Code2
            return <article className="skill-entry" key={group.title}><span className="entry-icon" aria-hidden="true"><Icon size={20} /></span><div><h3>{group.title}</h3><Tags items={group.skills} /></div></article>
          })}</div>
        </Section>
        <Section id="achievements" number="07" label="Recognition & service" title="Achievements">
          <div className="pair-grid">{achievements.map((item, index) => {
            const Icon = achievementIcons[index] || GraduationCap
            return <article className="skill-entry" key={item.title}><span className="entry-icon" aria-hidden="true"><Icon size={20} /></span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>
          })}</div>
        </Section>
        <section id="contact" className="contact section" aria-labelledby="contact-title" tabIndex={-1}>
          <div className="shell">
            <div className="contact-content">
              <div className="eyebrow"><span className="section-number">08</span> Contact</div>
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
    </>
  )
}

export default App
