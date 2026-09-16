import { useState, useEffect } from 'react'
import CharacterCard from './components/CharacterCard'
import type { Character } from './types/character'

function App() {

  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    async function getCharacter() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      )

      const data = await response.json()

      setCharacters(data.results)
    }
    getCharacter()
  }, [])

  return (
    <>
      <h1>Rick & Morty Explorer</h1>

      <p>Personajes descubiertos: {characters.length}</p>

      {characters.map((character) => (
        <CharacterCard
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
        />
      ))}
    </>
  )
}

export default App