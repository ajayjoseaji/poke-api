import { Layout } from "antd";
import { DashboardLayout } from "../../components/DashboardLayout";
import { PokemonList } from "@/components/PokemonList";

const Dashboard: React.FC = () => {
  return (
    <Layout className="h-full" color="#455560">
      <DashboardLayout>
        <PokemonList />
      </DashboardLayout>
    </Layout>
  );
};

export default Dashboard;
