import type { Character } from "../types/character"

interface CharacterDetailProps {
  character: Character
  onBack: () => void
}

function CharacterDetail({
  character,
  onBack
}: CharacterDetailProps) {
  // aquí construiremos la vista
return (
  <section className="character-detail">
    <button onClick={onBack}>Volver a la colección</button>

    <img src={character.image} alt={character.name} />
    <h2>{character.name}</h2>
    <p>Estado: {character.status}</p>
    <p>Especie: {character.species}</p>
    <p>Genero: {character.gender}</p>
    <p>Tipo: {character.type}</p>
    <p>Origen: {character.origin.name}</p>
    <p>Ubicación: {character.location.name}</p>
    <p>Episodios: {character.episode.length}</p>
  </section>
)
}   

export default CharacterDetail