import { Table } from "antd";
import { columns, sampleData } from "/utils";

const TaskLanding = () => {
  return (
    <div>
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
