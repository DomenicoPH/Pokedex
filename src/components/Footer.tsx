import { FaGithub } from "react-icons/fa";
import vite from '../../public/vite.svg';

export default function Footer(){
    return(
        <footer className="bg-gray-800 p-2 flex justify-center items-center gap-2">
            <p className="flex items-center gap-2 text-white text-[10px]">App built with React Vite <img src={vite} alt="logo Vite" width={16} /> by &copy; Gnomono</p>
            <a 
                href="https://github.com/DomenicoPH"
                target="_blank"
                rel="nonopener noreferrer"
                className="text-white hover:text-gray-400 text-[16px]"
            ><FaGithub/></a>
        </footer>
    )
}