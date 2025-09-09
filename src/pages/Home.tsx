import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCards from "../components/PokemonCards";
import type { PokemonDetail } from "../types/PokemonTypes";

export default function Home(){
    const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
    const [loading, setLoading] = useState(true);

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
    <main className="min-h-screen bg-background text-text p-6">
      <h1 className="text-3xl font-bold mb-4 text-red-500">Pokédex</h1>
      {loading ? <p>Cargando Pokémon...</p> : <PokemonCards pokemons={pokemons} />}
    </main>
  )

}