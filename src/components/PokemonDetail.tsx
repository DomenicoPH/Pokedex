import type { PokemonDetailType } from "../types/PokemonTypes"
import { typeColorBg, typeColorText, typeImages } from "../utils/typeColors";

type Props = {
  pokemon: PokemonDetailType | null;
  typesData: any[];
}

export default function PokemonDetail({ pokemon, typesData }: Props) {
  
  if (!pokemon) {
    return (
      <section id="pokemon-detail" className="flex items-center justify-center flex-1 text-center px-10 bg-gray-800 text-white p-4 rounded">
        <p>Selecciona un Pokémon</p>
      </section>
    )
  };

  const detailedTypes = pokemon.types.map(t =>
    typesData.find(td => td.name === t.type.name)
  );
  //typesData.forEach(t => console.log(t.name))

  return (
    <section 
        id="pokemon-detail" 
        className="max-h-[80vh] flex-1 bg-gray-800 text-white p-4 rounded-lg"
    >

      <header className="flex items-center border-b border-b-red-500">
        <img 
          className="w-16 h-16"
          src={pokemon.sprites.front_default}
          alt={pokemon.name} 
        />
        <h2 className="text-2xl font-bold capitalize pl-4">{pokemon.name}</h2>
      </header>

      <div className="flex items-center justify-center gap-2 py-10">
        <div className="flex justify-center w-[50%]">
          <img
            className=" m-4"
            src={pokemon.sprites.other?.showdown?.front_default}
            alt={pokemon.name}
          />
        </div>

        <div className="flex flex-col gap-4 text-sm w-[50%]">
          <p><strong>ID:</strong> <span className="text-yellow-400">{pokemon.id}</span></p>
          <p><strong>Peso:</strong> <span className="text-yellow-400">{pokemon.weight}</span></p>
          <p><strong>Altura:</strong> <span className="text-yellow-400">{pokemon.height}</span></p>
          {/* <p><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p> */}
          <div>
            {/* <p className="pb-2"><strong>Tipos:</strong></p> */}
            <div className="flex flex-col gap-1">
              {detailedTypes.map((type, idx) =>
                type ? (
                  <div key={idx} className={`flex items-center gap-2 text-sm w-[170px] p-2 pl-4 rounded-full ${typeColorBg[type.name]} bg-opacity-20`}>
                    <img src={typeImages[type.name]} alt={type.name} className="w-5 h-5" />
                    <span
                      key={idx}
                      className={`py-1 rounded font-semibold ${typeColorText[type.name] || "text-gray-500"}`}
                    >
                    {type.name}
                    </span>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
        
      </div>

      <div className="flex justify-center gap-2">

        <img
          className="w-32 h-32 border border-red-500/40 p-5 rounded-lg" 
          src={pokemon.sprites.other?.dream_world?.front_default} 
          alt={pokemon.name} 
        />
        <img 
          className="w-32 h-32 border border-red-500/40 p-5 rounded-lg"
          src={pokemon.sprites.other?.home?.front_default} 
          alt={pokemon.name} 
        />
        <img 
          className="w-32 h-32 border border-red-500/40 p-5 rounded-lg"
          src={pokemon.sprites.other?.["official-artwork"]?.front_default} 
          alt={pokemon.name}
        />
        
      </div>

    </section>
  )
}
