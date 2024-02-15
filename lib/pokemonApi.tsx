const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function fetchPokemonList(pageNumber: number, pageSize: number) {
  const offset = (pageNumber - 1) * pageSize;
  const response = await fetch(
    `${POKEMON_API}pokemon/?limit=${pageSize}&offset=${offset}`
  );
  const data = await response.json();
  return data;
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
