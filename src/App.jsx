import React, { useState, useEffect } from 'react'
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
  const [showTerminal, setShowTerminal] = useState(false)

  // Shortcut Ctrl+K per il modal segreto
  useEffect(() => {
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
        {showTerminal && <TerminalSection />}
      </main>
      <Footer />

      {/* Bottone per Terminale */}
      <button
        onClick={() => setShowTerminal((prev) => !prev)}
        className="fixed bottom-5 right-5 z-40 bg-indigo-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-indigo-500 transition"
      >
        {showTerminal ? '💻 Chiudi Terminale' : '💻 Apri Terminale'}
      </button>

      {/* Bottone Segreto spostato più a sinistra */}
      <button
        onClick={() => setShowSecret(true)}
        className="fixed bottom-20 right-5 z-40 bg-indigo-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-indigo-500 transition"
      >
        🔒 Modalità segreta
      </button>

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
