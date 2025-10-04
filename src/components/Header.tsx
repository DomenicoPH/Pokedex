import React, { useState } from "react";
import PokemonTypesBar from "./PokemonTypesBar";

interface HeaderProps {
    title: string;
    onSearch: (id: number) => void;
    onSelectType: (type: string | null) => void;
}

export default function Header({title, onSearch, onSelectType}:HeaderProps){

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
            <h1 className="text-xl mr-4 font-bold text-yellow-400 text-center uppercase">{title}</h1>
            <div className="flex gap-2">
                <input
                    type="number"
                    placeholder="Pokémon ID"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="text-xs px-2 w-40 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                    onClick={handleSearch}
                    className="bg-yellow-400 text-black text-xs px-4 py-1 rounded hover:bg-yellow-300"
                >
                    Buscar
                </button>
            </div>
            <span className="px-2"></span>
            <PokemonTypesBar onSelectType={onSelectType} />
        </header>
    );
}