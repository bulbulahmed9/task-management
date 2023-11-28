/* eslint-disable react/prop-types */
import { ConfigProvider } from "antd";
import { colorPrimary } from "../helper";

const Theme = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary,
          borderRadius: 2,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default Theme;
