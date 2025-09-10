import Header from "../components/Header";
import PokemonCards from "../components/PokemonCards";
import PokemonDetail from "../components/PokemonDetail";
import type { PokemonDetailType } from "../types/PokemonTypes";

type Props = {
  pokemons: PokemonDetailType[]
  setSelectedPokemon: (pokemon: PokemonDetailType) => void;
  loading: boolean;
  selectedPokemon: PokemonDetailType | null;
  typesData: any[];
}

export default function Home({
  pokemons, 
  setSelectedPokemon, 
  loading,
  selectedPokemon,
  typesData,
}:Props){

  return (
    <main className="min-h-screen bg-red-500 p-6 pt-20">
      
      <Header title='Pokédex'/>
      
      {loading ? (
        <p>Cargando Pokémon...</p>
      ) : (
        <div className="flex flex-col-reverse md:flex-row gap-6">
          {/* Cards con callback */}
          <PokemonCards pokemons={pokemons} onSelect={setSelectedPokemon} />
      
          {/* Detalle */}
          <PokemonDetail pokemon={selectedPokemon} typesData={typesData} />
        </div>
      )}

    </main>
  )

}