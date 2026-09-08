import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import About from './pages/About'
import Contact from './pages/Contact'
import CaseStudyGlobalSummit from './pages/CaseStudyGlobalSummit'
import CaseStudyHuminiBiz from './pages/CaseStudyHuminiBiz'
import CaseStudyAirport from './pages/CaseStudyAirport'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/case-studies/global-summit" element={<CaseStudyGlobalSummit />} />
      <Route path="/case-studies/humini-biz" element={<CaseStudyHuminiBiz />} />
      <Route path="/case-studies/airport-crew-transportation" element={<CaseStudyAirport />} />
    </Routes>
  )
}

export default App
