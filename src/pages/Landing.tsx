import { Link } from 'react-router-dom';
import logo from '../assets/img/pokeicon.png';
import vite from '../assets/vite.svg';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Landing(){

    useEffect(() => {
        gsap.fromTo('#pokemon-enter', {opacity: 0, scale: 2},{opacity: 1, scale: 1, duration: 2, ease:'power1.inOut'});
        gsap.fromTo('#pokemon-footer', {opacity: 0},{opacity: 1, duration: 3});
    },[]);

    return(
        <div className="flex flex-col justify-center items-center min-h-[100vh] bg-red-500">
            <Link id='pokemon-enter'  to="/home" className='group flex flex-col items-center'>
                <img
                    src={logo} 
                    alt="Logo pokemon" 
                    className='scale-90 group-hover:scale-100 transition-all duration-700 cursor-pointer opacity-20 rotate-90 hover:rotate-0'
                />
                <span className="opacity-0 group-hover:opacity-100 text-black/20 text-sm mt-2 transition-opacity">
                  Enter
                </span>
            </Link>
            <footer id='pokemon-footer' className='flex items-center gap-2 fixed bottom-10 text-xs text-red-700'>App built with React Vite <img src={vite} alt="logo Vite" width={16} /> by Gnomono</footer>
        </div>
    )
}