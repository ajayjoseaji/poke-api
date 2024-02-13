import { Button, Card, Col, Row } from "antd";
import EmailIcon from "../components/icons/Email";
import LockIcon from "../components/icons/Lock";

export default function Login() {
  return (
    <div className="h-full bg-hero flex flex-col justify-center items-center p-10">
      <div className="bg-white rounded-xl p-12 block items-center max-w-auto md:w-[400px]">
        <h2 className="mb-6 font-bold text-lg text-center">Login</h2>
        <div>
          <div className="flex">
            <span className="text-[#ff6b72] text-sm font-sans mr-1">*</span>
            <h4 className="text-[14px] text-[#455560]  font-medium">Email</h4>
          </div>
          <div className="relative">
            <div className=" absolute top-3 left-[12px]">
              <EmailIcon />
            </div>
            <input
              className="h-[40px] text-inherit text-sm w-full pl-8 border rounded-lg border-neutral-200 hover:border-blue-400 outline-none caret-neutral-300 transition delay-150 duration-100"
              type="email"
              placeholder="Email"
            ></input>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex">
            <span className="text-[#ff6b72] text-sm font-sans mr-1">*</span>
            <h4 className="text-[14px] text-[#455560]  font-medium">
              Password
            </h4>
          </div>
          <div className="relative">
            <div className=" absolute top-3 left-[12px]">
              <LockIcon />
            </div>
            <input
              className="h-[40px] text-inherit text-sm w-full pl-8 border rounded-lg border-neutral-200 hover:border-blue-400 outline-none caret-neutral-300 transition delay-150 duration-100"
              type="password"
              placeholder="Password"
            ></input>
          </div>
        </div>

        <Button className="mt-4 w-full text-xs" type="primary">
          Sign in
        </Button>
      </div>
    </div>
  );
}
