import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import ApproachSection from '../components/ApproachSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Hero />
      <ProjectsSection />
      <ApproachSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
