import React, { useState, useRef, useEffect } from 'react'
import { FiSend } from 'react-icons/fi'

const TerminalSection = () => {
  const [lines, setLines] = useState([
    { type: 'output', value: 'Benvenuto nel terminale! Digita "help" per iniziare.' }
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const handleInput = (e) => {
    e.preventDefault()
    const command = input.trim().toLowerCase()
    if (!command) return

    let response = ''
    switch (command) {
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
        setLines([])
        setInput('')
        return
      case 'sudo':
        response = '🔒 Permessi negati: Pasqualino ha già il pieno controllo del sistema 😎'
        break
      case 'pasqualino':
        response = '✨ Hai scoperto il comando segreto. Pasqualino è ovunque.'
        break
      default:
        response = `❌ Comando "${command}" non riconosciuto. Digita "help" per la lista comandi.`
    }

    setLines((prev) => [
      ...prev,
      { type: 'input', value: input },
      { type: 'output', value: response },
    ])
    setInput('')
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 px-4">
      <div className="w-full max-w-3xl bg-gray-800 bg-opacity-80 rounded-lg border border-gray-600 shadow-xl p-8 flex flex-col">
        {/* Header */}
        <div className="mb-6 flex items-center justify-center bg-gray-700 rounded-md py-2 shadow-inner text-gray-300 font-semibold tracking-wide select-none">
          PortfolioCLI
        </div>

        {/* Output area */}
        <div
          className="flex-grow bg-gray-900 rounded-md p-6 overflow-y-auto shadow-inner max-h-[450px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
          aria-live="polite"
        >
          {lines.length === 0 && (
            <p className="text-gray-500 italic select-none">Il terminale è vuoto. Digita "help" per iniziare.</p>
          )}

          {lines.map((line, idx) => (
            <pre
              key={idx}
              className={`whitespace-pre-wrap rounded px-3 py-1 mb-1 ${
                line.type === 'input'
                  ? 'text-lime-400 bg-gray-800 shadow-[inset_0_0_6px_#84cc16]'
                  : 'text-green-300 bg-gray-900 shadow-[0_0_5px_#22c55e]'
              }`}
            >
              {line.type === 'input' ? `> ${line.value}` : line.value}
            </pre>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input form */}
        <form
          onSubmit={handleInput}
          className="mt-6 flex items-center gap-3 border border-gray-600 rounded-md bg-gray-800 px-4 py-2 shadow-inner focus-within:ring-2 focus-within:ring-lime-400"
        >
          <span className="text-lime-400 select-none animate-pulse mr-2">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent text-lime-400 placeholder-lime-600 outline-none text-lg font-mono tracking-wide"
            placeholder="Digita un comando..."
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input"
            autoFocus
          />
          <button
            type="submit"
            aria-label="Invia comando"
            className="text-gray-900 bg-lime-400 hover:bg-lime-500 transition px-4 py-2 rounded-md flex items-center justify-center shadow-lg"
          >
            <FiSend size={20} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default TerminalSection

