import { Card } from "antd";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const CardContainer = styled(Card)`
  background: #fff;
  border-radius: 16px;
  margin: 8px 8px;
`;

const PagesContainerList = styled.div`
  nav {
    ul {
      width: 100%;

      li {
        margin: 12px 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          width: 24px;
          height: 24px;
          margin-right: 16px;
        }

        a {
          color: #666;
          font-size: 16px;

          :hover {
            font-weight: bold;
            color: #000;
          }
        }

        span {
          width: 36px;
          height: 16px;
          font-size: 11px;
          color: #fff;
          background: #ff1930;
          text-align: center;
          border-radius: 8px;
        }
      }
    }
  }

  .btn-area {
    width: 100%;
    max-width: 141px;
    margin-top: 32px;

    a {
      width: 100%;
      display: flex;
      align-items: center;
      color: #666;

      div {
        width: 24px;
        height: 24px;
        border: 1px solid #666;
        border-radius: 6px;
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      :hover {
        font-weight: bold;
        color: #000;
      }
    }
  }
`;

const PeopleSuggestionList = styled.div`
  .title {
    font-weight: bold;
    color: #000;
    font-size: 16px;
    margin-bottom: 24px;
  }

  nav {
    width: 100%;
    ul {
      width: 100%;
      margin-bottom: 14px;

      li {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;

        .left {
          display: flex;
          align-items: center;

          img {
            width: 40px;
            height: 40px;
            margin-right: 16px;
          }

          .description {
            line-height: 1, 3;
            p {
              margin: 0;
              padding: 0;
              font-size: 16px;
              font-weight: bold;
            }
            span {
              font-size: 11px;
            }
          }
        }
      }
    }
  }

  .link {
    text-align: center;

    a {
      color: #00acff;

      :hover {
        font-weight: bold;
      }
    }
  }
`;

export { Container, CardContainer, PagesContainerList, PeopleSuggestionList };
