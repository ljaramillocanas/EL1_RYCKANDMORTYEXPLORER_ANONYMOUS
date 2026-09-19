import { useState, useEffect } from 'react'
import CharacterCard from './components/CharacterCard'
import type { Character } from './types/character'
import './app.css'
import SearchBar from './components/SearchBar'
import CharacterDetail from "./components/CharacterDetail"

function App() {

  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(0)
  const [searchText, setSearchText] = useState<string>("")
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>("")
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)


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
  if (selectedCharacter) {
    return (
      <CharacterDetail
        character={selectedCharacter}
        onBack={() => setSelectedCharacter(null)}
    />
  )
}

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
        ) 
          : debouncedSearchText.trim() !== "" &&
             filteredCharacters.length === 0 ? (
          <p>No hay personajes en tu colección que coincidan con la búsqueda.</p>
        ) 
        : (
          filteredCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender} 
              onSelect={() => setSelectedCharacter(character)}
              />
          ))
        )}
      </div>

    </>

  )
}


export default App