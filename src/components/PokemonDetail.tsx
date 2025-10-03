import type { PokemonDetailType } from "../types/PokemonTypes"
import { typeColorBg, typeColorText, typeImages } from "../utils/typeColors";

type Props = {
  pokemon: PokemonDetailType | null;
  typesData: any[];
}

export default function PokemonDetail({ pokemon, typesData }: Props) {
  if (!pokemon) {
    return (
      <section
        id="pokemon-detail"
        className="flex items-center justify-center flex-1 text-center px-10 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
      >
        <p className="text-gray-300">Selecciona un Pokémon</p>
      </section>
    );
  }

  const detailedTypes = pokemon.types.map(t =>
    typesData.find(td => td.name === t.type.name)
  );

  return (
    <section
      id="pokemon-detail"
      className="flex-1 bg-gray-900 text-white p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto custom-scroll"
    >
      {/* Header */}
      <header className="flex items-center gap-4 border-b border-red-500 pb-4 mb-6">
        <img
          className="w-20 h-20 rounded-full border-2 border-red-500 bg-gray-700 p-2"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <div>
          <h2 className="text-3xl font-extrabold capitalize tracking-wide">
            {pokemon.name}
          </h2>
          <p className="text-sm text-gray-400">#{pokemon.id}</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Imagen central */}
        <div className="flex justify-center items-center">
          <img
            className="max-w-[200px] drop-shadow-lg hover:scale-105 transition-transform duration-200"
            src={pokemon.sprites.other?.showdown?.front_default}
            alt={pokemon.name}
          />
        </div>

        {/* Datos básicos */}
        <div className="flex flex-col gap-3 text-sm">
          <p>
            <strong className="text-gray-300">Peso:</strong>{" "}
            <span className="text-yellow-400">{pokemon.weight}</span>
          </p>
          <p>
            <strong className="text-gray-300">Altura:</strong>{" "}
            <span className="text-yellow-400">{pokemon.height}</span>
          </p>

          {/* Tipos */}
          <div>
            <h3 className="font-semibold text-gray-300 mb-1">Tipos</h3>
            <div className="flex flex-wrap gap-2">
              {detailedTypes.map(
                (type, idx) =>
                  type && (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 text-sm px-3 py-1 rounded-full ${typeColorBg[type.name]} bg-opacity-30`}
                    >
                      <img
                        src={typeImages[type.name]}
                        alt={type.name}
                        className="w-4 h-4"
                      />
                      <span
                        className={`font-semibold ${typeColorText[type.name] || "text-gray-200"}`}
                      >
                        {type.name}
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Habilidades */}
          <div>
            <h3 className="font-semibold text-gray-300 mb-1">Habilidades</h3>
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
      <div className="mt-8">
        <h3 className="font-semibold text-gray-300 mb-3">Estadísticas</h3>
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
      <div className="mt-8">
        <h3 className="font-semibold text-gray-300 mb-3">Variantes</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            pokemon.sprites.other?.dream_world?.front_default,
            pokemon.sprites.other?.home?.front_default,
            pokemon.sprites.other?.["official-artwork"]?.front_default,
          ].map(
            (src, idx) =>
              src && (
                <img
                  key={idx}
                  className="w-28 h-28 border border-red-500/40 p-3 rounded-lg bg-gray-800 hover:scale-105 transition-transform duration-200"
                  src={src}
                  alt={pokemon.name}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}
