import { useEffect, useRef, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../data/portfolio'

const navigation = ['Home', 'About', 'Research', 'Projects', 'Experience', 'Contact']
type Theme = 'dark' | 'light'

export function Navbar() {
  const [theme, setTheme] = useState<Theme>(() => document.documentElement.dataset.theme === 'light'
    || (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: light)')
    const sync = () => {
      if (!document.documentElement.dataset.theme) setTheme(media.matches ? 'light' : 'dark')
    }
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('main > section[id]')].reverse()
    const update = () => {
      const bottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
      const current = sections.find(section => section.getBoundingClientRect().top <= 135)
      setActive(bottom ? 'contact' : current?.id || 'home')
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    setTheme(next)
    try { localStorage.setItem('hiba-portfolio-theme', next) } catch { /* Still apply the current choice. */ }
  }

  return (
    <header className="site-header" onKeyDown={event => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <div className="shell header-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label={profile.name + ' home'}>
          <span className="brand-mark">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>
        <nav id="primary-navigation" aria-label="Primary" className={open ? 'nav open' : 'nav'}>
          {navigation.map(label => {
            const id = label.toLowerCase()
            return <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button className="icon-button" type="button" aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode'} onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button ref={menuButton} className="icon-button menu-toggle" type="button" aria-controls="primary-navigation" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
