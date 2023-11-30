import React from "react";
import { shallow } from "enzyme";
import { Row, Col } from "antd";
import Topbar from "../layout/Topbar";
import { getCurrentDate } from "../helper";
const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });

let date = getCurrentDate();

describe("Topbar Component", () => {
  it("should render Topbar component with necessary elements", () => {
    const wrapper = shallow(<Topbar />);

    expect(wrapper.find(".topbar")).toHaveLength(1);
    expect(wrapper.find(Row)).toHaveLength(1);
    expect(wrapper.find(Col)).toHaveLength(1);

    expect(wrapper.find("img.task-icon").prop("src")).toEqual("planning.png");
    expect(wrapper.find("h3").text()).toEqual("Task Management");
    expect(wrapper.find("h5").text()).toEqual(date);
  });
});
