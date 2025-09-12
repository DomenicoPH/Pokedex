export const pokemonTypes = [
  {
    name: "normal",
    colorText: "text-gray-400",
    colorBg: "bg-gray-400",
    img: "/src/assets/img/types/normal.svg"
  },
  {
    name: "fire",
    colorText: "text-red-500", 
    colorBg: "bg-red-500", 
    img: "/src/assets/img/types/fire.svg"
  },
  {
    name: "water",
    colorText: "text-blue-500",
    colorBg: "bg-blue-500",
    img: "/src/assets/img/types/water.svg"
  },
  {
    name: "electric",
    colorText: "text-yellow-400",
    colorBg: "bg-yellow-400",
    img: "/src/assets/img/types/electric.svg"
  },
  {
    name: "grass",
    colorText: "text-green-500",
    colorBg: "bg-green-500",
    img: "/src/assets/img/types/grass.svg"
  },
  {
    name: "ice",
    colorText: "text-cyan-400",
    colorBg: "bg-cyan-400",
    img: "/src/assets/img/types/ice.svg"
  },
  {
    name: "fighting",
    colorText: "text-orange-700",
    colorBg: "bg-orange-700",
    img: "/src/assets/img/types/fighting.svg"
  },
  {
    name: "poison", 
    colorText: "text-purple-500",
    colorBg: "bg-purple-500",
    img: "/src/assets/img/types/poison.svg"
  },
  {
    name: "ground",
    colorText: "text-yellow-600",
    colorBg: "bg-yellow-600",
    img: "/src/assets/img/types/ground.svg"
  },
  {
    name: "flying",
    colorText: "text-sky-400",
    colorBg: "bg-sky-400",
    img: "/src/assets/img/types/flying.svg"
  },
  {
    name: "psychic",
    colorText: "text-pink-500",
    colorBg: "bg-pink-500",
    img: "/src/assets/img/types/psychic.svg"
  },
  {
    name: "bug",
    colorText: "text-lime-500",
    colorBg: "bg-lime-500",
    img: "/src/assets/img/types/bug.svg"
  },
  {
    name: "rock",
    colorText: "text-stone-600",
    colorBg: "bg-stone-600",
    img: "/src/assets/img/types/rock.svg"
  },
  {
    name: "ghost",
    colorText: "text-indigo-600",
    colorBg: "bg-indigo-600",
    img: "/src/assets/img/types/ghost.svg"
  },
  {
    name: "dragon",
    colorText: "text-purple-600",
    colorBg: "bg-purple-600",
    img: "/src/assets/img/types/dragon.svg"
  },
  {
    name: "dark",
    colorText: "text-gray-800",
    colorBg: "bg-gray-800",
    img: "/src/assets/img/types/dark.svg"
  },
  {
    name: "steel",
    colorText: "text-slate-500",
    colorBg: "bg-slate-500",
    img: "/src/assets/img/types/steel.svg"
  },
  {
    name: "fairy",
    colorText: "text-pink-300",
    colorBg: "bg-pink-300",
    img: "/src/assets/img/types/fairy.svg"
  }
] as const;

// También puedes crear un objeto de utilidad para búsquedas rápidas
export const typeColorText: Record<string, string> = Object.fromEntries(
  pokemonTypes.map(type => [type.name, type.colorText])
);

export const typeColorBg: Record<string, string> = Object.fromEntries(
  pokemonTypes.map(type => [type.name, type.colorBg])
);

export const typeImages: Record<string, string> = Object.fromEntries(
  pokemonTypes.map(type => [type.name, type.img])
);