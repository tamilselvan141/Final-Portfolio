import { Link } from 'react-router-dom'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  {
    label: 'Resume',
    href: 'https://docs.google.com/document/d/16K3t_mqWfk_g31298P6XuwU6Sxa5Dhel/edit?usp=sharing&ouid=108210435023768210313&rtpof=true&sd=true',
  },
]

export default function Nav({ active = 'Home' }) {
  return (
    <nav className="inline-flex flex-wrap items-center justify-center gap-2 rounded-[10px] border border-white bg-white/40 px-4 py-3 backdrop-blur-sm sm:px-6">
      {LINKS.map(({ label, to, href }) => {
        const isActive = label === active
        const className = isActive
          ? 'rounded-[4px] border border-white px-4 py-3 text-sm font-semibold text-[#ebebeb] shadow-[inset_4px_5px_9px_0px_rgba(255,255,255,0.35)] drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.15)]'
          : 'rounded-[4px] bg-white px-4 py-3 text-sm font-semibold text-black/70'
        const style = isActive
          ? { backgroundImage: 'linear-gradient(257deg, #0084fc 2%, #007ef0 98%)' }
          : undefined

        if (to) {
          return (
            <Link key={label} to={to} className={className} style={style}>
              {label}
            </Link>
          )
        }

        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            style={style}
          >
            {label}
          </a>
        )
      })}
    </nav>
  )
}
