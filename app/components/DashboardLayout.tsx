"use client";

import { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  AppstoreOutlined,
  DownOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Button,
  Dropdown,
  Space,
  Avatar,
  MenuProps,
  ConfigProvider,
} from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { useAuth } from "./AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const sideBarItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Homepage",
    path: "/home",
  },
  {
    key: "2",
    icon: <AppstoreOutlined />,
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

type LayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: LayoutProps) => {
  const auth = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint();
  const pathname = usePathname();

  const { Header, Sider, Content } = Layout;

  useEffect(() => {
    const handleCollapse = () => {
      if (!screens.lg) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleCollapse();

    window.addEventListener("resize", handleCollapse);

    return () => {
      window.removeEventListener("resize", handleCollapse);
    };
  }, [screens]);

  if (!auth) {
    return;
  }
  const { logout } = auth;

  const onClick: MenuProps["onClick"] = () => {
    logout();
  };

  const items: MenuProps["items"] = [
    {
      label: "Logout",
      key: "1",
      icon: <LogoutOutlined />,
    },
  ];

  const defaultSelectedKey = sideBarItems.find(
    (item) => pathname === item.path
  )?.key;

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: "#fff",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 4px -1px",
        }}
      >
        <div className="flex justify-between px-6">
          <div className="flex">
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

      <Layout>
        <Sider
          width={250}
          trigger={null}
          collapsedWidth="80px"
          collapsible
          collapsed={collapsed}
          theme="light"
          className="pt-6"
        >
          {!collapsed && (
            <h4 className="font-extrabold uppercase text-[12px] py-[12px] px-[24px] text-[#1a335399]">
              Dashboard
            </h4>
          )}
          {defaultSelectedKey && (
            <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    itemHoverBg: "transparent",
                    itemHoverColor: "#3e79f7",
                    itemColor: "#455560",
                  },
                },
              }}
            >
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={[defaultSelectedKey]}
              >
                {sideBarItems.map((item) => (
                  <Menu.Item
                    key={item.key}
                    icon={item.icon}
                    style={{ borderRadius: "0" }}
                  >
                    <Link href={item.path}>
                      <span className="font-semibold">{item.label}</span>
                    </Link>
                  </Menu.Item>
                ))}
              </Menu>
            </ConfigProvider>
          )}
        </Sider>
        <Content
          style={{
            margin: "25px",
            padding: 24,
            minHeight: 280,
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid #f0f0f0",
            overflow: "scroll",
          }}
        >
          {children}
        </Content>
      </Layout>
    </>
  );
};
