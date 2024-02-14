"use client";

import { Button, Layout } from "antd";
import { useAuth } from "./components/AuthContext";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const auth = useAuth();
  if (!auth) {
    return;
  }
  const { token } = auth;
  return (
    <Layout className="h-full" color="#455560">
      <Header
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 4px -1px",
        }}
      >
        <Image
          src={"https://emilus.themenate.net/img/logo.png"}
          alt="logo"
          width={100}
          height={70}
        />
      </Header>
      <div className="relative pt-32 pb-32 flex content-center items-center justify-center">
        <div className="container relative mx-auto">
          <div className="w-full lg:w-6/12 ml-auto mr-auto text-center">
            <h1 className="text-gray-600 font-semibold text-5xl">
              Pokemon API
            </h1>
            <div className="mt-6">
              {token ? (
                <Link href="/dashboard">
                  <Button type="default" size="large">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button type="default" size="large">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
