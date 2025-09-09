import PokemonCard from "./PokemonCard"
import type { PokemonDetailType } from "../types/PokemonTypes"

type Props = {
  pokemons: PokemonDetailType[]
  onSelect: (pokemon: PokemonDetailType) => void;
}

export default function PokemonCards({ pokemons, onSelect }: Props) {
  return (

    <section
      id='pokemon-cards'  
      className="w-[60vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 border border-blue-500"
    >
      {pokemons.map(pokemon => (
        <div
          key={pokemon.id}
          onClick={ () => onSelect(pokemon) }
          className="cursor-pointer"
        >
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            type={pokemon.types[0]?.type.name ?? "unknown"}
          />
        </div>
      ))}
    </section>

  )
}