import { useState } from "react";
import { pokemonTypes } from "../utils/typeColors";
import { FiRefreshCcw } from "react-icons/fi";

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
  };

  const handleReset = () => {
    onSelectType?.(null);
    setHoveredType(null);
  };

  return (
    <>
        <div className="flex gap-1">
            {/* Tipos */}
            <div className="flex overflow-x-auto gap-2 w-auto h-6 py-1 rounded-md p-2">
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
                    className="w-4 h-4 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-110 transition hover:bg-gray-900 rounded-sm p-[1px]"
                  />
                </div>
              ))}
            </div>

            {/* Nombre de Tipo */}
            <div className="flex items-center justify-center w-24 h-6 text-[10px] rounded-md px-5 text-yellow-400">
              {hoveredType
                ? hoveredType.charAt(0).toUpperCase() + hoveredType.slice(1)
                : "tipo"}
            </div>

            {/* Botón Reset */}
            <button
              onClick={handleReset}
              className="flex items-center justify-center w-6 h-6 bg-gray-800 hover:bg-gray-600 transition-colors cursor-pointer rounded-full p-[6px]"
              title="Reset filtros"
            >
              <FiRefreshCcw className="text-yellow-400" size={16} />
            </button>

        </div>
    </>
  );
}
