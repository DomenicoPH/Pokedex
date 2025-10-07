import React, { useState } from "react";
import PokemonTypesBar from "./PokemonTypesBar";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { GENERATIONS } from "../utils/generations";
import type { Generation } from '../types/PokemonTypes';

interface HeaderProps {
    title: string;
    onSearch: (id: number) => void;
    onSelectType: (type: string | null) => void;
    currentGeneration: Generation;
    onLoadNext: () => void;
    onSelectGeneration: (genId: number) => void;
    hasMore: boolean;
}

export default function Header({
    title, 
    onSearch, 
    onSelectType,
    currentGeneration,
    onLoadNext,
    onSelectGeneration,
    hasMore
}:HeaderProps){

    const [searchId, setSearchId] = useState<string>("");
    
    const handleSearch = () => {
        const id = parseInt(searchId);
        if(!isNaN(id)){
            onSearch(id);
        } else {
            alert('Ingresa un ID válido') //Crear un componente reutilizable para esto (!)
        }
        setSearchId('');
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") handleSearch();
    }

     return (
        <header className="flex items-center mb-4 gap-[2px]">
            
            <h1 className="text-md mr-4 font-bold text-yellow-400 text-center uppercase">{title}</h1>
            <div className="flex gap-2">
                <input
                    type="number"
                    placeholder="Pokémon ID"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="text-[7px] px-2 w-40 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                    onClick={handleSearch}
                    className="bg-yellow-400 text-black text-xs px-2 rounded hover:bg-yellow-300"
                >
                    <FiSearch />
                </button>
            </div>
            <span className="px-2"></span>

            <PokemonTypesBar onSelectType={onSelectType} />

            {/* Selector de generaciones */}
                <div className="flex items-center gap-2 ml-auto">
                    <label htmlFor="generation-select" className="text-yellow-400 text-[8px] font-medium whitespace-nowrap">
                        GENERACIÓN:
                    </label>
                    <div className="relative">
                        <select 
                            id="generation-select"
                            value={currentGeneration.id}
                            onChange={(e) => onSelectGeneration(Number(e.target.value))}
                            className="text-[7px] px-2 py-1 pr-6 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none cursor-pointer"
                        >
                            {GENERATIONS.map(gen => (
                                <option key={gen.id} value={gen.id}>
                                    {gen.name} ({gen.limit})
                                </option>
                            ))}
                        </select>
                        <FiChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none text-[10px]" />
                    </div>
                </div>

                {/* Botón para cargar siguiente generación (opcional) */}
                {hasMore && (
                    <button 
                        onClick={onLoadNext}
                        className="text-[7px] px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors whitespace-nowrap"
                    >
                        + Generación
                    </button>
                )}

        </header>
    );
}