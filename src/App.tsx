import { useState, useEffect } from 'react'
import CharacterCard from './components/CharacterCard'
import type { Character } from './types/character'
import './app.css'
import SearchBar from './components/SearchBar'
import FavoriteCounter from "./components/FavoriteCounter"

const FAVORITES_STORAGE_KEY = "rick-and-morty-favorites"


function loadFavoriteIds(): number[] {
  try {
    const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY)

    if (storedFavorites === null) {
      return []
    }

    const parsedFavorites: unknown = JSON.parse(storedFavorites)

    if (!Array.isArray(parsedFavorites)) {
      return []
    }

    return parsedFavorites.filter((characterId): characterId is number =>
      typeof characterId === 'number'
    )

  } catch {
    return []
  }
}


function App() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(loadFavoriteIds)
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(0)
  const [searchText, setSearchText] = useState<string>("")

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])

  function descubrirPersonajes() {
    if (visibleCount < characters.length) {
      setVisibleCount(visibleCount + 4)
    }
  }
  function toggleFavorite(characterId: number) {
    setFavoriteIds((currentFavoriteIds) => {
      const isAlreadyFavorite = currentFavoriteIds.includes(characterId)

      if (isAlreadyFavorite) {
        return currentFavoriteIds.filter(
          (favoriteId) => favoriteId !== characterId
        )
      }

      return [...currentFavoriteIds, characterId]
    })
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

  return (
    <>
      <h1>Rick & Morty Explorer</h1>

      <p className="discovered-count">
        Personajes descubiertos: <strong>{visibleCharacters.length}</strong>
      </p>

      <FavoriteCounter count={favoriteIds.length} />

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
          visibleCharacters.map((character) => (
            <CharacterCard
              id={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              isFavorite={favoriteIds.includes(character.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))
        )}
      </div>

    </>

  )
}


export default App