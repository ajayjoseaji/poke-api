import {
  Avatar,
  Button,
  ConfigProvider,
  Dropdown,
  Layout,
  MenuProps,
  Space,
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DownOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useAuth } from "./AuthContext";
import { type Dispatch } from "react";
import Image from "next/image";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: "Logout",
    key: "1",
    icon: <LogoutOutlined />,
  },
];

export const HeaderComponent = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: Dispatch<boolean>;
}) => {
  const auth = useAuth();
  const { Header } = Layout;

  if (!auth) {
    return;
  }
  const { logout } = auth;

  const onClick: MenuProps["onClick"] = () => {
    logout();
  };

  return (
    <Header
      style={{
        padding: 0,
        background: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 4px -1px",
      }}
    >
      <div className="flex justify-between px-6">
        <div className="flex">
          <Link href={"/"}>
            <Image
              src={`${
                collapsed
                  ? "https://emilus.themenate.net/img/logo-sm.png"
                  : "https://emilus.themenate.net/img/logo.png"
              }`}
              alt="logo"
              width={collapsed ? 50 : 100}
              height={70}
            />
          </Link>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  onlyIconSize: 20,
                  colorLink: "#455560",
                  colorLinkHover: "#3e79f7",
                },
              },
            }}
          >
            <Button
              type="link"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                marginLeft: collapsed ? 5 : 125,
              }}
            />
          </ConfigProvider>
        </div>
        <Dropdown menu={{ items, onClick }}>
          <span onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar size={38} icon={<UserOutlined />} />
              <DownOutlined />
            </Space>
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};
