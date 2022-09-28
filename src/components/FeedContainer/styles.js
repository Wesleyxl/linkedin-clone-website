import { Card } from "antd";
import styled from "styled-components";

const Container = styled(Card)`
  background: #fff;
  border-radius: 16px;
  margin: 8px 8px;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
        margin-right: 16px;
      }

      .description {
        line-height: 1.2;
        p {
          margin-bottom: 0;
          padding: 0;
          font-size: 16px;
          font-weight: bold;
        }
        span {
          font-size: 11px;
        }
      }
    }

    .right {
      button {
        border: none;
        background: none;
        img {
          width: 20px;
        }
      }
    }
  }

  .text-area {
    margin: 24px 8px;
  }

  .img-area {
    img {
      width: 100%;
    }
  }

  .footer-area {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      padding: 0 4px;

      ul {
        display: flex;

        li {
          margin: 0 8px;

          button {
            border: none;
            background: none;
            font-size: 22px;
            color: #666;

            :hover {
              color: #000;
            }
          }
        }
      }
    }
  }
`;

export { Container };
