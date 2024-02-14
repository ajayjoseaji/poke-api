"use client";

import { List } from "antd";
import { useState } from "react";
import { PokemonModal } from "./PokemonModal";
import { EyeOutlined } from "@ant-design/icons";

type PokemonProps = [
  {
    name: string;
    url: string;
  }
];
export const PokemonList = ({ pokemonList }: { pokemonList: PokemonProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiUrl, setApiUrl] = useState<string | null>(null);
  return (
    <>
      <List
        pagination={{
          pageSize: 8,
        }}
        itemLayout="vertical"
        dataSource={pokemonList}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <div className="flex justify-between px-4 items-center">
              <h2 className="text-[#455560] text-sm md:text-base lg:text-lg font-semibold capitalize">
                {item.name}
              </h2>
              <EyeOutlined
                className="hover:text-[#1677ff] text-[20px]"
                onClick={() => {
                  setIsModalOpen(true), setApiUrl(item.url);
                }}
              />
            </div>
          </List.Item>
        )}
      />
      <PokemonModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        url={apiUrl}
      />
    </>
  );
};
