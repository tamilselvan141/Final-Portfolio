import { useNavigate } from 'react-router-dom'
import phoneLeft from '../assets/project2-phones-v2/left-ringing.png'
import phoneCenter from '../assets/project2-phones-v2/center-arus-home.png'
import phoneRight from '../assets/project2-phones-v2/right-video-call.png'
import ArrowIcon from '../components/ArrowIcon'

import img01 from '../assets/case-study-humini-biz/01.png'
import img02 from '../assets/case-study-humini-biz/02.png'
import img03 from '../assets/case-study-humini-biz/03.png'
import img04 from '../assets/case-study-humini-biz/04.png'
import img05 from '../assets/case-study-humini-biz/05.png'
import img06 from '../assets/case-study-humini-biz/06.png'
import img07 from '../assets/case-study-humini-biz/07.png'
import img08 from '../assets/case-study-humini-biz/08.png'
import img09 from '../assets/case-study-humini-biz/09.png'
import img10 from '../assets/case-study-humini-biz/10.png'
import img11 from '../assets/case-study-humini-biz/11.png'
import img12 from '../assets/case-study-humini-biz/12.png'
import img13 from '../assets/case-study-humini-biz/13.png'
import img14 from '../assets/case-study-humini-biz/14.png'
import img15 from '../assets/case-study-humini-biz/15.png'
import img16 from '../assets/case-study-humini-biz/16.png'
import img17 from '../assets/case-study-humini-biz/17.png'
import img18 from '../assets/case-study-humini-biz/18.png'
import img19 from '../assets/case-study-humini-biz/19.png'
import img20 from '../assets/case-study-humini-biz/20.png'
import img21 from '../assets/case-study-humini-biz/21.png'

const BODY_IMAGES = [
  img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21,
]

export default function CaseStudyHuminiBiz() {
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

        <div className="flex min-h-[182px] flex-col items-center justify-center gap-6 overflow-hidden rounded-[8px] bg-[#ffe159] p-8 pl-16 sm:flex-row sm:items-center sm:justify-between sm:py-6 sm:pl-[80px]">
          <div className="flex w-[230px] shrink-0 flex-col gap-3">
            <div>
              <p className="text-[28px] font-extrabold text-[#4d4b46] sm:text-[32px]">
                Humini Biz
              </p>
              <p className="text-sm font-semibold text-black/60">
                Making employee engagement simple, human, and meaningful.
              </p>
            </div>
            <span className="w-fit rounded-[6px] bg-white/70 px-[18px] py-[10px] text-xs font-semibold text-black/60">
              0-1, B2B, SAAS, MOBILE APP
            </span>
          </div>

          <div className="relative hidden h-[182px] w-[350px] shrink-0 -ml-[60px] lg:block">
            <img
              src={phoneLeft}
              alt=""
              className="absolute top-[45px] left-0 w-[165px] drop-shadow-xl"
            />
            <img
              src={phoneRight}
              alt=""
              className="absolute top-[43px] left-[186px] w-[164px] drop-shadow-xl"
            />
            <img
              src={phoneCenter}
              alt="Humini Biz app home screen"
              className="absolute top-[4px] left-[74px] w-[203px] drop-shadow-2xl"
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
                alt={`Humini Biz case study detail ${i + 1}`}
                className="w-full rounded-[12px] border-2 border-white object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
