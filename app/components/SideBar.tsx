import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

export const SideBar = ({ collapsed }: { collapsed: boolean }) => {
  const { Sider } = Layout;

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Homepage",
      path: "/",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "Dummy page",
      path: "/dummy",
    },
  ];

  return (
    <Sider
      width={250}
      trigger={null}
      collapsedWidth="80px"
      collapsible
      collapsed={collapsed}
      theme="light"
      className="pt-6"
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["2"]}
        items={items}
      />
    </Sider>
  );
};
