import { useEffect, useState } from "react";
import axios from "axios";
import { typeImages } from "../utils/typeColors";
import PokemonCard from "../components/PokemonCard";
import pokeball from "../assets/img/pokeicon.png";

type PokemonType = {
  name: string;
  url: string;
};

export default function Types() {
  const [types, setTypes] = useState<PokemonType[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTypeData, setSelectedTypeData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  // Traer todos los tipos
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.error("Error fetching types:", err));
  }, []);

  // Manejar selección de tipo
  const handleSelectType = async (type: PokemonType) => {
    setSelectedType(type.name);
    setLoading(true);

    try {
      const res = await axios.get(type.url);
      setSelectedTypeData(res.data);
    } catch (error) {
      console.error("Error fetching type data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper: obtener ID desde URL
  const extractIdFromUrl = (url: string) => {
    const parts = url.split("/").filter(Boolean);
    return parseInt(parts[parts.length - 1]);
  };

  return (
    <section className="min-h-[96.6dvh] flex gap-4 p-4 pt-20 bg-red-500 text-white">
      {/* Columna izquierda: tipos */}
      <div className="fixed flex flex-col gap-1">
        {types.map((t) => (
          <button
            key={t.name}
            onClick={() => handleSelectType(t)}
            className={`px-3 py-2 min-w-40 rounded-lg text-xs capitalize transition bg-gray-800 hover:bg-gray-700 flex gap-2
              ${selectedType === t.name ? "ring-1 ring-yellow-300" : ""}`}
          >
            {typeImages[t.name] && (
              <img src={typeImages[t.name]} alt={t.name} className="w-4 h-4 object-contain" />
            )}
            <span>{t.name}</span>
          </button>
        ))}
        <img className="w-[150px] flex justify-center m-auto opacity-10 pointer-events-none" src={pokeball} alt="pokeball" />
      </div>

      {/* Columna derecha: detalle del tipo */}
      <div className="flex-1 p-6 ml-44 rounded-xl bg-gray-900 overflow-auto">
        {loading && <p className="text-yellow-300">Cargando información...</p>}

        {!loading && selectedTypeData && (
          <div className="flex flex-col gap-6">
            {/* Encabezado */}
            <div className="flex items-center gap-6">
              <img
                className="w-32"
                src={typeImages[selectedTypeData.name]}
                alt={selectedTypeData.name}
              />
              <div>
                <h2 className="text-2xl capitalize font-bold mb-2">
                  {selectedTypeData.name}
                </h2>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-yellow-400">Generation:</span>{" "}
                  {selectedTypeData.generation?.name.replace("generation-", "Gen ")}
                </p>
                {selectedTypeData.move_damage_class && (
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold text-yellow-400">Move class:</span>{" "}
                    {selectedTypeData.move_damage_class.name}
                  </p>
                )}
              </div>
            </div>

            {/* Relaciones de daño */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {Object.entries(selectedTypeData.damage_relations).map(([relation, arr]: [string, any]) => (
                <div key={relation}>
                  <h3 className="font-semibold text-yellow-400 capitalize">
                    {relation.replaceAll("_", " ")}:
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {arr.length > 0 ? (
                      arr.map((t: any) => (
                        <span
                          key={t.name}
                          className="flex items-center gap-2 px-2 py-1 rounded bg-gray-800 capitalize"
                        >
                          {typeImages[t.name] && (
                            <img className="w-5" src={typeImages[t.name]} alt={t.name} />
                          )}
                          {t.name}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400 text-xs">None</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Movimientos asociados */}
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">
                Moves ({selectedTypeData.moves.length}):
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {selectedTypeData.moves.slice(0, 20).map((m: any) => (
                  <span
                    key={m.name}
                    className="px-2 py-1 rounded bg-gray-800 hover:bg-gray-700 capitalize cursor-pointer"
                    title={m.name}
                  >
                    {m.name.replace("-", " ")}
                  </span>
                ))}
                {selectedTypeData.moves.length > 20 && (
                  <span className="text-gray-400">...and more</span>
                )}
              </div>
            </div>

            {/* Pokémon asociados (Cards) */}
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">
                Pokémon of this type ({selectedTypeData.pokemon.length}):
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {selectedTypeData.pokemon.map((p: any) => {
                  const id = extractIdFromUrl(p.pokemon.url);
                  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
                  return (
                    <PokemonCard
                      key={p.pokemon.name}
                      id={id}
                      name={p.pokemon.name}
                      image={image}
                      type={selectedTypeData.name}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {!loading && !selectedTypeData && (
          <p className="text-gray-300">Select a type to view details</p>
        )}
      </div>
    </section>
  );
}
