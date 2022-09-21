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

  .logo-area {
    margin-bottom: 20px;

    img {
      width: 150px;
    }
  }

  h1 {
    font-weight: bold;
  }

  .input-area {
    margin-bottom: 20px;
  }

  .btn-area {
    display: flex;

    button {
      width: 100%;
      height: 40px;
    }
  }

  .remember {
    margin: 20px 0;
  }

  .register {
    margin: 10px;
    text-align: right;

    a {
      color: #000;
      font-weight: bold;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export { Container, CardContainer };
