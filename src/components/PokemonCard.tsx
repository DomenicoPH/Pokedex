type Props = {
  id: number;
  name: string;
  image: string;
  type: string;
  isSelected?: boolean;
}

export default function PokemonCard({ id, name, image, /*type,*/ isSelected = false }: Props) {
  return (
    <div
      id='pokemon-card' 
      className={`flex flex-col items-center w-auto p-4
                rounded shadow font-poke cursor-pointer
                hover:scale-105 transition-all text-white
                ${isSelected ? "bg-gray-800" : "bg-yellow-400"}`}
    >
        <h2 className="text-lg font-bold">{id}</h2>
        <img src={image} alt={name} className="w-20 h-20 mb-2" />
        <h2 className="text-xs truncate max-w-full">{name}</h2>
        {/* <p className="text-xs capitalize">{type}</p> */}
    </div>
  )
}