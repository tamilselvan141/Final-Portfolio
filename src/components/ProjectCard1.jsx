import { Link } from 'react-router-dom'
import mockupA from '../assets/project1-mockup-a.png'
import mockupB from '../assets/project1-mockup-b.png'
import mockupC from '../assets/project1-mockup-c.png'
import ellipse from '../assets/ellipse-blue.svg'
import ArrowIcon from './ArrowIcon'

export default function ProjectCard1({ flat = false }) {
  return (
    <div
      className={
        flat
          ? 'flex flex-col gap-10'
          : 'flex flex-col gap-10 rounded-[12px] border border-[#e3e3e3] bg-white p-6 sm:p-9'
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

          <div className="relative hidden h-[196px] w-[478px] shrink-0 xl:block">
            <img src={ellipse} alt="" className="absolute top-0 left-[347px] size-[131px]" />
            <img src={ellipse} alt="" className="absolute top-[3px] left-0 size-[131px]" />
            {/* Principals table — rightmost, behind */}
            <img
              src={mockupA}
              alt=""
              className="absolute top-[36px] left-[242px] h-[147px] w-[207px] rounded-[8px] object-cover shadow-lg"
            />
            {/* Meeting status overview — leftmost, behind */}
            <img
              src={mockupB}
              alt=""
              className="absolute top-[38px] left-[17px] h-[145px] w-[204px] rounded-[8px] object-cover shadow-lg"
            />
            {/* Directory grid — centered, largest, in front */}
            <img
              src={mockupC}
              alt="Global Summit Coordination Platform principal directory"
              className="absolute top-[5px] left-[106px] h-[191px] w-[269px] rounded-[8px] object-cover shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-11 gap-y-8 sm:grid-cols-2">
          <Field
            label="SITUATION"
            text="The event team was managing high-stakes meetings between international principals and liaison officers across multiple stakeholders, making coordination complex and difficult to track."
          />
          <Field
            label="TASK"
            text="Design a centralized platform to simplify meeting coordination, manage assignments, and give teams better visibility into schedules and responsibilities."
          />
          <Field
            label="ACTION"
            text="Designed the platform end-to-end across principal management, liaison workflows, meetings, scheduling, alerts, and reporting. Used AI-assisted wireframes to validate the direction early with the client before finalizing the design."
          />
          <Field
            label="RESULT"
            text="Created a scalable coordination system that brought key workflows into one place, improving visibility across principals, liaison officers, meetings, and event operations."
          />
        </div>
      </div>

      <Link
        to="/case-studies/global-summit"
        className="flex items-center justify-center gap-2 rounded-[8px] bg-[#0084fc] px-6 py-[22px] text-base font-semibold text-[#f2f2f2] transition-opacity hover:opacity-90"
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
      <p className="text-base font-extrabold text-black/70">{label}</p>
      <p className="text-sm leading-relaxed font-medium text-black/60">{text}</p>
    </div>
  )
}
