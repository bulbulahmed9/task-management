import React from "react";
import { shallow } from "enzyme";
import { ConfigProvider } from "antd";
import Theme from "../layout/Theme";
const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });

describe("Theme Component", () => {
  it("should render Theme component with children inside ConfigProvider", () => {
    const mockChild = <div>Mock Child</div>;
    const wrapper = shallow(<Theme>{mockChild}</Theme>);

    expect(wrapper.find(ConfigProvider)).toHaveLength(1);
    expect(wrapper.contains(mockChild)).toBe(true);
  });
});
