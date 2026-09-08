import Nav from '../components/Nav'
import hiBanner from '../assets/about/hi-banner.png'
import momentHackathon from '../assets/about/moment-hackathon.png'
import momentDesignFusion from '../assets/about/moment-design-fusion.png'
import momentSilverMedal from '../assets/about/moment-silver-medal.png'

const MOMENTS = [
  { src: momentHackathon, caption: '6th/20 Lollypop Design Hackathon' },
  { src: momentDesignFusion, caption: '22nd / 600+ Design Fusion' },
  { src: momentSilverMedal, caption: 'College Silver Medal', rotate: true },
]

export default function About() {
  return (
    <div id="about" className="min-h-screen bg-[#f2f2f2] px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-[1010px] flex-col items-center gap-12">
        <Nav active="About" />

        <div
          className="w-full rounded-[16px] border-2 border-white bg-white/70 p-[14px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #ececec 0px, #ececec 1.1px, transparent 1.1px, transparent 5px)',
          }}
        >
          <div className="h-[220px] overflow-hidden rounded-[10px] border-2 border-white sm:h-[280px]">
            <img
              src={hiBanner}
              alt="Hi"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 self-start text-base leading-relaxed text-black/70">
          <p>
            I&rsquo;m Tamilselvan, a Product Designer based in Bengaluru, currently designing
            end-to-end B2B and B2C products at Arus Innovation.
          </p>
          <p>
            My path into design wasn&rsquo;t a straight line. I studied Computer Science, but
            somewhere along the way I realized coding wasn&rsquo;t where my strengths or my
            interest actually lived. I&rsquo;d always been drawn to creative work: writing,
            ideas, expression. When I discovered UX design, it felt like the first time my
            creative side and my analytical side were solving the same problem together. I
            taught myself through Google&rsquo;s UX Design course on Coursera, built a
            portfolio from nothing, and landed my first design role soon after.
          </p>
          <p>
            Since then, I&rsquo;ve designed 0&rarr;1 products solo from a scattered idea to a
            shipped, validated experience and more recently, I&rsquo;ve been building an
            AI-driven design system that connects Claude, Figma, and GitHub into one workflow.
            I care about designing things that are genuinely useful, not just polished.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          <h2 className="text-center text-3xl font-bold text-black/80">Moments I&rsquo;m Proud Of</h2>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
            {MOMENTS.map(({ src, caption, rotate }) => (
              <div key={caption} className="flex flex-col items-center gap-6">
                <div className="relative h-[217px] w-full overflow-hidden rounded-[10px] border border-white bg-white shadow-sm">
                  {rotate ? (
                    <img
                      src={src}
                      alt={caption}
                      className="absolute top-1/2 left-1/2 h-[480px] w-auto -translate-x-1/2 -translate-y-1/2 rotate-90"
                    />
                  ) : (
                    <img src={src} alt={caption} className="h-full w-full object-cover" />
                  )}
                </div>
                <p className="text-center text-base font-semibold text-black/70">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
