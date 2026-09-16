import { useState } from 'react'
import CharacterCard from './components/CharacterCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Rick & Morty Explorer</h1>

      <p>Personajes descubiertos: {count}</p>

      <CharacterCard name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={'Male'} />

      <button onClick={() => setCount(count + 1)}>
        Lanzar personaje
      </button>
    </>
  )
}

export default App