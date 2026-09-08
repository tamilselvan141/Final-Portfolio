const LINKS = [
  { label: 'Email', href: 'mailto:tmailselvangk123@gmail.com' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/tamilselvan-designer/' },
  { label: 'Instagram', href: 'https://www.instagram.com/tamilselvan.jg/' },
  { label: 'Behance', href: 'https://www.behance.net/tamilselavnUXUI' },
]

export default function ContactSection() {
  return (
    <section className="bg-[#f2f2f2] px-4 py-20 sm:px-6">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-10">
        <h2 className="text-center text-3xl font-bold text-black/80">
          Let&rsquo;s Stay In Touch
        </h2>
        <div
          className="w-full rounded-[16px] border-2 border-white bg-white/70 p-[14px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #ececec 0px, #ececec 1.1px, transparent 1.1px, transparent 5px)',
          }}
        >
          <div className="rounded-[12px] border-2 border-white bg-[#fceeff] p-6 sm:p-10">
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
    </section>
  )
}
