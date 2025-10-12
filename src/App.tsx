import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Types from './pages/Types';
import About from './pages/About';

import type { PokemonDetailType, Generation } from "./types/PokemonTypes";
import { GENERATIONS } from './utils/generations';

function App() {
  const [pokemons, setPokemons] = useState<PokemonDetailType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetailType | null>(null);
  const [typesData, setTypesData] = useState<any[]>([]);
  const [currentGeneration, setCurrentGeneration] = useState<Generation>(GENERATIONS[0]);
  const [hasMore, setHasMore] = useState(true);

  // Fetch de Pokemons
  const fetchPokemonsByGeneration = async (generation: Generation, append: boolean = false) => {
    setLoading(true);
    try{
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}`)
      const results = res.data.results;
      const detailed = await Promise.all(
        results.map((p: { url: string }) => axios.get(p.url).then(r => r.data))
      );

      if(append){
        setPokemons(prev => [...prev, ...detailed]);
      } else {
        setPokemons(detailed)
      }
      setHasMore(res.data.next !== null);
    } catch (err) {
      console.error('Error fetching Pokemon: ', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonsByGeneration(GENERATIONS[0])
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

  const loadNextGeneration = () => {
    const currentIndex = GENERATIONS.findIndex(gen => gen.id === currentGeneration.id);
    if(currentIndex < GENERATIONS.length - 1){
      const nextGen = GENERATIONS[currentIndex + 1];
      setCurrentGeneration(nextGen);
      fetchPokemonsByGeneration(nextGen, true);
    }
  };

  const selectGeneration = (genId: number) => {
    const selectedGen = GENERATIONS.find(gen => gen.id === genId);
    if(selectedGen){
      setCurrentGeneration(selectedGen);
      fetchPokemonsByGeneration(selectedGen, false);
    }
  }

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
        currentGeneration={currentGeneration}
        onLoadNext={loadNextGeneration}
        onSelectGeneration={selectGeneration}
        hasMore={hasMore}
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
  onSelectType,
  currentGeneration,
  onLoadNext,
  onSelectGeneration,
  hasMore,
}: {
  pokemons: PokemonDetailType[];
  setSelectedPokemon: (p: PokemonDetailType | null) => void;
  selectedPokemon: PokemonDetailType | null;
  loading: boolean;
  typesData: any[];
  onSearch: (id: number) => void;
  onSelectType: (list: PokemonDetailType[]) => void;
  currentGeneration: Generation;
  onLoadNext: () => void;
  onSelectGeneration: (genId: number) => void;
  hasMore: boolean;
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
              currentGeneration={currentGeneration}
              onLoadNext={onLoadNext}
              onSelectGeneration={onSelectGeneration}
              hasMore={hasMore}
            />
          }
        />
        <Route
          path='/types'
          element={<Types onSelectType={onSelectType} />}
        />
        <Route 
          path='/about'
          element={<About pokemons={pokemons} />}
        />
      </Routes>
      {!isLanding && <Footer />}
    </>
  );
}

export default App;