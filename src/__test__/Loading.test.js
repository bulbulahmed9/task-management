import React from "react";
import { shallow } from "enzyme";
import { Spin } from "antd";
import Loading from "../common/Loading";
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

describe("Loading Component", () => {
  it("should render Loading component when loading is true", () => {
    const wrapper = shallow(<Loading loading={true} />);
    expect(wrapper.find(".global-loading").exists()).toBe(true);
    expect(wrapper.find(Spin).exists()).toBe(true);
  });

  it("should not render anything when loading is false", () => {
    const wrapper = shallow(<Loading loading={false} />);
    expect(wrapper.find(".global-loading").exists()).toBe(false);
    expect(wrapper.find(Spin).exists()).toBe(false);
  });
});
