import PokemonCard from "./PokemonCard"
import type { PokemonDetailType } from "../types/PokemonTypes"
import Cargando from "../ui/Cargando"

type Props = {
  pokemons: PokemonDetailType[]
  loading: boolean
  onSelect: (pokemon: PokemonDetailType) => void;
}

export default function PokemonCards({ pokemons, onSelect, loading }: Props) {
  return (

    <section>

      {loading ? (

        <div className="flex justify-center w-[90vw] md:w-[60vw] h-[80vh] bg-yellow-400 rounded">
          <Cargando />
        </div>

      ) : (

        <div
          id='pokemon-cards'  
          className="w-[90vw] md:w-[60vw] max-h-[80vh] 
                overflow-y-scroll overflow-x-hidden
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 
                custom-scroll pr-4"
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

        </div>
        
      )}
      
    </section>

  )
}