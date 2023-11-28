import { Col, Row } from "antd";
import planning from "../assets/planning.png";
import { bg, getCurrentDate } from "../helper";

const Topbar = () => {
  return (
    <div style={bg} className="topbar">
      <Row>
        <Col md={24} sm={24} xs={24}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img className="task-icon" src={planning} alt="icon" />
              <h3>Task Management</h3>
            </div>
            <div>
              <h5>{getCurrentDate()}</h5>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Topbar;
