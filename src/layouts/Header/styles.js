import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;

  nav {
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .links {
      li {
        width: 90px;
      }
    }
    .logo {
      a img {
        width: 50px;
      }
    }

    ul {
      list-style-type: none;
      display: flex;
      margin-bottom: 0;

      li {
        height: 100%;

        a {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #000;
          width: 24px;
          font-size: 14px;
          font-weight: bold;

          i {
            font-size: 18px;
            margin-bottom: 5px;
          }

          :hover {
            color: #00acff;
          }
        }

        .active {
          color: #00acff;
          font-weight: bold;
        }

        .profile {
          width: 330px;
          height: 100%;
          display: flex;
          align-items: center;

          img {
            width: 42px;
            border-radius: 21px;
            margin-right: 20px;
          }

          .description {
            h1 {
              margin: 0;
              padding: 0;
              font-size: 12px;
              font-weight: bold;
            }
            p {
              opacity: 0.7;
              margin: 0;
              padding: 0;
              color: #000;
            }
          }
        }
      }
    }
  }
`;
