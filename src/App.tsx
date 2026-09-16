import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Rick & Morty Explorer</h1>

      <p>Personajes descubiertos: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Lanzar personaje
      </button>
    </>
  )
}

export default App