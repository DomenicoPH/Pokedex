import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Types from './pages/Types';
import Landing from './pages/Landing';

import type { PokemonDetailType } from "./types/PokemonTypes";

function App() {
  const [pokemons, setPokemons] = useState<PokemonDetailType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetailType | null>(null);
  const [typesData, setTypesData] = useState<any[]>([]);

  // Fetch de Pokemons
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(async res => {
        const results = res.data.results;
        const detailed = await Promise.all(
          results.map((p: { url: string }) => axios.get(p.url).then(r => r.data))
        );
        setPokemons(detailed);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching Pokemon: ', err);
        setLoading(false);
      });
  }, []);

  // Fetch de Tipos
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type")
      .then(async res => {
        const results = res.data.results;
        const detailed = await Promise.all(
          results.map((tipo: { url: string }) => axios.get(tipo.url).then(res => res.data))
        );
        setTypesData(detailed);
      })
      .catch(err => console.error('Error fetching types: ', err));
  }, []);

  const handleSearchById = (id: number) => {
    const pokemon = pokemons.find(p => p.id === id);
    if (pokemon) {
      setSelectedPokemon(pokemon);
    } else {
      alert('Pokemon no encontrado');
    }
  };

  return (
    <HashRouter>
      <AppContent
        pokemons={pokemons}
        setSelectedPokemon={setSelectedPokemon}
        selectedPokemon={selectedPokemon}
        loading={loading}
        typesData={typesData}
        onSearch={handleSearchById}
        onSelectType={setPokemons}
      />
    </HashRouter>
  );
}

function AppContent({
  pokemons,
  setSelectedPokemon,
  selectedPokemon,
  loading,
  typesData,
  onSearch,
  onSelectType
}: {
  pokemons: PokemonDetailType[];
  setSelectedPokemon: (p: PokemonDetailType | null) => void;
  selectedPokemon: PokemonDetailType | null;
  loading: boolean;
  typesData: any[];
  onSearch: (id: number) => void;
  onSelectType: (list: PokemonDetailType[]) => void;
}) {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <>
      {!isLanding && <Navbar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/home'
          element={
            <Home
              pokemons={pokemons}
              setSelectedPokemon={setSelectedPokemon}
              selectedPokemon={selectedPokemon}
              loading={loading}
              typesData={typesData}
              onSearch={onSearch}
            />
          }
        />
        <Route
          path='/types'
          element={<Types onSelectType={onSelectType} />}
        />
      </Routes>
      {!isLanding && <Footer />}
    </>
  );
}

export default App;