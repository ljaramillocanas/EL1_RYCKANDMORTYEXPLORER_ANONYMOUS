
interface CharacterCardProps {
  name: string
  status: string
  species: string
  gender: string
  image: string
  onSelect: () => void
}


function CharacterCard({
  name,
  status,
  species,
  gender,
  image,
  onSelect
}: CharacterCardProps) {
  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Estado: {status}</p>
      <p>Especie: {species}</p>
      <p>Genero: {gender}</p>

      <button onClick={onSelect}>
        Ver detalle
      </button>
    </div>
  )
}

export default CharacterCard