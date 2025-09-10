type Props = {
  id: number
  name: string
  image: string
  type: string
}

export default function PokemonCard({ id, name, image, type }: Props) {
  return (
    <div
      id='pokemon-card' 
      className="flex flex-col items-center w-auto p-4
              bg-yellow-400 text-white rounded shadow
              hover:scale-105 cursor-pointer transition-all
              font-poke"
    >
        <h2 className="text-lg font-bold">{id}</h2>
        <img src={image} alt={name} className="w-20 h-20 mb-2" />
        <h2 className="text-xs">{name}</h2>
        <p className="text-xs capitalize">{type}</p>
    </div>
  )
}