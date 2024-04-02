import { useState } from 'react'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('yellow')
  return (
    <>
      <h1>Ada School - React Hooks</h1>

      <div>
        <span className={color}>{`Counter: ${count}`}</span>
      </div>

      <button>Increase</button>
      <button>Decrease</button>
      <button>Reset</button>
    </>
  )
}

