import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    padding-top: 100px;
    background: #e5e5e5;
    color: #212121;
    font-family: 'Roboto', sans-serif;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  button, a {
    :hover {
      cursor: pointer;
    }
  }
`;
