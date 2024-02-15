"use client";

import { Button, Input, notification } from "antd";
import EmailIcon from "../../components/icons/Email";
import LockIcon from "../../components/icons/Lock";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../components/AuthContext";
import { useRouter } from "next/navigation";

type Inputs = {
  username: string;
  password: string;
};

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const auth = useAuth();
  const router = useRouter();

  const onSubmit = async (data: Inputs) => {
    const { username, password } = data;
    const result = auth?.login(username, password);

    if (result?.success) {
      router.push("/dashboard");
    } else {
      notification.error({
        message: "Login Failed",
        description: result?.message,
      });
    }
  };

  return (
    <div className="h-full bg-hero flex flex-col justify-center items-center p-10">
      <div className="bg-white rounded-xl p-12 block items-center max-w-auto md:w-[400px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-6 font-bold text-lg text-center">Login</h2>

          {/* Username */}
          <div>
            <div className="flex">
              <span className="text-[#ff6b72] text-sm font-sans mr-1">*</span>
              <h4 className="text-[14px] text-[#455560]  font-medium">
                Username
              </h4>
            </div>
            <Controller
              name="username"
              control={control}
              rules={{ required: "Please input your username" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="username"
                  type="text"
                  status={`${errors.username ? "error" : ""}`}
                  prefix={<EmailIcon />}
                />
              )}
            />
            {errors.username && (
              <p className="text-xs text-[#ff6b72]">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mt-4">
            <div className="flex">
              <span className="text-[#ff6b72] text-sm font-sans mr-1">*</span>
              <h4 className="text-[14px] text-[#455560]  font-medium">
                Password
              </h4>
            </div>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Please input your password" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Password"
                  type="password"
                  status={`${errors.password ? "error" : ""}`}
                  prefix={<LockIcon />}
                />
              )}
            />
            {errors.password && (
              <p className="text-xs text-[#ff6b72]">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            className="mt-4 w-full text-xs"
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#3e79f7" }}
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
