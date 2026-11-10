import { profile } from '../data/portfolio'

export function Intro({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="intro-screen" onKeyDown={event => {
      if (event.key === 'Escape') onComplete()
    }}>
      <div className="intro-identity" role="status" aria-label={'Opening ' + profile.name + ' portfolio'}>
        <div className="intro-monogram" aria-hidden="true">
          <svg viewBox="0 0 120 120" fill="none">
            <circle className="intro-outline" cx="60" cy="60" r="51" pathLength="1" />
            <path className="intro-leaf" d="M84 30c-1 14-8 21-21 22 1-13 8-21 21-22Z" />
          </svg>

        </div>
        <p>{profile.name}</p>
        <span className="intro-caption">Artificial Intelligence &amp; Computer Vision</span>
      </div>
      <button type="button" className="intro-skip" onClick={onComplete}>Skip introduction</button>
    </div>
  )
}
