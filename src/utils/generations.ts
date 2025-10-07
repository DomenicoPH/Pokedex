import type { Generation } from "../types/PokemonTypes";

export const GENERATIONS: Generation[] = [
    { id: 1, name: 'Kanto', limit: 151, offset: 0 },
    { id: 2, name: 'Johto', limit: 100, offset: 151 },
    { id: 3, name: 'Hoenn', limit: 135, offset: 251 },
    { id: 4, name: 'Sinnoh', limit: 107, offset: 386 },
    { id: 5, name: 'Unova', limit: 156, offset: 493 },
]