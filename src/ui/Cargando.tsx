import pokeSpin from '../assets/img/pbspin.gif'
export default function Cargando(){
    return(
        <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px]">
            <div className='w-20 h-20'>
                <img src={pokeSpin} alt="pokebola"/>
            </div>
            <p className='text-yellow-200 text-xl'>Loading...</p>
        </div>
    )
};