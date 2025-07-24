import React from 'react'

function SecretToggleButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-lg z-50"
      title="Apri modalità segreta (Ctrl+K)"
      aria-label="Apri modalità segreta"
    >
      Modalità Segreta
    </button>
  )
}

export default SecretToggleButton
