const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
  const response = await fetch(POKEMON_API + "pokemon?limit=20&offset=0");
  const data = await response.json();
  return data.results;
}

export async function fetchPokemonData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
}
