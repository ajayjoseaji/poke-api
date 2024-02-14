import { Layout } from "antd";
import { TableList } from "../components/Table";
import { DashboardLayout } from "../components/DashboardLayout";

const Dashboard: React.FC = () => {
  return (
    <Layout className="h-full" color="#455560">
      <DashboardLayout>
        <TableList />
      </DashboardLayout>
    </Layout>
  );
};

export default Dashboard;
