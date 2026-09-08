import { useNavigate } from 'react-router-dom'
import mockupA from '../assets/project1-mockup-a.png'
import mockupB from '../assets/project1-mockup-b.png'
import mockupC from '../assets/project1-mockup-c.png'
import ellipse from '../assets/ellipse-blue.svg'
import ArrowIcon from '../components/ArrowIcon'

import img01 from '../assets/case-study-global-summit/01.png'
import img02 from '../assets/case-study-global-summit/02.png'
import img03 from '../assets/case-study-global-summit/03.png'
import img04 from '../assets/case-study-global-summit/04.png'
import img05 from '../assets/case-study-global-summit/05.png'
import img06 from '../assets/case-study-global-summit/06.png'
import img07 from '../assets/case-study-global-summit/07.png'
import img08 from '../assets/case-study-global-summit/08.png'
import img09 from '../assets/case-study-global-summit/09.png'
import img10 from '../assets/case-study-global-summit/10.png'
import img11 from '../assets/case-study-global-summit/11.png'
import img12 from '../assets/case-study-global-summit/12.png'
import img13 from '../assets/case-study-global-summit/13.png'
import img14 from '../assets/case-study-global-summit/14.png'
import img15 from '../assets/case-study-global-summit/15.png'
import img16 from '../assets/case-study-global-summit/16.png'

const BODY_IMAGES = [
  img01, img02, img03, img04, img05, img06, img07, img08,
  img09, img10, img11, img12, img13, img14, img15, img16,
]

export default function CaseStudyGlobalSummit() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#f2f2f2] px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-[978px] flex-col gap-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex w-fit items-center gap-[10px] self-center rounded-full border border-white bg-white/50 px-[15px] py-3 text-sm font-semibold text-black/70"
        >
          <ArrowIcon className="h-[19px] w-5 -rotate-90" />
          Back
        </button>

        <div className="flex min-h-[196px] items-center justify-between gap-6 overflow-hidden rounded-[8px] border-2 border-white bg-[#0084fc]">
          <div className="flex shrink-0 flex-col gap-3 py-6 pl-6 sm:py-10 sm:pl-10">
            <div>
              <p className="max-w-[340px] text-2xl leading-tight font-extrabold text-white sm:text-[28px]">
                Global Summit Coordination Platform
              </p>
              <p className="text-sm font-semibold text-white/80">
                Simplifying complex meeting coordination.
              </p>
            </div>
            <span className="w-fit rounded-[6px] bg-white/80 px-[18px] py-[10px] text-xs font-semibold text-[#484b4d]">
              B2B, SAAS, WEB
            </span>
          </div>

          <div className="relative hidden h-[196px] w-[478px] shrink-0 lg:block">
            <img src={ellipse} alt="" className="absolute top-0 left-[347px] size-[131px]" />
            <img src={ellipse} alt="" className="absolute top-[3px] left-0 size-[131px]" />
            <img
              src={mockupA}
              alt=""
              className="absolute top-[36px] left-[242px] h-[147px] w-[207px] rounded-[8px] object-cover shadow-lg"
            />
            <img
              src={mockupB}
              alt=""
              className="absolute top-[38px] left-[17px] h-[145px] w-[204px] rounded-[8px] object-cover shadow-lg"
            />
            <img
              src={mockupC}
              alt="Global Summit Coordination Platform principal directory"
              className="absolute top-[5px] left-[106px] h-[191px] w-[269px] rounded-[8px] object-cover shadow-xl"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-16">
          {BODY_IMAGES.map((src, i) => (
            <div
              key={src}
              className="w-full rounded-[20px] border-2 border-white bg-white/70 p-[13px]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(135deg, #ececec 0px, #ececec 1.1px, transparent 1.1px, transparent 5px)',
              }}
            >
              <img
                src={src}
                alt={`Global Summit Coordination Platform case study detail ${i + 1}`}
                className="w-full rounded-[12px] border-2 border-white object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
