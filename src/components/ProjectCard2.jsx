import { Link } from 'react-router-dom'
import phoneLeft from '../assets/project2-phones-v2/left-ringing.png'
import phoneCenter from '../assets/project2-phones-v2/center-arus-home.png'
import phoneRight from '../assets/project2-phones-v2/right-video-call.png'
import ArrowIcon from './ArrowIcon'

export default function ProjectCard2({ flat = false }) {
  return (
    <div
      className={
        flat
          ? 'flex flex-col gap-8'
          : 'flex flex-col gap-8 rounded-[12px] border border-[#e3e3e3] bg-white p-6 sm:p-9'
      }
      style={
        flat
          ? undefined
          : {
              backgroundImage:
                'repeating-linear-gradient(135deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 7px)',
            }
      }
    >
      <div className="flex flex-col gap-8">
        <div className="flex min-h-[182px] items-center justify-between gap-6 overflow-hidden rounded-[8px] bg-[#ffe159] p-6 pl-16 sm:py-6 sm:pl-[80px]">
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

          <div className="relative hidden h-[182px] w-[350px] shrink-0 -ml-[60px] xl:block">
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

        <div className="grid grid-cols-1 gap-x-11 gap-y-8 text-black/70 sm:grid-cols-2">
          <Field
            label="SITUATION"
            text="Employee engagement was largely driven by scheduled activities and formal initiatives. These often felt forced and didn't create enough opportunities for meaningful, everyday interactions between employees."
          />
          <Field
            label="TASK"
            text="Explore how engagement could become more natural and accessible, while creating an experience that allows employees to participate without adding pressure or disrupting their work."
          />
          <Field
            label="ACTION"
            text="Conducted interviews with 10+ employees across MNCs and mid-sized companies, synthesized key behavioral insights, defined HMWs and MVP priorities, and designed the employee and admin experiences from concept to high-fidelity prototype."
          />
          <Field
            label="RESULT"
            text="Created a 0→1 employee engagement platform focused on low-effort interactions and meaningful moments. Presented the concept at a Singapore business expo, gaining prospective interest and actionable feedback."
          />
        </div>
      </div>

      <Link
        to="/case-studies/humini-biz"
        className="flex items-center justify-center gap-2 rounded-[8px] bg-[#ffe159] px-6 py-[22px] text-base font-semibold text-[#444130] transition-opacity hover:opacity-90"
      >
        View full case study
        <ArrowIcon className="h-[19px] w-5 rotate-90" />
      </Link>
    </div>
  )
}

function Field({ label, text }) {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-base font-extrabold">{label}</p>
      <p className="text-sm leading-relaxed font-medium">{text}</p>
    </div>
  )
}
