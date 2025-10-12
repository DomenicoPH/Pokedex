import { useState } from "react";
import Header from "../components/Header";
import PokemonCards from "../components/PokemonCards";
import PokemonDetail from "../components/PokemonDetail";
import type { Generation, PokemonDetailType } from "../types/PokemonTypes";

type Props = {
  pokemons: PokemonDetailType[]
  setSelectedPokemon: (pokemon: PokemonDetailType) => void;
  loading: boolean;
  selectedPokemon: PokemonDetailType | null;
  typesData: any[];
  onSearch: (id: number) => void;
  currentGeneration: Generation;
  onLoadNext: () => void;
  onSelectGeneration: (genId: number) => void;
  hasMore: boolean;
}

export default function Home({
  pokemons, 
  setSelectedPokemon, 
  loading,
  selectedPokemon,
  typesData,
  onSearch,
  currentGeneration,
  onLoadNext,
  onSelectGeneration,
  hasMore,
}:Props){

  const [ selectedType, setSelectedType ] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredPokemons = selectedType 
    ? pokemons.filter( p => p.types.some( t => t.type.name === selectedType))
    : pokemons;

  return (
    <main className="min-h-[96.7vh] bg-red-500 p-6 pt-20">
      
      <Header 
        title='Pokedex'
        onSearch={onSearch}
        onSelectType={setSelectedType}
        currentGeneration={currentGeneration}
        onLoadNext={onLoadNext}
        onSelectGeneration={onSelectGeneration}
        hasMore={hasMore}
      />
      
      <div className="flex flex-col-reverse md:flex-row gap-6">

        {/* Cards con callback */}
        <PokemonCards 
          pokemons={filteredPokemons} 
          onSelect={setSelectedPokemon} 
          loading={loading} 
          selectedPokemon={selectedPokemon}
          currentGeneration={currentGeneration}
        />
    
        {/* Detalle */}
        <PokemonDetail 
          pokemon={selectedPokemon} 
          typesData={typesData} 
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center z-40"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative p-20 rounded-lg bg-black shadow-xl flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} // evitar cerrar si clickea dentro
          >
            <button
              className="absolute top-2 right-2 text-white hover:text-red-400"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Pokemon grande"
              className="max-w-full max-h-[60vh] rounded-lg object-contain"
            />
          </div>
        </div>
      )}

    </main>
  )

}