"use client";

import { List } from "antd";
import { useEffect, useState } from "react";
import { PokemonModal } from "./PokemonModal";
import { EyeOutlined } from "@ant-design/icons";
import { fetchPokemonList } from "@/lib/pokemonApi";
import { Loading } from "./Loading";

type PokemonProps = [
  {
    name: string;
    url: string;
  }
];
export const PokemonList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiUrl, setApiUrl] = useState<string | null>(null);
  const [pokemonList, setPokemonList] = useState<PokemonProps>();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
    total: 0,
  });

  useEffect(() => {
    fetchData();
  }, [pagination.current]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchPokemonList(
        pagination.current,
        pagination.pageSize
      );
      setPokemonList(response.results);
      setPagination((prevState) => ({
        ...prevState,
        total: response.count,
      }));
    } finally {
      setLoading(false);
    }
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPagination({ ...pagination, current: page });
  };
  return (
    <>
      <h2 className="text-xl md:text-3xl font-semibold text-[#1a3353] my-5">
        Pokemon List
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <List
          pagination={{
            total: pagination.total,
            pageSize: pagination.pageSize,
            onChange: handlePaginationChange,
            current: pagination.current,
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
                    setIsModalOpen(true);
                    setApiUrl(item.url);
                  }}
                />
              </div>
            </List.Item>
          )}
        />
      )}
      <PokemonModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        url={apiUrl}
      />
    </>
  );
};
