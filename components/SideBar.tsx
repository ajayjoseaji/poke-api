import { ConfigProvider, Layout, Menu } from "antd";
import {
  UploadOutlined,
  AppstoreOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideBarItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Home",
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

export const SideBar = ({ collapsed }: { collapsed: boolean }) => {
  const pathname = usePathname();
  const { Sider } = Layout;

  const defaultSelectedKey = sideBarItems.find(
    (item) => pathname === item.path
  )?.key;

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
  );
};
