import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/layout/logo-mini.png";
import DefaultImage from "../../assets/layout/user-default.png";
import { Container } from "./styles";

function Header() {
  const me = JSON.parse(localStorage.getItem("user"));
  return (
    <Container>
      <nav>
        <ul>
          <li className="logo">
            <a href="/">
              <img
                src={Logo}
                alt="LinkedIn"
                title="LinkedIn"
                className="logo"
              />
            </a>
          </li>
        </ul>

        <ul className="links">
          <li>
            <NavLink to="/" end>
              <i className="fa-solid fa-signal" />
              FEED
            </NavLink>
          </li>

          <li>
            <NavLink to="/network">
              <i className="fa-solid fa-users" />
              NETWORK
            </NavLink>
          </li>

          <li>
            <NavLink to="/jobs">
              <i className="fa-solid fa-suitcase" />
              JOBS
            </NavLink>
          </li>

          <li>
            <NavLink to="/chat">
              <i className="fa-regular fa-comments" />
              CHAT
            </NavLink>
          </li>

          <li>
            <NavLink to="/notices">
              <i className="fa-solid fa-bell" />
              NOTICES
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/profile">
              <div className="profile">
                <div className="img">
                  <img
                    src={me.image || DefaultImage}
                    alt={me.name}
                    title={me.name}
                  />
                </div>
                <div className="description">
                  <p>Bom dia</p>
                  <h1>{me.name}</h1>
                </div>
              </div>
            </a>
          </li>

          <li>
            <div className="btn-area">
              <a href="/logout" alt="logout" title="logout">
                <i className="fa-solid fa-right-from-bracket" />
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
