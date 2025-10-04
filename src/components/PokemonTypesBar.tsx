import { useState } from "react";
import { pokemonTypes } from "../utils/typeColors";

interface PokemonTypesBarProps {
  onHover?: (type: string | null) => void;
  onSelectType?: (type: string | null) => void;
}

export default function PokemonTypesBar({ onHover, onSelectType }: PokemonTypesBarProps) {
  const [hoveredType, setHoveredType] = useState<string | null>(null);

  const handleMouseEnter = (type: string) => {
    setHoveredType(type);
    onHover?.(type);
  };

  const handleMouseLeave = () => {
    setHoveredType(null);
    onHover?.(null);
  };

  const handleClick = (type: string) => {
    onSelectType?.(type);
  }

  return (
    <>
      <div className="flex overflow-x-auto gap-4 w-auto h-8 py-2 bg-gray-800 rounded-l-3xl p-6">
        {pokemonTypes.map((type) => (
          <div
            key={type.name}
            className="flex flex-col items-center flex-shrink-0"
            onMouseEnter={() => handleMouseEnter(type.name)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(type.name)}
          >
            <img
              src={type.img}
              alt={type.name}
              className="w-4 h-4 hover:scale-110 cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-40 h-8 text-[10px] bg-gray-800 rounded-r-3xl p-2 text-yellow-400">
        {hoveredType
          ? hoveredType.charAt(0).toUpperCase() + hoveredType.slice(1)
          : "tipo"}
      </div>
    </>
  );
}
