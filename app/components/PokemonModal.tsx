import { Modal } from "antd";
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
  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setPokemonData(data);
        } catch (error) {
          console.error("Error fetching Pokemon data:", error);
        } finally {
        }
      };
      if (isModalOpen) {
        fetchData();
      }
    }
  }, [url, isModalOpen]);

  return (
    <>
      {pokemonData && (
        <Modal
          visible={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <div>
            <h1 className="text-base md:text-xl text-center font-bold pt-4">
              Name:{" "}
              {pokemonData.name.charAt(0).toUpperCase() +
                pokemonData.name.slice(1)}
            </h1>
            <div className="m-4 flex flex-col md:flex-row items-center">
              <Image
                width={200}
                height={200}
                src={
                  pokemonData.sprites.other["official-artwork"].front_default
                }
                alt={"Picture of " + pokemonData.name}
                style={{ objectFit: "contain" }}
                className="transition-opacity opacity-0 duration-[2s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
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
        </Modal>
      )}
    </>
  );
};
