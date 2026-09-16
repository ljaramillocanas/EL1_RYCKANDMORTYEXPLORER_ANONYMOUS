import type { Character } from "../types/character"


function CharacterCard({
    id,
    name,
    status,
    species,
    gender,
    image
}: Character) {
    return (
        <div className="character-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>Estado: {status}</p>
            <p>Especie: {species}</p>
            <p>Genero: {gender}</p>
        </div>
    )
}

export default CharacterCard