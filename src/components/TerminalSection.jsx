import React, { useState } from 'react'
import Terminal from 'react-terminal-ui'

const TerminalSection = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    { type: 'input', value: 'help' },
    { type: 'output', value: 'Comandi disponibili: about, projects, contact' },
  ])

  const onInput = (input) => {
    let response = ''
    switch (input.toLowerCase()) {
      case 'about':
        response = 'Sono Pasqualino Cerra, sviluppatore frontend in evoluzione verso il full stack.'
        break
      case 'projects':
        response = 'Habbit (affitti studenti), Portfolio, Altri progetti in lavorazione.'
        break
      case 'contact':
        response = 'Email: pasqualino@example.com'
        break
      case 'help':
        response = 'Comandi: about, projects, contact'
        break
      default:
        response = `Comando "${input}" non riconosciuto. Digita "help" per i comandi.`
    }

    setTerminalLineData([...terminalLineData, { type: 'input', value: input }, { type: 'output', value: response }])
  }

  return (
    <section className="p-4 md:p-16 bg-black text-green-400 font-mono">
      <h2 className="text-2xl mb-4">Terminale Interattivo</h2>
      <Terminal
        name='PortfolioCLI'
        height='300px'
        onInput={onInput}
        terminalLineData={terminalLineData}
      />
    </section>
  )
}

export default TerminalSection
