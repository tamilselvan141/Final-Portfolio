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
        <div className="flex flex-col gap-6 overflow-hidden rounded-[8px] border-2 border-white bg-[#0084fc] xl:min-h-[196px] xl:flex-row xl:items-center xl:justify-between">
          <div className="flex shrink-0 flex-col gap-3 px-6 pt-6 sm:px-10 sm:pt-10 xl:py-10 xl:pl-10">
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

          <div className="w-full shrink-0 px-6 pb-6 sm:px-10 sm:pb-8 xl:w-[478px] xl:px-0 xl:pb-0">
            <div className="relative aspect-[478/196] w-full">
              <img
                src={ellipse}
                alt=""
                className="absolute top-0 left-[72.59%] aspect-square w-[27.41%]"
              />
              <img
                src={ellipse}
                alt=""
                className="absolute top-[1.53%] left-0 aspect-square w-[27.41%]"
              />
              {/* Principals table — rightmost, behind */}
              <img
                src={mockupA}
                alt=""
                className="absolute top-[18.37%] left-[50.63%] aspect-[207/147] w-[43.31%] rounded-[8px] object-cover shadow-lg"
              />
              {/* Meeting status overview — leftmost, behind */}
              <img
                src={mockupB}
                alt=""
                className="absolute top-[19.39%] left-[3.56%] aspect-[204/145] w-[42.68%] rounded-[8px] object-cover shadow-lg"
              />
              {/* Directory grid — centered, largest, in front */}
              <img
                src={mockupC}
                alt="Global Summit Coordination Platform principal directory"
                className="absolute top-[2.55%] left-[22.18%] aspect-[269/191] w-[56.28%] rounded-[8px] object-cover shadow-xl"
              />
            </div>
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
