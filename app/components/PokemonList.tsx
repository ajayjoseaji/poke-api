"use client";

import { List } from "antd";
import { useEffect, useState } from "react";
import { PokemonModal } from "./PokemonModal";
import { EyeOutlined } from "@ant-design/icons";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

type PokemonProps = [
  {
    name: string;
    url: string;
  }
];
export const PokemonList = ({ pokemonList }: { pokemonList: PokemonProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiUrl, setApiUrl] = useState<string | null>(null);
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth?.token) {
      router.push("/login");
    }
  }, [auth, router]);

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
            <div className="flex justify-between px-4 items-center">
              <h2 className="text-lg font-semibold capitalize">{item.name}</h2>
              <EyeOutlined
                className="hover:text-[#3ea7f7] text-[20px]"
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
