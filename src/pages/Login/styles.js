import { Card } from "antd";
import styled from "styled-components";

const Container = styled.section`
  margin-top: -100px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .input-area {
  }
`;

const CardContainer = styled(Card)`
  width: 100%;
  max-width: 600px;

  h1 {
    font-weight: bold;
  }

  .input-area {
    margin-bottom: 20px;
  }
`;

export { Container, CardContainer };
