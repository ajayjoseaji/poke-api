import { Button, Card, Col, Row } from "antd";
import EmailIcon from "../components/icons/Email";
import LockIcon from "../components/icons/Lock";

export default function Login() {
  return (
    <div className="h-full bg-hero">
      <div className="container flex flex-col justify-center h-full items-center">
        <div className="bg-white rounded-xl p-12 flex flex-col items-center w-96 md:w-[360px] lg:w-[400px]">
          <h2 className="mb-6 font-bold text-lg">Login</h2>

          <div className="relative w-full">
            <div className=" absolute top-3 left-[12px]">
              <EmailIcon />
            </div>
            <input
              className="h-[40px] text-inherit text-sm w-full pl-8 border rounded-lg border-neutral-200 hover:border-blue-400 outline-none caret-neutral-300 transition delay-150 duration-100"
              type="email "
              placeholder="Email"
            ></input>
          </div>

          <div className="relative w-full mt-4">
            <div className=" absolute top-3 left-[12px]">
              <LockIcon />
            </div>
            <input
              className="h-[40px] text-inherit text-sm w-full pl-8 border rounded-lg border-neutral-200 focus:border-blue-400 hover:border-blue-400 outline-none caret-neutral-300 transition delay-150 duration-100"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <Button className="mt-4 w-full text-xs" type="primary">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
