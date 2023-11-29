import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { Tag } from "antd";
import { toast } from "react-toastify";
import { dateFormatter, getStatusColor } from "../../helper";
import { DeleteAPI, GetAPI, SaveAPI } from "../../mockAPI";

export const statusDDL = [
  { value: "All", label: "All" },
  { value: "To Do", label: "To Do" },
  { value: "In Progress", label: "In Progress" },
  { value: "Done", label: "Done" },
];

export const statusDDLWithoutAll = () => {
  return statusDDL.filter((item) => item.label !== "All");
};

export const columns = (setLoading, cb) => [
  {
    title: "Title",
    dataIndex: "title",
    key: "id",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "id",
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "id",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "id",
    render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
  },
  {
    title: "Action",
    dataIndex: "action",
    width: "100px",
    key: "id",
    render: (action, record) => (
      <div className="d-flex justify-content-between">
        <EditOutlined className="pointer" />
        <CheckCircleOutlined className="pointer" />
        <DeleteOutlined
          onClick={() => {
            deleteTask(setLoading, record?.id, cb);
          }}
          className="pointer"
        />
      </div>
    ),
  },
];

export const createTask = async (setLoading, values, cb) => {
  try {
    setLoading(true);

    const { title, description, dueDate, status } = values;
    const payload = {
      id: uuidv4(),
      title,
      description,
      dueDate: dateFormatter(dueDate),
      status: status?.label,
    };

    let res = await SaveAPI(payload);
    setLoading(false);
    toast.success(res?.message);

    cb?.();
  } catch (error) {
    setLoading(false);
    toast.warn(error?.message || "Something went wrong");
  }
};

export const getTask = async (setTasks, setLoading, values) => {
  try {
    setLoading(true);

    const date = values?.dueDate ? dateFormatter(values?.dueDate) : null;
    const res = await GetAPI(values?.status?.label, date);

    setTasks(res?.data);
    setLoading(false);
  } catch (error) {
    setTasks([]);
    toast.warn(error?.message || "Something went wrong");
    setLoading(false);
  }
};

export const deleteTask = async (setLoading, id, cb) => {
  try {
    setLoading(true);

    const res = await DeleteAPI(id);

    toast.success(res?.message);

    setLoading(false);
    cb?.();
  } catch (error) {
    toast.warn(error?.message || "Something went wrong");
    setLoading(false);
  }
};
