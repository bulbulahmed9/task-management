import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useState } from "react";
import Loading from "../../common/Loading";
import { createTask, statusDDLWithoutAll } from "./utils";

const statusDDL = statusDDLWithoutAll();

const initialValues = {
  title: null,
  description: null,
  dueDate: null,
  status: statusDDL[0],
};

const TaskCreateEdit = ({ cb }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  return (
    <Form
      name="task"
      form={form}
      initialValues={initialValues}
      onFinish={(values) => {
        createTask(setLoading, values, cb);
      }}
    >
      <Loading loading={loading} />
      <div className="task-create-edit">
        <Row>
          <Col md={24} sm={24} xs={24}>
            <label>Title</label>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Title is required" }]}
            >
              <Input
                name="title"
                size="small"
                className="w-100 mb-2"
                placeholder="Title"
              />
            </Form.Item>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <label>Description</label>
            <Form.Item
              name="description"
              rules={[{ required: true, message: "Description is required" }]}
            >
              <Input
                size="small"
                className="w-100 mb-2"
                placeholder="Description"
                name="description"
                type="text"
              />
            </Form.Item>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <label>Due Date</label>
            <Form.Item
              name="dueDate"
              rules={[{ required: true, message: "Due date is required" }]}
            >
              <DatePicker
                size="small"
                className="w-100 mb-2"
                placeholder="Due Date"
                name="dueDate"
              />
            </Form.Item>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <label>Select Status</label>
            <Form.Item
              name="status"
              rules={[{ required: true, message: "Status is required" }]}
            >
              <Select
                showSearch
                name="status"
                placeholder="Select Status"
                onChange={(value, option) => {
                  form.setFieldsValue({ status: option });
                }}
                options={statusDDL}
                className="w-100"
                size="small"
              />
            </Form.Item>
          </Col>
          <Col className="text-right" md={24} sm={24} xs={24}>
            <Button
              className="mt-18"
              size="small"
              htmlType="submit"
              type="primary"
            >
              Create
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default TaskCreateEdit;
