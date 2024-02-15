const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function fetchPokemonList(pageNumber: number, pageSize: number) {
  try {
    const offset = (pageNumber - 1) * pageSize;
    const response = await fetch(
      `${POKEMON_API}pokemon/?limit=${pageSize}&offset=${offset}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Pokemon list");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    throw error;
  }
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
