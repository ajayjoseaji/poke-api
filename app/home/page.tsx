import { Layout } from "antd";
import { DashboardLayout } from "../../components/DashboardLayout";

export default function Home() {
  return (
    <Layout className="h-full" color="#455560">
      <DashboardLayout>
        <h2 className="text-3xl font-semibold text-[#1a3353] my-5">Home</h2>
      </DashboardLayout>
    </Layout>
  );
}
