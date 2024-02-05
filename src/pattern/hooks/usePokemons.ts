import { useEffect, useState } from "react";
import { pokemonsApi } from "../api/pokemons";

export interface Pokemons {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Result[]>([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = async () => {
        try {
            const { data } = await pokemonsApi.get<Pokemons>("https://pokeapi.co/api/v2/pokemon");
            setPokemons(data.results);
        } catch (error) {
            console.error("Error buscando los pokemons", error);
        }
    };

    return {
        pokemons,
    };
};
