import { getPokemonList } from "@/lib/pokemonAPI";
import { PokemonList } from "./PokemonList";

export const TableList = async () => {
  const pokemonList = await getPokemonList();

  return <PokemonList pokemonList={pokemonList} />;
};
