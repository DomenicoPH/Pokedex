export interface Generation {
    id: number;
    name: string;
    limit: number;
    offset: number;
}

export type Pokemon = {
    name: string;
    url: string;
};

export type PokemonCardsProps = {
    pokemons: Pokemon[]
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonDetailType = {
    stats: PokemonStat[];
    abilities: PokemonAbility[];
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