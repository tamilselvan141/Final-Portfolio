import { useNavigate } from 'react-router-dom'
import phoneLeft from '../assets/project3-phones-v2/left-searching-driver.png'
import phoneCenter from '../assets/project3-phones-v2/center-good-morning.png'
import phoneRight from '../assets/project3-phones-v2/right-airport-map.png'
import ellipse from '../assets/ellipse-blue2.svg'
import ArrowIcon from '../components/ArrowIcon'

import img01 from '../assets/case-study-airport/01.png'
import img02 from '../assets/case-study-airport/02.png'
import img03 from '../assets/case-study-airport/03.png'
import img04 from '../assets/case-study-airport/04.png'
import img05 from '../assets/case-study-airport/05.png'
import img06 from '../assets/case-study-airport/06.png'
import img07 from '../assets/case-study-airport/07.png'
import img08 from '../assets/case-study-airport/08.png'
import img09 from '../assets/case-study-airport/09.png'
import img10 from '../assets/case-study-airport/10.png'

const BODY_IMAGES = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10]

export default function CaseStudyAirport() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#f2f2f2] px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-[982px] flex-col gap-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex w-fit items-center gap-[10px] self-center rounded-full border border-white bg-white/50 px-[15px] py-3 text-sm font-semibold text-black/70"
        >
          <ArrowIcon className="h-[19px] w-5 -rotate-90" />
          Back
        </button>

        <div className="flex min-h-[190px] flex-col items-center justify-center gap-6 overflow-hidden rounded-[8px] border-2 border-white bg-[#0084fc] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex shrink-0 flex-col gap-1.5 text-[#e1fbfb]">
            <p className="max-w-[290px] text-[27px] leading-tight font-extrabold">
              Redesigning Airport Crew Transportation
            </p>
            <p className="text-sm font-semibold">1-Week Airport UX Hackathon</p>
          </div>

          <div className="relative hidden h-[190px] w-[350px] shrink-0 -ml-[70px] lg:block">
            <img src={ellipse} alt="" className="absolute top-[19px] left-[219px] size-[131px]" />
            <img src={ellipse} alt="" className="absolute top-[19px] left-0 size-[131px]" />
            <img
              src={phoneLeft}
              alt=""
              className="absolute top-[42px] left-0 w-[160px] drop-shadow-xl"
            />
            <img
              src={phoneRight}
              alt=""
              className="absolute top-[44px] left-[196px] w-[154px] drop-shadow-xl"
            />
            <img
              src={phoneCenter}
              alt="Airport crew transportation app pickup screen"
              className="absolute top-[-8px] left-[78px] w-[195px] drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-[60px]">
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
                alt={`Redesigning Airport Crew Transportation case study detail ${i + 1}`}
                className="w-full rounded-[12px] border-2 border-white object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
