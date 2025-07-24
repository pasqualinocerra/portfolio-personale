import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WelcomeScreen from './components/WelcomeScreen'
import SkillMap from './components/SkillMap'
import Timeline from './components/Timeline'
import SecretToggleButton from './components/SecretToggleButton'
import SecretModal from './components/SecretModal'
import TerminalSection from './components/TerminalSection'
import AboutMe from './components/AboutMe'

import ThankYou from './pages/ThankYou'

function MainApp() {
  const [entered, setEntered] = useState(false)
  const [showSecret, setShowSecret] = useState(false)

  // Gestione shortcut Ctrl+K per mostrare il modal segreto
  // Se usi react-hotkeys-hook, importalo anche qui
  // oppure puoi spostarlo nel componente WelcomeScreen o Navbar se preferisci
  // Per semplicità mantengo solo qui:
  React.useEffect(() => {
    function onKeyDown(e) {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        setShowSecret(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  if (!entered) {
    return <WelcomeScreen onEnter={() => setEntered(true)} />
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <AboutMe />
        <SkillMap />
        <Timeline />
        <Projects />
        <Testimonials />
        <Contact />
        <TerminalSection />
      </main>
      <Footer />

      {/* Bottone visibile sempre */}
      <SecretToggleButton onClick={() => setShowSecret(true)} />
      {showSecret && <SecretModal onClose={() => setShowSecret(false)} />}
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  )
}

export default App
