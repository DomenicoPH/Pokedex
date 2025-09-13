import React, { useState } from "react";
import { typeImages, pokemonTypes } from "../utils/typeColors";

interface HeaderProps {
    title: string;
    onSearch: (id: number) => void
}

export default function Header({title, onSearch}:HeaderProps){

    const [searchId, setSearchId] = useState<string>("");
    const [hoveredType, setHoveredType] = useState<string | null>(null);
    
    const handleSearch = () => {
        const id = parseInt(searchId);
        if(!isNaN(id)){
            onSearch(id);
        } else {
            alert('Ingresa un ID válido')
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
            <div className="flex overflow-x-auto gap-4 w-auto h-8 py-2 bg-gray-800 rounded-l-3xl p-6">
                {pokemonTypes.map((type) => (
                    <div
                        key={type.name}
                        className="flex flex-col items-center flex-shrink-0"
                        onMouseEnter={() => setHoveredType(type.name)}
                        onMouseLeave={() => setHoveredType(null)}
                    >
                        <img
                            src={type.img}
                            alt={type.name}
                            className="w-4 h-4 hover:scale-110 cursor-pointer"
                        />
                        {/* <span className="text-[8px] text-white capitalize">{type.name}</span> */}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center w-40 h-8 text-[10px] bg-gray-800 rounded-r-3xl p-2 text-yellow-400">
                {hoveredType ? hoveredType.charAt(0).toUpperCase() + hoveredType.slice(1) : "tipo"}
            </div>
        </header>
    );
}