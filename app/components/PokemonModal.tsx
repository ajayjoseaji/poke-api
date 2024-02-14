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
          // title={pokemonData.name}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
        >
          <h1 className="text-2xl font-bold pt-4">
            {pokemonData.name.charAt(0).toUpperCase() +
              pokemonData.name.slice(1)}
          </h1>
          <div
            className="m-4"
            // style={{ position: "relative", width: "300px", height: "300px" }}
          >
            <Image
              width={200}
              height={200}
              src={pokemonData.sprites.other["official-artwork"].front_default}
              alt={"Picture of " + pokemonData.name}
              style={{ objectFit: "contain" }}
              className="transition-opacity opacity-0 duration-[2s]"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
          </div>
          <h3>Weight: {pokemonData.weight}</h3>
          <div className="flex-col">
            {pokemonData.stats.map((statObject: any) => {
              const statName = statObject.stat.name;
              const statValue = statObject.base_stat;

              return (
                <div
                  className="flex items-stretch"
                  style={{ width: "500px" }}
                  key={statName}
                >
                  <h3 className="p-3 w-2/4">
                    {statName}: {statValue}
                  </h3>
                </div>
              );
            })}
          </div>
        </Modal>
      )}
    </>
  );
};
