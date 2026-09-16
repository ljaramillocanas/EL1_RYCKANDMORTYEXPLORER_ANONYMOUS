import type { Character } from "../types/character"


function CharacterCard({
    name,
    status,
    species,
    gender,
}: Character) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Estado: {status}</p>
            <p>Especie: {species}</p>
            <p>Genero: {gender}</p>
        </div>
    )
}

export default CharacterCard