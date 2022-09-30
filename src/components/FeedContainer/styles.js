import { Card, Modal } from "antd";
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
        border-radius: 20px;
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

const ModalComments = styled(Modal)`
  max-width: 700px;

  article {
    display: flex;
    margin-bottom: 20px;
    .img-area {
      margin-right: 5px;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
      }
    }
    .text-area {
      background: #f2f2f2;
      padding: 16px;
      border-radius: 10px;
      .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 16px;

        p {
          font-weight: bold;
          margin: 0;
          padding: 0;
        }
        span {
          color: #666666;
        }
      }
      .text {
        p {
          padding-left: 5px;
          margin-bottom: 0px;
          font-size: 14px;
        }
      }
    }
  }
`;

export { Container, ModalComments };
