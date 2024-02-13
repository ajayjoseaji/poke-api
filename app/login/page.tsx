"use client";

import { Button, Input } from "antd";
import EmailIcon from "../components/icons/Email";
import LockIcon from "../components/icons/Lock";
import { Controller, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <div className="h-full bg-hero flex flex-col justify-center items-center p-10">
      <div className="bg-white rounded-xl p-12 block items-center max-w-auto md:w-[400px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-6 font-bold text-lg text-center">Login</h2>

          {/* Email */}
          <div>
            <div className="flex">
              <span className="text-[#ff6b72] text-sm font-sans mr-1">*</span>
              <h4 className="text-[14px] text-[#455560]  font-medium">Email</h4>
            </div>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Please input your email" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Email"
                  type="email"
                  prefix={<EmailIcon />}
                />
              )}
            />
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
                  prefix={<LockIcon />}
                />
              )}
            />
          </div>

          <Button
            className="mt-4 w-full text-xs"
            type="primary"
            htmlType="submit"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
