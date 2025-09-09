type Props = {
  id: number
  name: string
  image: string
  type: string
}

export default function PokemonCard({ id, name, image, type }: Props) {
  return (
    <div className="border border-red-500 w-[150px] bg-primary text-white p-4 rounded shadow flex flex-col items-center">
        <h2 className="text-lg font-bold">{id}</h2>
        <img src={image} alt={name} className="w-20 h-20 mb-2" />
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm capitalize">{type}</p>
    </div>
  )
}