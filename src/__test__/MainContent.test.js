import React from "react";
import { shallow } from "enzyme";
import MainContent from "../layout/MainContent";
import TaskLanding from "../modules/task/TaskLanding";
const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });

describe("MainContent Component", () => {
  it("should render MainContent component with TaskLanding", () => {
    const wrapper = shallow(<MainContent />);
    expect(wrapper.find(".container")).toHaveLength(1);
    expect(wrapper.find(TaskLanding)).toHaveLength(1);
  });
});
