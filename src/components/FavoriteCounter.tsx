import type { FavoriteCounterProps } from "../types/favoriteCounter";

function FavoriteCounter({ count }: FavoriteCounterProps) {
    return (
        <p
            className="favorite-counter"
            aria-live="polite"
        >
            Favoritos: <strong>{count}</strong>
        </p>
    )
}

export default FavoriteCounter