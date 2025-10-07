import { Link } from 'react-router-dom'
import pokeicon from '../assets/img/pokeicon.png'

export default function Navbar(){
    return(
        <nav className="flex justify-center items-center h-10 bg-yellow-400 fixed w-screen z-10">
            <div className="flex justify-between w-[100vw] px-6">
                <div className="flex items-center gap-1">
                    <img src={pokeicon} alt="Pokedex logo" className="h-[25px]" />
                    <h2 className="font-poke text-xs pt-1"><Link to="/">Pokédex</Link></h2>
                </div>
                <div className="flex items-center gap-4 text-xs">
                    <Link to='/types'>Types</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div>
        </nav>
    )
};