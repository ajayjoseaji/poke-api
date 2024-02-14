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
          pageSize: 5,
        }}
        itemLayout="vertical"
        dataSource={pokemonList}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <div className="flex justify-between px-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <EyeOutlined
                className="hover:text-[#3ea7f7]"
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
