import { Spin } from "antd";

const LoadingFullScreen = () => {
  return (
    <div>
      <Spin size="large" spinning fullscreen />
    </div>
  );
};

export default LoadingFullScreen;
