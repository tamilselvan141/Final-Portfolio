import ProjectCard1 from './ProjectCard1'
import ProjectCard2 from './ProjectCard2'
import ProjectCard3 from './ProjectCard3'

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#f2f2f2] px-4 py-20 sm:px-6">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-10">
        <h2 className="text-center text-3xl font-bold text-black/80">Projects</h2>
        <div className="flex flex-col gap-10">
          <div
            className="rounded-[16px] border-2 border-white bg-white/70 p-[14px]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, #ececec 0px, #ececec 1.1px, transparent 1.1px, transparent 5px)',
            }}
          >
            <div className="rounded-[12px] border-2 border-white bg-[#ecf6ff] p-3 sm:p-6">
              <ProjectCard1 flat />
            </div>
          </div>
          <div
            className="rounded-[16px] border-2 border-white bg-white/70 p-[14px]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, #ececec 0px, #ececec 1.1px, transparent 1.1px, transparent 5px)',
            }}
          >
            <div className="rounded-[12px] border-2 border-white bg-[#fffbea] p-3 sm:p-6">
              <ProjectCard2 flat />
            </div>
          </div>
          <div
            className="rounded-[16px] border-2 border-white bg-white/70 p-[14px]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, #ececec 0px, #ececec 1.1px, transparent 1.1px, transparent 5px)',
            }}
          >
            <div className="rounded-[12px] border-2 border-white bg-[#ecf6ff] p-3 sm:p-6">
              <ProjectCard3 flat />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
