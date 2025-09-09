import PokemonCard from "./PokemonCard"
import type { PokemonCardsProps } from "../types/PokemonTypes"

export default function PokemonCards({pokemons}: PokemonCardsProps){

    return(
        <div>
            PokemonCards:
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {pokemons.map(pokemon => (
              <li key={pokemon.name} className="bg-primary text-white p-4 rounded shadow">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </li>
            ))}
          </ul>
        </div>
    )
}