import { Row, Col } from "antd";
import React from "react";

import { CardContainer, Container } from "./styles";

function Home() {
  return (
    <Container>
      <Row>
        <Col span={5}>
          <CardContainer>
            <h1>Card left</h1>
          </CardContainer>
        </Col>
        <Col span={12} style={{ margin: "0 10px" }}>
          <CardContainer>
            <h1>Center</h1>
          </CardContainer>
        </Col>
        <Col span={5}>
          <CardContainer>
            <h1>Card right</h1>
          </CardContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
