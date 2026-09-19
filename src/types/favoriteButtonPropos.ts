export interface FavoriteButtonProps {
    characterId: number,
    isFavorite: boolean,
    onToggle: (characterId: number) => void
}