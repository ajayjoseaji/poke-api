import { Layout } from "antd";
import { DashboardLayout } from "../../components/DashboardLayout";
import { PokemonList } from "@/components/PokemonList";

const Dashboard: React.FC = () => {
  return (
    <Layout className="h-full" color="#455560">
      <DashboardLayout>
        <h2 className="text-xl md:text-3xl font-semibold text-[#1a3353] my-5">
          Pokemon List
        </h2>
        <PokemonList />
      </DashboardLayout>
    </Layout>
  );
};

export default Dashboard;
