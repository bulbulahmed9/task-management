import { Tag } from "antd";
import { getStatusColor } from "../../helper";
import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

export const sampleData = [
  {
    title: "Task 1",
    description: "Complete project proposal",
    dueDate: "2023-12-05",
    status: "In Progress",
    key: "1",
  },
  {
    title: "Task 2",
    description: "Prepare presentation slides",
    dueDate: "2023-11-30",
    status: "To Do",
    key: "2",
  },
  {
    title: "Task 3",
    description: "Review marketing strategy",
    dueDate: "2023-12-10",
    status: "To Do",
    key: "3",
  },
  {
    title: "Task 4",
    description: "Update website content",
    dueDate: "2023-12-15",
    status: "In Progress",
    key: "4",
  },
  {
    title: "Task 5",
    description: "Meeting with stakeholders",
    dueDate: "2023-12-02",
    status: "Done",
    key: "5",
  },
  {
    title: "Task 4",
    description: "Update website content",
    dueDate: "2023-12-15",
    status: "In Progress",
    key: "4",
  },
  {
    title: "Task 5",
    description: "Meeting with stakeholders",
    dueDate: "2023-12-02",
    status: "Done",
    key: "5",
  },
  {
    title: "Task 4",
    description: "Update website content",
    dueDate: "2023-12-15",
    status: "In Progress",
    key: "4",
  },
  {
    title: "Task 5",
    description: "Meeting with stakeholders",
    dueDate: "2023-12-02",
    status: "Done",
    key: "5",
  },
  {
    title: "Task 4",
    description: "Update website content",
    dueDate: "2023-12-15",
    status: "In Progress",
    key: "4",
  },
  {
    title: "Task 5",
    description: "Meeting with stakeholders",
    dueDate: "2023-12-02",
    status: "Done",
    key: "5",
  },
  {
    title: "Task 4",
    description: "Update website content",
    dueDate: "2023-12-15",
    status: "In Progress",
    key: "4",
  },
  {
    title: "Task 5",
    description: "Meeting with stakeholders",
    dueDate: "2023-12-02",
    status: "Done",
    key: "5",
  },
  {
    title: "Task 4",
    description: "Update website content",
    dueDate: "2023-12-15",
    status: "In Progress",
    key: "4",
  },
  {
    title: "Task 5",
    description: "Meeting with stakeholders",
    dueDate: "2023-12-02",
    status: "Done",
    key: "5",
  },
];

export const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "dueDate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
  },
  {
    title: "Action",
    dataIndex: "action",
    width: "100px",
    key: "action",
    render: () => (
      <div className="d-flex justify-content-between">
        <EditOutlined className="pointer" />
        <CheckCircleOutlined className="pointer" />
        <DeleteOutlined className="pointer" />
      </div>
    ),
  },
];
