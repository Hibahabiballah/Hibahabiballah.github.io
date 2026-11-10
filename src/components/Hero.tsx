import { ArrowDown, ArrowDownToLine, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { asset, SocialLinks } from './shared'

function Portrait() {
  return (
    <figure className="portrait">
      {profile.portrait ? (
        <img className="portrait-image" src={asset(profile.portrait.path)} alt={profile.portrait.alt} fetchPriority="high" width={1254} height={1254} />
      ) : (
        <div className="portrait-art" aria-hidden="true">
          <svg viewBox="0 0 400 350" fill="none">
            <g className="orbits" stroke="currentColor">
              <circle cx="200" cy="175" r="144" strokeDasharray="2 7" />
              <circle cx="200" cy="175" r="111" />
              <ellipse cx="200" cy="175" rx="161" ry="61" transform="rotate(-33 200 175)" />
              <ellipse cx="200" cy="175" rx="161" ry="61" transform="rotate(33 200 175)" />
              <path d="M200 16v24m0 270v24M41 175h24m270 0h24M84 64l14 14m204 194 14 14M316 64l-14 14M98 272l-14 14" />
            </g>
            <g fill="currentColor">
              <circle cx="99" cy="103" r="4"/><circle cx="321" cy="119" r="3"/><circle cx="277" cy="279" r="4"/><circle cx="77" cy="225" r="3"/><circle cx="243" cy="38" r="3"/>
            </g>
          </svg>
          <div className="monogram">{profile.initials}</div>
        </div>
      )}
      <figcaption className="mono">
        <span>{profile.institution}</span><span>{profile.location}</span>
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="home-title" tabIndex={-1}>
      <div className="shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="accent-dot" /> Computer Vision · Label-Efficient Learning</p>
            <h1 id="home-title">{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-actions flex flex-wrap gap-3">
              <a className="button primary" href="#experience">Explore My Research <ArrowDown size={16} /></a>
              {profile.cv
                ? <a className="button quiet" href={asset(profile.cv)} download>Download CV <ArrowDownToLine size={16} /></a>
                : <a className="button quiet" href={'mailto:' + profile.email + '?subject=CV%20request'}>Request CV <Mail size={16} /></a>}
            </div>
            <SocialLinks />
          </div>
          <Portrait />
        </div>
      </div>
    </section>
  )
}
