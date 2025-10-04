import normal from "../assets/img/types/normal.svg"
import fire from "../assets/img/types/fire.svg"
import water from "../assets/img/types/water.svg"
import electric from "../assets/img/types/electric.svg"
import grass from "../assets/img/types/grass.svg"
import ice from "../assets/img/types/ice.svg"
import fighting from "../assets/img/types/fighting.svg"
import poison from "../assets/img/types/poison.svg"
import ground from "../assets/img/types/ground.svg"
import flying from "../assets/img/types/flying.svg"
import psychic from "../assets/img/types/psychic.svg"
import bug from "../assets/img/types/bug.svg"
import rock from "../assets/img/types/rock.svg"
import ghost from "../assets/img/types/ghost.svg"
import dragon from "../assets/img/types/dragon.svg"
import dark from "../assets/img/types/dark.svg"
import steel from "../assets/img/types/steel.svg"
import fairy from "../assets/img/types/fairy.svg"

export const pokemonTypes = [
  {
    name: "normal",
    colorText: "text-gray-400",
    colorBg: "bg-gray-400",
    img: normal
  },
  {
    name: "fire",
    colorText: "text-red-500", 
    colorBg: "bg-red-500", 
    img: fire
  },
  {
    name: "water",
    colorText: "text-blue-500",
    colorBg: "bg-blue-500",
    img: water
  },
  {
    name: "electric",
    colorText: "text-yellow-400",
    colorBg: "bg-yellow-400",
    img: electric
  },
  {
    name: "grass",
    colorText: "text-green-500",
    colorBg: "bg-green-500",
    img: grass
  },
  {
    name: "ice",
    colorText: "text-cyan-400",
    colorBg: "bg-cyan-400",
    img: ice
  },
  {
    name: "fighting",
    colorText: "text-orange-700",
    colorBg: "bg-orange-700",
    img: fighting
  },
  {
    name: "poison", 
    colorText: "text-purple-500",
    colorBg: "bg-purple-500",
    img: poison
  },
  {
    name: "ground",
    colorText: "text-yellow-600",
    colorBg: "bg-yellow-600",
    img: ground
  },
  {
    name: "flying",
    colorText: "text-sky-400",
    colorBg: "bg-sky-400",
    img: flying
  },
  {
    name: "psychic",
    colorText: "text-pink-500",
    colorBg: "bg-pink-500",
    img: psychic
  },
  {
    name: "bug",
    colorText: "text-lime-500",
    colorBg: "bg-lime-500",
    img: bug
  },
  {
    name: "rock",
    colorText: "text-stone-600",
    colorBg: "bg-stone-600",
    img: rock
  },
  {
    name: "ghost",
    colorText: "text-indigo-600",
    colorBg: "bg-indigo-600",
    img: ghost
  },
  {
    name: "dragon",
    colorText: "text-purple-600",
    colorBg: "bg-purple-600",
    img: dragon
  },
  {
    name: "dark",
    colorText: "text-gray-800",
    colorBg: "bg-gray-800",
    img: dark
  },
  {
    name: "steel",
    colorText: "text-slate-500",
    colorBg: "bg-slate-500",
    img: steel
  },
  {
    name: "fairy",
    colorText: "text-pink-300",
    colorBg: "bg-pink-300",
    img: fairy
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