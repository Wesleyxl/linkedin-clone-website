import { Card } from "antd";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const PagesContainerList = styled(Card)`
  background: #fff;
  border-radius: 16px;
  margin: 8px 8px;

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

const PeopleSuggestionList = styled(Card)`
  background: #fff;
  border-radius: 16px;
  margin: 8px 8px;

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

const ProfileContainer = styled(Card)`
  background: #fff;
  border-radius: 16px;
  margin: 8px 8px;

  .profile {
    margin: 8px 8px;
    display: flex;
    align-items: center;

    img {
      width: 48px;
      height: 48px;
      border-radius: 24px;
    }

    .description {
      line-height: 1, 3;
      margin-left: 16px;

      p {
        font-weight: bold;
        color: #000;
        font-size: 16px;
        margin-bottom: 0;
      }

      span {
        font-size: 14px;
      }
    }
  }
`;

const CreatePostContainer = styled(Card)`
  background: #fff;
  border-radius: 16px;
  margin: 8px 8px 24px;

  .img-file {
    width: 100%;
    border: none;
    background: none;
    font-size: 16px;
    color: #666;

    i {
      margin-right: 8px;
    }
  }
  .write-text {
    width: 100%;

    button {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      background: none;
      border: none;

      img {
        width: 24px;
        margin-right: 24px;
      }

      p {
        margin-bottom: 0px;
        font-size: 16px;
        color: #666;
      }
    }
  }

  nav {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        width: 100%;
        max-width: 87px;

        button {
          width: 100%;
          border: none;
          background: none;
          font-size: 16px;
          color: #666;

          i {
            margin-right: 8px;
          }
        }
      }
    }
  }
`;

const MenuConfigContainer = styled(Card)`
  background: #fff;
  border-radius: 16px;
  margin: 8px 8px 24px;

  nav {
    width: 100%;

    ul {
      width: 100%;

      li {
        width: 100%;
        margin: 12px 0;
        display: flex;
        justify-content: space-between;

        a {
          font-size: 16px;
          color: #666;

          :hover {
            font-weight: bold;
          }

          i {
            margin-right: 16px;
          }
        }

        div {
          width: 36px;
          height: 20px;
          background: #00acff;
          color: #fff;
          font-weight: bold;
          font-size: 11px;
          text-align: center;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

export {
  Container,
  PagesContainerList,
  PeopleSuggestionList,
  ProfileContainer,
  CreatePostContainer,
  MenuConfigContainer,
};
