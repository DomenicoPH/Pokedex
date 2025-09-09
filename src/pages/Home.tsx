import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import PokemonCards from "../components/PokemonCards";
import PokemonDetail from "../components/PokemonDetail";

import type { PokemonDetailType } from "../types/PokemonTypes";

export default function Home(){
    const [pokemons, setPokemons] = useState<PokemonDetailType[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetailType | null>(null);

    /*
    useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(res => {
          setPokemons(res.data.results)
          setLoading(false)
        })
        .catch(err => {
          console.error("Error fetching Pokémon:", err)
          setLoading(false)
        })
    }, [])
    */

    useEffect(() => {
        
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(async res => {
            const results = res.data.results
            const detailed = await Promise.all(
                results.map((p: { url:string}) => axios.get(p.url).then( r => r.data ))
            )
            setPokemons(detailed)
            setLoading(false)
        })
        .catch(err => {
            console.error('Error fetching Pokemon: ', err)
            setLoading(false)
        })

    },[])

    return (
    <main className="min-h-screen bg-red-500 p-6">
      
      <Header title='Pokédex'/>
      
      {loading ? (
        <p>Cargando Pokémon...</p>
      ) : (
        <div className="flex gap-6">
          {/* Cards con callback */}
          <PokemonCards pokemons={pokemons} onSelect={setSelectedPokemon} />

          {/* Detalle */}
          <PokemonDetail pokemon={selectedPokemon} />
        </div>
      )}

    </main>
  )

}