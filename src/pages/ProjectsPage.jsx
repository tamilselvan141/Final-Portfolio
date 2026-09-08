import Nav from '../components/Nav'
import ProjectCard1 from '../components/ProjectCard1'
import ProjectCard2 from '../components/ProjectCard2'
import ProjectCard3 from '../components/ProjectCard3'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-10">
        <Nav active="Projects" />

        <div className="flex w-full flex-col gap-10">
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
    </div>
  )
}
