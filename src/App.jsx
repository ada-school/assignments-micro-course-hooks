import { useState } from 'react'
import { CountDownTimer } from './components/CountDownTimer'

export function App() {
  const [showTimer, setShowTimer] = useState(false)

  const handleFinish = () => {
    setShowTimer((prev) => !prev)
    alert('El temporizador ha finalizado!')
  }

  const handleUnmount = (data) => {
    console.log(data.message)
  }

  return (
    <>
      <h1>Aplicación de Temporizador</h1>
      <button onClick={() => setShowTimer((prev) => !prev)}>
        empezar quiz
      </button>
    </>
  )
}
