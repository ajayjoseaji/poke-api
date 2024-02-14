"use client";

import { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Homepage",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "Dashboard",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "Dummy page",
  },
];
type LayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: LayoutProps) => {
  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  const screens = useBreakpoint();

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
  return (
    <>
      <Header
        style={{
          padding: 0,
          background: "#fff",
          // boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 4px -1px",
        }}
      >
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
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
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
