import React, { useState } from 'react'
import Terminal from 'react-terminal-ui'

const TerminalSection = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    { type: 'output', value: 'Benvenuto nel terminale! Digita "help" per iniziare.' }
  ])

  const onInput = (input) => {
    let newLines = [{ type: 'input', value: input }]
    let response = ''

    switch (input.toLowerCase()) {
      case 'about':
        response = '👨‍💻 Sono Pasqualino Cerra, sviluppatore frontend in evoluzione verso il full stack.'
        break
      case 'projects':
        response = '📂 Progetti: Habbit (affitti studenti), Portfolio, altri in sviluppo.'
        break
      case 'contact':
        response = '📧 Email: pasqualinocerra13@gmail.com'
        break
      case 'social':
        response = '🔗 LinkedIn: linkedin.com/in/pasqualino-cerra-509873272\n💻 GitHub: github.com/pasqualinocerra'
        break
      case 'help':
        response = '💡 Comandi disponibili: about, projects, contact, social, clear'
        break
      case 'clear':
        setTerminalLineData([])
        return
      case 'sudo':
        response = '🔒 Permessi negati: Pasqualino ha già il pieno controllo del sistema 😎'
        break
      case 'pasqualino':
        response = '✨ Hai scoperto il comando segreto. Pasqualino è ovunque.'
        break
      default:
        response = `❌ Comando "${input}" non riconosciuto. Digita "help" per la lista comandi.`
    }

    newLines.push({ type: 'output', value: response })
    setTerminalLineData([...terminalLineData, ...newLines])
  }

  return (
    <section className="relative px-4 py-20 md:py-28 bg-gradient-to-br from-black to-gray-900 text-green-400 font-mono flex flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-2 tracking-wide">
          Terminale Interattivo
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl">
          Prova a digitare un comando come <span className="text-lime-300 font-semibold">about</span>, <span className="text-lime-300 font-semibold">projects</span> o <span className="text-lime-300 font-semibold">social</span>.
        </p>
      </div>

      <div className="w-full max-w-3xl bg-black rounded-xl border border-lime-500 shadow-[0_0_20px_rgba(132,204,22,0.5)] overflow-hidden">
        <Terminal
          name="PortfolioCLI"
          height="400px"
          onInput={onInput}
          terminalLineData={terminalLineData}
        />
      </div>
    </section>
  )
}

export default TerminalSection
