import type { FavoriteButtonProps } from "../types/favoriteButtonPropos";

function FavoriteButton({ characterId,
    isFavorite,
    onToggle }:
    FavoriteButtonProps) {
    return (
        <button
            type="button"
            className={`favorite-button ${isFavorite ? "is-favorite" : ""}`}
            aria-pressed={isFavorite}
            onClick={() => onToggle(characterId)}
        >
            {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        </button>
    )
}

export default FavoriteButton