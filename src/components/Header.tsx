import React, { useState } from "react";

interface HeaderProps {
    title: string;
    onSearch: (id: number) => void
}

export default function Header({title, onSearch}:HeaderProps){

    const [searchId, setSearchId] = useState<string>("");
    
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
        <header className="flex flex-col items-center mb-4">
            <h1 className="text-3xl font-bold mb-4 text-yellow-400 text-center">{title}</h1>
            <div className="flex gap-2">
                <input
                    type="number"
                    placeholder="Buscar Pokémon por ID"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                    onClick={handleSearch}
                    className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-300"
                >
                    Buscar
                </button>
            </div>
        </header>
    );
}