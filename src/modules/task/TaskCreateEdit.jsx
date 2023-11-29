import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { createTask, statusDDLWithoutAll } from "./utils";
import { useEffect } from "react";
import dayjs from "dayjs";

const TaskCreateEdit = () => {
  const [form] = Form.useForm();

  // useEffect(() => {
  //   createTask({ id: 1 });
  // }, []);

  // const values = form.getFieldsValue();
  // console.log(values);

  return (
    <Form
      name="task"
      initialValues={{ title: null }}
      form={form}
      onFinish={(values) => {
        // const values = form.getFieldsValue();
        console.log(values);
        // await form.validateFields();
      }}
    >
      <div className="task-create-edit">
        <Row>
          <Col md={24} sm={24} xs={24}>
            <label>Title</label>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Title is required" }]}
            >
              <Input
                value={null}
                name="title"
                size="small"
                className="w-100 mb-2"
                placeholder="Title"
                // onChange={(value) => {
                //   form.setFieldsValue("title", value);
                // }}
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
                onChange={(value) => {
                  form.setFieldsValue("description", value);
                }}
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
                // value={value ? dayjs(value, dateFormat) : null}
                onChange={(date, dateString) => {
                  form.setFieldsValue("dueDate", dateString);
                }}
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
                optionFilterProp="children"
                onChange={(value) => {
                  form.setFieldsValue("status", value);
                }}
                options={statusDDLWithoutAll()}
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
