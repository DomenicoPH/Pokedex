import { useState } from "react";
import type { PokemonDetailType } from "../types/PokemonTypes";
import { typeColorBg, typeImages } from "../utils/typeColors";

type Props = {
  pokemon: PokemonDetailType | null;
  typesData: any[];
};

export default function PokemonDetail({ pokemon, typesData }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!pokemon) {
    return (
      <section
        id="pokemon-detail"
        className="flex items-center justify-center flex-1 text-center px-10 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
      >
        <p className="text-gray-300">Select a Pokémon</p>
      </section>
    );
  }

  const detailedTypes = pokemon.types.map((t) =>
    typesData.find((td) => td.name === t.type.name)
  );

  return (
    <section
      id="pokemon-detail"
      className="relative flex-1 bg-gray-900 text-white p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto custom-scroll"
    >
      {/* Header */}
      <header className="flex items-center justify-between gap-4 border-b border-gray-500 pb-4 mb-6">
        <div className="flex items-center">
          {/* img */}
          <img
            className="w-20 h-20 rounded-full p-2"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          {/* nombre + número */}
          <div>
            <h2 className="text-xl font-extrabold capitalize tracking-wide leading-10">
              {pokemon.name}
            </h2>
            <p className="text-sm text-gray-400">#{pokemon.id}</p>
          </div>
        </div>
        {/* Tipos */}
        <div className="pr-10">
          <div className="flex flex-wrap gap-2">
            {detailedTypes.map(
              (type, idx) =>
                type && (
                  <div
                    key={idx}
                    className={`relative group flex items-center justify-center w-8 h-8 mt-2 rounded-full ${typeColorBg[type.name]} bg-opacity-30`}
                  >
                    <img
                      src={typeImages[type.name]}
                      alt={type.name}
                      className="w-4 h-4"
                    />
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-1 px-2 py-1 rounded-md bg-gray-800 text-xs text-white whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none">
                      {type.name}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Imagen central */}
        <div className="flex flex-col justify-center items-center">
          <img
            className="max-w-[200px] drop-shadow-lg hover:scale-105 transition-transform duration-200"
            src={pokemon.sprites.other?.showdown?.front_default}
            alt={pokemon.name}
          />
        </div>

        {/* Datos básicos */}
        <div className="flex flex-col gap-3 text-xs">
          <p>
            <strong className="text-gray-300">Weight:</strong>{" "}
            <span className="text-yellow-400">{pokemon.weight}</span>
          </p>
          <p>
            <strong className="text-gray-300">Height:</strong>{" "}
            <span className="text-yellow-400">{pokemon.height}</span>
          </p>        

          {/* Habilidades */}
          <div>
            <h3 className="font-semibold text-gray-300 mb-1">Abilities</h3>
            <ul className="list-disc list-inside text-yellow-400">
              {pokemon.abilities.map((ab, idx) => (
                <li key={idx} className="capitalize">
                  {ab.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 text-xs">
        <h3 className="font-semibold text-gray-300 mb-3">Stats</h3>
        <div className="flex flex-col gap-3">
          {pokemon.stats.map((stat, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-xs text-gray-400">
                <span className="capitalize">{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sprites */}
      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            // Sprites básicos
            pokemon.sprites.front_default,
            pokemon.sprites.back_default,

            // Dream World
            pokemon.sprites.other?.dream_world?.front_default,

            // Home (HD)
            pokemon.sprites.other?.home?.front_default,

            // Official artwork (HD)
            pokemon.sprites.other?.["official-artwork"]?.front_default,

            // Showdown (modernos)
            pokemon.sprites.other?.showdown?.front_default,
            pokemon.sprites.other?.showdown?.back_default,
          ].map(
            (src, idx) =>
              src && (
                <img
                  key={idx}
                  className="w-16 h-16 border border-red-500/40 p-3 rounded-lg bg-gray-800 hover:scale-105 transition-transform duration-200 cursor-pointer"
                  src={src}
                  alt={pokemon.name}
                  onClick={() => setSelectedImage(src)}
                />
              )
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center z-40 h-[80vh]"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative p-4 rounded-lg shadow-xl max-w-[80%] max-h-[80%] flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} // evitar cerrar si clickea dentro
          >
            <button
              className="absolute top-2 right-2 text-white hover:text-red-400"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Pokemon grande"
              className="max-w-full max-h-[60vh] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}