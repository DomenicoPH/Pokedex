import PokemonCard from "./PokemonCard"
import type { PokemonDetail } from "../types/PokemonTypes"

type Props = {
  pokemons: PokemonDetail[]
}

export default function PokemonCards({ pokemons }: Props) {
  return (
    // <div className="grid grid-cols-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 border border-blue-500">
    <div className="flex flex-wrap justify-center gap-4 border border-2 border-blue-500">
      {pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          type={pokemon.types[0]?.type.name ?? "unknown"}
        />
      ))}
    </div>
  )
}