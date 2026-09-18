import { useState, useEffect } from 'react'
import CharacterCard from './components/CharacterCard'
import type { Character } from './types/character'
import './app.css'
import SearchBar from './components/SearchBar'

function App() {

  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(0)
  const [searchText, setSearchText] = useState<string>("")
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>("")


  function descubrirPersonajes() {
    if (visibleCount < characters.length) {
      setVisibleCount(visibleCount + 4)
    }
  }

  useEffect(() => {
    async function getCharacter() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        )

        if (!response.ok) {
          throw new Error("Error al obtener personajes")
        }

        const data = await response.json()

        setCharacters(data.results)
      } catch {
        setError("No se pudieron cargar los personajes")
      } finally {
        setLoading(false)
      }
    }

    getCharacter()
  }, [])

  const visibleCharacters = characters.slice(0, visibleCount)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchText(searchText)
    }, 400)

    return () => clearTimeout(timeoutId)
  }, [searchText])

  const filteredCharacters = visibleCharacters.filter((character) =>
  character.name
    .toLowerCase()
    .includes(debouncedSearchText.toLowerCase())
)

  return (
    <>
      <h1>Rick & Morty Explorer</h1>

      <p className="discovered-count">
        Personajes descubiertos: <strong>{visibleCharacters.length}</strong>
      </p>

      <button
        onClick={descubrirPersonajes}
        disabled={visibleCount >= characters.length}
      >
        {visibleCount >= characters.length
          ? "Todos los personajes descubiertos"
          : "Descubrir personajes"}
      </button>

      <SearchBar
        value={searchText}
        onChange={setSearchText}
        />
        
      <div className="characters-grid">
        {loading ? (
          <p>Cargando personajes...</p>
        ) : error ? (
          <p>{error}</p>
        ) : characters.length === 0 ? (
          <p>No se encontraron personajes.</p>
        ) : (
          filteredCharacters.map((character) => (
            <CharacterCard
              image={character.image}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender} />
          ))
        )}
      </div>

    </>

  )
}


export default App