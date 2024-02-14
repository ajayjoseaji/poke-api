import { getPokemonList } from "@/lib/pokemonApi";
import { PokemonList } from "./PokemonList";

export const TableList = async () => {
  const pokemonList = await getPokemonList();

  return (
    <>
      <h2 className="text-center text-4xl font-semibold text-[#1a3353] my-5">
        Pokemon List
      </h2>
      <PokemonList pokemonList={pokemonList} />
    </>
  );
};
