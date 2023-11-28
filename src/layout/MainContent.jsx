import { Button } from "antd";
import TaskLanding from "../Modules/task/TaskLanding";

const MainContent = () => {
  return (
    <div className="container">
      <div className="container-header d-flex justify-content-between align-items-center">
        <h3>Task Landing</h3>
        <Button type="primary">Create Task</Button>
      </div>
      <TaskLanding />
    </div>
  );
};

export default MainContent;
