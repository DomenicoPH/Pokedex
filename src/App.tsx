import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Types from './pages/Types'

import type { PokemonDetailType } from "./types/PokemonTypes";

function App() {

  const [pokemons, setPokemons] = useState<PokemonDetailType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetailType | null>(null);
  const [typesData, setTypesData] = useState<any[]>([]);

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

  // Fetch de Pokemons
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

  // Fetch de Tipos
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type")
    .then(async res => {
      const results = res.data.results;
      const detailed = await Promise.all(
        results.map((tipo: {url:string}) => axios.get(tipo.url).then(res => res.data))
      );
      setTypesData(detailed);
    })
    .catch(err => console.error('Error fetching types: ', err));
  },[])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
          path='/' 
          element={
            <Home 
              pokemons={pokemons} 
              setSelectedPokemon={setSelectedPokemon} 
              selectedPokemon={selectedPokemon}
              loading={loading}
              typesData={typesData}
            />} 
        />
        <Route 
          path='/types' 
          element={
            <Types
              onSelectType={setPokemons}
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
