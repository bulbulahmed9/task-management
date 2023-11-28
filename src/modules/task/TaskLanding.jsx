import { Button, Table } from "antd";
import { columns, sampleData } from "./utils";

const TaskLanding = () => {
  return (
    <div>
      <div className="landing-header d-flex justify-content-between align-items-center">
        <h3>Task Landing</h3>
        <Button type="primary">Create Task</Button>
      </div>
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
