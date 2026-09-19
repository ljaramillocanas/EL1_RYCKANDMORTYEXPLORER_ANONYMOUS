import type { CharacterProps } from "../types/CharacterProps"
import FavoriteButton from "./FavoriteButton"


function CharacterCard({
    id,
    name,
    status,
    species,
    gender,
    image,
    isFavorite,
    onToggleFavorite
}: CharacterProps) {
    return (
        <div className="character-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>Estado: {status}</p>
            <p>Especie: {species}</p>
            <p>Genero: {gender}</p>


            <FavoriteButton
                characterId={id}
                isFavorite={isFavorite}
                onToggle={onToggleFavorite}
            />
        </div>

    )
}

export default CharacterCard