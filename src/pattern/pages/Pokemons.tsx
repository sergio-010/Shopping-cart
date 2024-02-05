import { NavBar } from "../components/layouts/NavBar";
import { usePokemons } from "../hooks/usePokemons";

export const Pokemons = () => {
    const { pokemons } = usePokemons();

    return (
        <div className="flex">
            <div >
                <NavBar />
            </div>

            <div className="ml-10 mt-10 marker: flex flex-row flex-wrap gap-8">
                {pokemons.map((pokemon) => (
                    <div key={pokemon.name}>
                        {pokemon.name}
                    </div>
                ))}
            </div>
        </div>
    );
};
