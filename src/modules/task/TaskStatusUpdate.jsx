import { Button, Col, Form, Modal, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { statusDDLWithoutAll, statusUpdate } from "./utils";
import { setStatusUpdateAction } from "../../redux/task/actions";
import Loading from "../../common/Loading";

const statusDDL = statusDDLWithoutAll();

const TaskStatusUpdate = ({ cb }) => {
  const { id, status } = useSelector(
    (state) => state?.task?.statusUpdate || {},
    shallowEqual
  );

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({ status : {value : status , label : status} });
  }, [status]);

  return (
    <Modal
      destroyOnClose={true}
      maskClosable={true}
      title="Update Status"
      centered={true}
      open={id}
      onCancel={() => {
        dispatch(setStatusUpdateAction(null, null));
      }}
      width={320}
      style={{
        overflow: "scroll",
      }}
      footer={null}
    >
      <Form
        name="task"
        form={form}
        initialValues={{ status }}
        onFinish={(values) => {
          statusUpdate(setLoading, id, values?.status?.label, cb);
        }}
      >
        <Loading loading={loading} />
        <Row>
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
              Update
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default TaskStatusUpdate;
