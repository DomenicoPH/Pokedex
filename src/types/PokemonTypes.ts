export type Pokemon = {
    name: string;
    url: string;
};

export type PokemonCardsProps = {
    pokemons: Pokemon[]
};

export type PokemonDetailType = {
    id: number;
    name: string;
    weight: string;
    height: string;
    sprites: {
        front_default: string;
        front_shiny: string;
        other: {
            dream_world: {
                front_default: string;
            }
            home: {
                front_default: string;
            }
            "official-artwork": {
                front_default: string;
            }
            showdown: {
                front_default: string;
            }
        }
    }
    types: {
        type: {
            name: string;
        }
    }[]
};