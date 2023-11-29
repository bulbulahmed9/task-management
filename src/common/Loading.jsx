import { Spin } from "antd";
import React from "react";

const Loading = ({ loading }) => {
  return loading ? (
    <div className="global-loading">
      <Spin />
    </div>
  ) : (
    <></>
  );
};

export default Loading;
