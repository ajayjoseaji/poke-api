"use client";

import { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Layout } from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { HeaderComponent } from "./Header";
import { SideBar } from "./SideBar";

type LayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint();

  const { Content } = Layout;

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
      <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <SideBar collapsed={collapsed} />
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
