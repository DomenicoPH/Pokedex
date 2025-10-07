import { useEffect, useRef } from "react"
import PokemonCard from "./PokemonCard"
import Cargando from "../ui/Cargando"
import type { PokemonDetailType, Generation } from "../types/PokemonTypes"

type Props = {
  pokemons: PokemonDetailType[]
  loading: boolean
  onSelect: (pokemon: PokemonDetailType) => void;
  selectedPokemon: PokemonDetailType | null;
  currentGeneration: Generation;
}

export default function PokemonCards({ 
  pokemons, 
  onSelect, 
  loading, 
  selectedPokemon,
}: Props) {

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<{ [key:number]: HTMLDivElement | null }>({});

  useEffect(() => {
    const card = selectedPokemon ? cardRefs.current[selectedPokemon.id] : null;
    const container = containerRef.current;

    if (selectedPokemon && card && container) {
      const cardTop = card.offsetTop;
      const cardHeight = card.offsetHeight;
      const containerHeight = container.clientHeight;

      container.scrollTo({
        top: cardTop - containerHeight / 2 + cardHeight / 2,
        behavior: "smooth"
      });
    }
  }, [selectedPokemon]);

  return (
    <section>
      {loading ? (

        <div className="flex justify-center w-[90vw] md:w-[60vw] h-[80vh] bg-yellow-400 rounded">
          <Cargando />
        </div>

      ) : (

        <div
          id='pokemon-cards'
          ref={containerRef}
          className="w-[90vw] md:w-[60vw] max-h-[80vh] 
                overflow-y-scroll overflow-x-hidden
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 
                custom-scroll pr-4"
        >
          {pokemons.map(pokemon => (
            <div
              key={pokemon.id}
              onClick={ () => onSelect(pokemon) }
              ref={(el) => {(cardRefs.current[pokemon.id] = el); return void 0}}
              className="cursor-pointer"
            >
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                type={pokemon.types[0]?.type.name ?? "unknown"}
                isSelected={selectedPokemon?.id === pokemon.id}
              />
            </div>  
          ))}

        </div>
        
      )}
      
    </section>

  )
}