import type { PokemonDetailType } from "../types/PokemonTypes"

type Props = {
  pokemon: PokemonDetailType | null
}

export default function PokemonDetail({ pokemon }: Props) {
  if (!pokemon) {
    return (
      <section id="pokemon-detail" className="flex-1 bg-black text-white p-4">
        <p>Selecciona un Pokémon para ver su detalle</p>
      </section>
    )
  }

  return (
    <section 
        id="pokemon-detail" 
        className="max-h-[80vh] flex-1 bg-black text-white p-4 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4 capitalize">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-32 h-32 mb-4"
      />
      <p><strong>ID:</strong> {pokemon.id}</p>
      <p><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
      {/* <p><strong>Peso:</strong> {pokemon.weight}</p> */}
      {/* <p><strong>Altura:</strong> {pokemon.height}</p> */}
    </section>
  )
}
