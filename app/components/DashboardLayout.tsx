"use client";

import { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Dropdown, Space, Avatar, MenuProps } from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { useAuth } from "./AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const sideBarItems = [
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

type LayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: LayoutProps) => {
  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  const screens = useBreakpoint();
  const auth = useAuth();

  if (!auth) {
    return;
  }
  const { logout } = auth;

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

  const onClick: MenuProps["onClick"] = () => {
    logout();
  };

  const items: MenuProps["items"] = [
    {
      label: "Logout",
      key: "1",
    },
  ];

  const pathname = usePathname();
  const defaultSelectedKey = sideBarItems.find(
    (item) => pathname === item.path
  )?.key;

  return (
    <>
      <Header style={{ padding: 0, background: "#fff" }}>
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
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                marginLeft: collapsed ? 5 : 125,
              }}
            />
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
          {defaultSelectedKey && (
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={[defaultSelectedKey]}
            >
              {sideBarItems.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link href={item.path}>
                    <span>{item.label}</span>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
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
