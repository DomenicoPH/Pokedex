import { Link } from 'react-router-dom';
import logo from '../assets/img/pokeicon.png';

export default function Landing(){
    return(
        <div className="flex flex-col justify-center items-center min-h-[100vh] bg-red-500">
            <Link to="/home">
                <img 
                    src={logo} 
                    alt="Logo pokemon" 
                    className='hover:scale-110 transition-all cursor-pointer'
                />
            </Link>
        </div>
    )
}