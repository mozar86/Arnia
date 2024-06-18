import { useState } from 'react'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className='App'>
      <header>
        <h1>Modal</h1>
        <button onClick={openModal}>Open Modal</button>
        {isModalOpen && (
          <div className='modal'>
            <div className='conteudo-modal'>
              <span className='close' onClick={closeModal}>&times;</span>
              <h2>Salário:</h2>
              <p>Estou indo embora, é seu último pix do mês...</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default App
