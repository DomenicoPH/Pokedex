export default function Navbar(){
    return(
        <nav className="flex justify-center items-center h-10 bg-yellow-400 fixed w-screen z-10">
            <div className="flex justify-between w-[80vw]">
                <h2 className="font-poke"><a href="/">Pokédex</a></h2>
                <div className="flex gap-4">
                    <a href="/types">Types</a>
                    <a href="/about">About</a>
                </div>
            </div>
        </nav>
    )
};