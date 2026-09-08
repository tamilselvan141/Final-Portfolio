import Nav from './Nav'
import blobOrange from '../assets/blob-orange.svg'
import blobGreen from '../assets/blob-green.svg'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#fceeff] pt-12 pb-20">
      <img
        src={blobOrange}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 opacity-70 blur-3xl"
      />
      <img
        src={blobGreen}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 opacity-70 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-10 px-4">
        <Nav active="Home" />
        <h1 className="text-center text-2xl leading-snug font-bold text-black/70 sm:text-4xl sm:leading-[1.15]">
          I am a Product Designer who helps startups turn complex ideas into
          simple and delightful products.
        </h1>
      </div>

      <div className="relative mx-auto mt-12 max-w-[900px] px-4">
        <div
          className="rounded-[10px] border-2 border-white bg-white/70 p-[14px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #ececec 0px, #ececec 1.1px, transparent 1.1px, transparent 5px)',
          }}
        >
          <div className="aspect-video overflow-hidden rounded-[8px] bg-white">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/MuXUQh1HIC0?si=OPg-6wohQfUEvcwm"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[113px] blur-[5.5px]"
        style={{ backgroundImage: 'linear-gradient(to bottom, #fceeff, #f2f2f2)' }}
      />
    </section>
  )
}
