import logo from '../assets/img/logo.png';
import { SiVite, SiReact, SiTailwindcss, SiAxios, SiReactrouter } from 'react-icons/si';

export default function About() {
  return (
    <section className="min-h-[96.6dvh] bg-red-500 text-white flex flex-col items-center justify-center px-6 py-12 text-center">
        <img className='w-80 pb-10' src={logo} alt="Pokedex image" />
      <h1 className="text-xl font-bold mb-6 tracking-wide drop-shadow-lg">
        About This Pokédex
      </h1>

      <p className="max-w-2xl text-xs leading-loose mb-8">
        Hi there! I'm <a href="https://portfolio-gnomono.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold px-2 text-yellow-400">Gnomono</a>, a web developer passionate about frontend development and modern technologies. This Pokédex was built as a personal project to practice React and explore the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="font-semibold px-2 text-yellow-400"> PokeAPI</a>— a public API that provides detailed data about every Pokémon, including their types, abilities, and much more.
      </p>

      <div className="max-w-2xl bg-yellow-400 text-gray-600 rounded-2xl p-6 backdrop-blur-sm shadow-lg mb-8">
        <h2 className="text-md font-normal mb-6">Technologies Used</h2>
        <div className="flex flex-wrap justify-center gap-10 px-10 text-gray-700">
          <div className="flex flex-col items-center text-[8px] max-w-20">
            <SiVite size={36} className="mb-1" />
            Vite
          </div>
          <div className="flex flex-col items-center text-[8px] max-w-20">
            <SiReact size={36} className="mb-1" />
            React 19
          </div>
          <div className="flex flex-col items-center text-[8px] max-w-20">
            <SiTailwindcss size={36} className="mb-1" />
            Tailwind CSS
          </div>
          <div className="flex flex-col items-center text-[8px] max-w-20">
            <SiAxios size={36} className="mb-1" />
            Axios
          </div>
          <div className="flex flex-col items-center text-[8px] max-w-20">
            <SiReactrouter size={36} className="mb-1" />
            React Router
          </div>
        </div>
      </div>

      <p className="text-xs opacity-80 leading-loose">
        All Pokémon data and images are © Nintendo / Game Freak / The Pokémon Company.
        <br />
        This project was made for educational and practice purposes only.
      </p>
    </section>
  );
}
