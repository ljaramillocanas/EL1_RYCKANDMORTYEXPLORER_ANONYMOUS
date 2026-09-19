import type { Character } from "./character"

export interface CharacterProps {
    character: Character
    isFavorite: boolean
    onToggleFavorite: (characterId: number) => void
    onSelect: () => void
}