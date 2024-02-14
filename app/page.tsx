"use client";

import { Button, Layout } from "antd";
import Link from "next/link";
import { useAuth } from "./components/AuthContext";
import { DashboardLayout } from "./components/DashboardLayout";

export default function Home() {
  const auth = useAuth();
  if (!auth) {
    return;
  }
  const { token } = auth;
  return (
    <Layout className="h-full" color="#455560">
      <DashboardLayout>
        <div>
          <h1 className="text-bold text-lg">Welcome to the Landing Page</h1>
          {token ? (
            <Link href="/dashboard">
              <Button type="link">Go to Dashboard</Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button type="link">Login</Button>
            </Link>
          )}
        </div>
      </DashboardLayout>
    </Layout>
  );
}
