import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="bg-gray-800 p-2 flex justify-center items-center gap-2">
            <p className="text-white text-xs">Pokedex creado por &copy; Gnomono</p>
            <a 
                href="https://github.com/DomenicoPH"
                target="_blank"
                rel="nonopener noreferrer"
                className="text-white hover:text-gray-400 text-sm"
            ><FaGithub/></a>
        </footer>
    )
}