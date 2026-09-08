import Nav from '../components/Nav'
import myPhoto from '../assets/contact/my-photo.png'

const LINKS = [
  { label: 'Email', href: 'mailto:tmailselvangk123@gmail.com' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/tamilselvan-designer/' },
  { label: 'Instagram', href: 'https://www.instagram.com/tamilselvan.jg/' },
  { label: 'Behance', href: 'https://www.behance.net/tamilselavnUXUI' },
]

export default function Contact() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f2f2f2] px-4 pt-12 pb-0 sm:px-6">
      <div className="mx-auto flex w-fit min-w-[320px] flex-col items-center gap-10">
        <Nav active="Contact" />

        <div
          className="w-full rounded-[16px] border-2 border-white bg-white/70 p-[14px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #ececec 0px, #ececec 1.1px, transparent 1.1px, transparent 5px)',
          }}
        >
          <div className="rounded-[12px] bg-[#fceeff] p-3 sm:p-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {LINKS.map(({ label, href }) => {
                const isExternal = href.startsWith('http')
                return (
                  <a
                    key={label}
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-center rounded-[10px] border-[1.5px] border-white bg-white/80 px-8 py-9 text-[17px] font-semibold text-[#695463] transition-colors hover:bg-[#ffe3f7]"
                  >
                    {label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1440px] justify-center">
        <img
          src={myPhoto}
          alt="Tamilselvan"
          className="h-auto w-full max-w-[420px] object-contain"
        />
      </div>
    </div>
  )
}
