import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./util/routes";
import Menu from "./components/Menu";
import { Col, Row } from "antd";

function App() {
  const router = useRoutes(routes);

  return (
    <div style={{ margin: "1%" }}>
      <Menu />
      <div style={{ textAlign: "center" }}>
        <Row justify="center" align="middle" style={{ textAlign: "center" }}>
          <Col style={{ width: "100%", margin: "2%" }}>{router}</Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
