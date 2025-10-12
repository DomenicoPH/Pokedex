import { Link } from 'react-router-dom';
import logo from '../assets/img/pokeicon.png';
import vite from './assets/vite.svg';

export default function Landing(){
    return(
        <div className="flex flex-col justify-center items-center min-h-[100vh] bg-red-500">
            {/* <h2 className='text-lg opacity-50'>- Pokedex -</h2> */}
            <Link to="/home" className='group flex flex-col items-center'>
                <img 
                    src={logo} 
                    alt="Logo pokemon" 
                    className='scale-90 group-hover:scale-100 transition-all duration-700 cursor-pointer opacity-20 rotate-90 hover:rotate-0'
                />
                <span className="opacity-0 group-hover:opacity-100 text-black/20 text-sm mt-2 transition-opacity">
                  Enter
                </span>
            </Link>
            <footer className='flex items-center gap-2 fixed bottom-10 text-xs text-red-700'>App built with React Vite <img src={vite} alt="logo Vite" width={16} /> by Gnomono</footer>
        </div>
    )
}