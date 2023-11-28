import { Button, Col, DatePicker, Input, Row, Select } from "antd";
import { statusDDLWithoutAll } from "./utils";

const TaskCreateEdit = () => {
  return (
    <div className="task-create-edit">
      <Row>
        <Col md={24} sm={24} xs={24}>
          <label>Title</label>
          <Input size="small" className="w-100 mb-2" placeholder="Title" />
        </Col>
        <Col md={24} sm={24} xs={24}>
          <label>Description</label>
          <Input size="small" className="w-100 mb-2" placeholder="Description" />
        </Col>
        <Col md={24} sm={24} xs={24}>
          <label>Due Date</label>
          <DatePicker
            size="small"
            className="w-100 mb-2"
            placeholder="Due Date"
            onChange={() => {}}
          />
        </Col>
        <Col md={24} sm={24} xs={24}>
          <label>Select Status</label>
          <Select
            showSearch
            placeholder="Select Status"
            optionFilterProp="children"
            onChange={() => {}}
            options={statusDDLWithoutAll()}
            className="w-100"
            size="small"
          />
        </Col>
        <Col className="text-right" md={24} sm={24} xs={24}>
          <Button className="mt-18" size="small" htmlType="submit" type="primary">
            Create
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TaskCreateEdit;
