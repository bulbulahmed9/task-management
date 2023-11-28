import { Button, Col, DatePicker, Row, Select, Table } from "antd";
import { columns, sampleData, statusDDL } from "./utils";

const TaskLanding = () => {
  return (
    <div>
      <div className="landing-header d-flex justify-content-between align-items-center">
        <h3>Task Landing</h3>
        <Button size="small" htmlType="button" type="primary">
          Create Task
        </Button>
      </div>
      <Row gutter={15} className="mb-2">
        <Col md={8} sm={12} xs={24}>
          <label>Select Status</label>
          <Select
            showSearch
            placeholder="Select Status"
            optionFilterProp="children"
            onChange={() => {}}
            options={statusDDL}
            className="w-100"
            size="small"
          />
        </Col>
        <Col md={8} sm={12} xs={24}>
          <label>Due Date</label>
          <DatePicker
            size="small"
            className="w-100"
            placeholder="Due Date"
            onChange={() => {}}
          />
        </Col>
        <Col md={8} sm={12} xs={24}>
          <Button className="mt-18" size="small" htmlType="button" type="primary">
            View
          </Button>
        </Col>
      </Row>
      <Table
        scroll={{
          x: 800,
          y: 400,
        }}
        pagination={false}
        dataSource={sampleData}
        columns={columns}
      />
    </div>
  );
};

export default TaskLanding;
