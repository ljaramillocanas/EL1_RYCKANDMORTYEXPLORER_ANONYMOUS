import type { Character } from "./character"

export interface CharacterProps extends Character {
    isFavorite: boolean
    onToggleFavorite: (characterId: number) => void
}