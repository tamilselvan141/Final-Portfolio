import { Link } from 'react-router-dom'
import phoneLeft from '../assets/project3-phones-v2/left-searching-driver.png'
import phoneCenter from '../assets/project3-phones-v2/center-good-morning.png'
import phoneRight from '../assets/project3-phones-v2/right-airport-map.png'
import ellipse from '../assets/ellipse-blue2.svg'
import ArrowIcon from './ArrowIcon'

export default function ProjectCard3({ flat = false }) {
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
        <div className="flex flex-col gap-6 overflow-hidden rounded-[8px] border-2 border-white bg-[#0084fc] p-6 sm:p-10 xl:min-h-[190px] xl:flex-row xl:items-center xl:justify-between">
          <div className="flex shrink-0 flex-col gap-1.5 text-[#e1fbfb]">
            <p className="max-w-[290px] text-[27px] leading-tight font-extrabold">
              Redesigning Airport Crew Transportation
            </p>
            <p className="text-sm font-semibold">1-Week Airport UX Hackathon</p>
          </div>

          <div className="relative aspect-[350/190] w-full shrink-0 xl:w-[350px] xl:-ml-[70px]">
            <img
              src={ellipse}
              alt=""
              className="absolute top-[10%] left-[62.57%] aspect-square w-[37.43%]"
            />
            <img
              src={ellipse}
              alt=""
              className="absolute top-[10%] left-0 aspect-square w-[37.43%]"
            />
            <img
              src={phoneLeft}
              alt=""
              className="absolute top-[22.11%] left-0 w-[45.71%] drop-shadow-xl"
            />
            <img
              src={phoneRight}
              alt=""
              className="absolute top-[23.16%] left-[56%] w-[44%] drop-shadow-xl"
            />
            <img
              src={phoneCenter}
              alt="Airport crew transportation app pickup screen"
              className="absolute top-[-4.21%] left-[22.29%] w-[55.71%] drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-11 gap-y-8 text-black/70 sm:grid-cols-2">
          <Field
            label="SITUATION"
            text="Airport crew transportation relied heavily on manual phone calls. Operations managers had limited visibility into driver availability, leading to repeated calls, miscommunication, delayed pickups, and safety concerns for drivers receiving calls while driving."
          />
          <Field
            label="TASK"
            text="Design a streamlined digital experience that connects pilots, drivers, and operations managers, reducing manual coordination while improving pickup visibility, safety, and efficiency."
          />
          <Field
            label="ACTION"
            text="Conducted user research with an airport transportation driver, mapped the existing dispatch workflow and pain points, explored solutions through divergent/convergent thinking, and designed end-to-end experiences for crew pickup requests, driver dispatch, live tracking, and operations monitoring."
          />
          <Field
            label="RESULT"
            text="Designed a unified crew transportation concept that replaces phone-based coordination with real-time driver visibility, digital trip assignment, live ETA tracking, and a safer dispatch workflow, creating a foundation for faster and more efficient airport crew movement."
          />
        </div>
      </div>

      <Link
        to="/case-studies/airport-crew-transportation"
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
      <p className="text-base font-extrabold">{label}</p>
      <p className="text-sm leading-relaxed font-medium">{text}</p>
    </div>
  )
}
