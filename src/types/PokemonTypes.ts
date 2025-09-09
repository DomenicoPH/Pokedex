export type Pokemon = {
    name: string;
    url: string;
};

export type PokemonCardsProps = {
    pokemons: Pokemon[]
};

export type PokemonDetail = {
    id: number;
    name: string;
    sprites: {
        front_default: string
    }
    types: {
        type: {
            name: string;
        }
    }[]
};