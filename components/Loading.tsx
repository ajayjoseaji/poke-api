import { Spin } from "antd";

export const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
};
