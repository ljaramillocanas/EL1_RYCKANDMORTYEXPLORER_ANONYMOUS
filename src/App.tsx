import { useState, useEffect } from 'react'
import CharacterCard from './components/CharacterCard'
import './app.css'
import SearchBar from './components/SearchBar'
import FavoriteCounter from "./components/FavoriteCounter"
import CharacterDetail from "./components/CharacterDetail"
import type { Character } from './types/character'
import ErrorState from './components/ErrorState'
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
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>("")
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)


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
  function retryRequest() {
    setRetryCount((currentCount) => currentCount + 1)
  }

  // Se actualiza rf0-1 para aplicacion de rf06
  useEffect(() => {
    const controller = new AbortController()
    setError(null)
    async function getCharacter() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character",
          {
            signal: controller.signal
          }
        )

        if (!response.ok) {
          throw new Error("Error al obtener personajes")
        }

        const data = await response.json()

        setCharacters(data.results)
      } catch {
        if (!controller.signal.aborted)
          setError("No se pudieron cargar los personajes")
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }

      }
    }

    getCharacter()

    return () => {
      controller.abort()
    }
  }, [retryCount])

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
          <ErrorState
            message={error}
            onRetry={retryRequest}
          />
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
                  character={character}
                  isFavorite={favoriteIds.includes(character.id)}
                  onToggleFavorite={toggleFavorite}
                  onSelect={() => setSelectedCharacter(character)}
                />

              ))
            )}
      </div>

    </>

  )
}


export default App