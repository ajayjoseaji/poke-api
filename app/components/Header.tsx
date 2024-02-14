import { Avatar, Button, Dropdown, Layout, MenuProps, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useAuth } from "./AuthContext";
import { type Dispatch } from "react";

export const HeaderComponent = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: Dispatch<boolean>;
}) => {
  const { logout } = useAuth();

  const { Header } = Layout;
  const onClick: MenuProps["onClick"] = () => {
    logout();
  };

  const items: MenuProps["items"] = [
    {
      label: "Logout",
      key: "1",
    },
  ];

  return (
    <Header style={{ padding: 0, background: "#fff" }}>
      <div className="flex justify-between pr-6">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            marginLeft: collapsed ? 60 : 250,
          }}
        />
        <Dropdown menu={{ items, onClick }}>
          <span onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar />
              <DownOutlined />
            </Space>
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};
