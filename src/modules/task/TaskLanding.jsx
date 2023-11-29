import { Button, Col, DatePicker, Modal, Row, Select, Table } from "antd";
import { useEffect, useState } from "react";
import TaskCreateEdit from "./TaskCreateEdit";
import { columns, getTask, statusDDL } from "./utils";

const initialValues = { status: statusDDL[0], dueDate: null };

const TaskLanding = () => {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialValues);

  const cb = () => {
    setVisible(false);
    setValues(initialValues);
    getTask(setTasks, setLoading, initialValues);
  };

  useEffect(() => {
    getTask(setTasks, setLoading, values);
  }, []);

  return (
    <div>
      {/* <Loading loading={loading} /> */}
      <div className="landing-header d-flex justify-content-between align-items-center">
        <h3>Task Landing</h3>
        <Button
          onClick={() => setVisible(true)}
          size="small"
          htmlType="button"
          type="primary"
        >
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
            value={values?.status}
            onChange={(value, option) => {
              setValues({ ...values, status: option });
            }}
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
            value={values?.dueDate}
            onChange={(dueDate) => {
              setValues({ ...values, dueDate });
            }}
          />
        </Col>
        <Col md={8} sm={12} xs={24}>
          <Button
            className="mt-18"
            size="small"
            htmlType="button"
            type="primary"
            onClick={() => {
              getTask(setTasks, setLoading, values);
            }}
          >
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
        dataSource={tasks}
        columns={columns}
        loading={loading}
      />
      <Modal
        destroyOnClose={true}
        maskClosable={true}
        title="Create Task"
        centered={true}
        open={visible}
        onCancel={() => setVisible(false)}
        width={550}
        style={{
          overflow: "scroll",
        }}
        footer={null}
      >
        <TaskCreateEdit cb={cb} />
      </Modal>
    </div>
  );
};

export default TaskLanding;
