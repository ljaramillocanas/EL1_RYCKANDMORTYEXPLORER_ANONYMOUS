

import type { CharacterProps } from "../types/characterProps"
import FavoriteButton from "./FavoriteButton"


function CharacterCard({
    character,
    onSelect,
    isFavorite,
    onToggleFavorite
}: CharacterProps) {
    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Estado: {character.status}</p>
            <p>Especie: {character.species}</p>
            <p>Genero: {character.gender}</p>

            <button onClick={onSelect}>
                Ver detalle
            </button>
            <FavoriteButton
                characterId={character.id}
                isFavorite={isFavorite}
                onToggle={onToggleFavorite}
            />
        </div>


    )
}

export default CharacterCard