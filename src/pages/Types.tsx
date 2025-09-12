import { useEffect, useState } from "react";
import axios from "axios";
import { typeColorBg } from "../utils/typeColors";

type PokemonType = {
  name: string;
  url: string;
};

type TypesProps = {
  onSelectType: (pokemons: any[]) => void; // callback para enviar la lista al padre
};

export default function Types({ onSelectType }: TypesProps) {
  const [types, setTypes] = useState<PokemonType[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Traer todos los tipos
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => {
        setTypes(res.data.results);
      })
      .catch((err) => console.error("Error fetching types:", err));
  }, []);

  // 🔹 Manejar selección de tipo
  const handleSelectType = async (type: PokemonType) => {
    setSelectedType(type.name);
    setLoading(true);

    try {
      const res = await axios.get(type.url);
      const pokemons = res.data.pokemon.map((p: any) => p.pokemon); // devuelve lista de pokemons { name, url }
      onSelectType(pokemons); // enviamos al padre
    } catch (error) {
      console.error("Error fetching pokemons by type:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-wrap gap-2 p-4 pt-20 bg-red-500">
      {types.map((t) => (
        <button
          key={t.name}
          onClick={() => handleSelectType(t)}
          className={`px-3 py-1 rounded-full text-white capitalize transition
            ${typeColorBg[t.name] ?? "bg-gray-500"}
            ${selectedType === t.name ? "ring-4 ring-yellow-300" : ""}
          `}
        >
          {t.name}
        </button>
      ))}

      {loading && <p className="w-full text-center mt-4">Cargando Pokémon...</p>}
    </section>
  );
}
