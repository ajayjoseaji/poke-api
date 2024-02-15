import { fetchPokemonData } from "@/lib/pokemonApi";
import { Modal, Skeleton } from "antd";
import Image from "next/image";
import { useState, type Dispatch, useEffect } from "react";

export const PokemonModal = ({
  isModalOpen,
  setIsModalOpen,
  url,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<boolean>;
  url: string | null;
}) => {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (url && isModalOpen) {
      fetchData();
    }
  }, [url, isModalOpen]);

  async function fetchData() {
    try {
      setLoading(true);
      const data = await fetchPokemonData(url!);
      setPokemonData(data);
    } finally {
      setLoading(false);
    }
  }
  const imgUrl =
    pokemonData && pokemonData.sprites.other["official-artwork"].front_default;

  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        {loading ? (
          <Skeleton active />
        ) : (
          pokemonData && (
            <div>
              <h1 className="text-base md:text-xl text-center font-bold pt-4 capitalize">
                Name: {pokemonData.name}
              </h1>
              <div className="m-4 flex flex-col md:flex-row items-center">
                <Image
                  width={200}
                  height={200}
                  src={imgUrl}
                  alt={"Picture of " + pokemonData.name}
                />
                <div className="flex flex-col items-start m-4 font-semibold text-sm md:text-base">
                  <h3 className="">Species: {pokemonData.species.name}</h3>
                  <h3>Weight: {pokemonData.weight}</h3>
                  <h3>Height: {pokemonData.height}</h3>
                  <div className="flex">
                    <h3 className="mr-1">Abilities: </h3>
                    <ul>
                      {pokemonData.abilities.map((ability: any, index: any) => (
                        <li className="list-disc ml-6" key={index}>
                          {ability.ability.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Modal>
    </>
  );
};
