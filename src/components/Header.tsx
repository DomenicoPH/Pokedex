interface HeaderProps {
    title: string;
}

export default function Header({title}:HeaderProps){
    return(
        <header>
            <h1 className="text-3xl font-bold mb-4 text-yellow-400 text-center">{title}</h1>
        </header>
    )
}