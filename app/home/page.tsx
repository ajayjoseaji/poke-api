import { Layout } from "antd";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Home() {
  return (
    <Layout className="h-full" color="#455560">
      <DashboardLayout>
        <h2>Home page</h2>
      </DashboardLayout>
    </Layout>
  );
}
