import { Divider } from "antd";
import React from "react";

import ElonImg from "../../assets/feed/img-elon.png";
import MoreSquare from "../../assets/feed/more-square.svg";
import PostImg from "../../assets/feed/post-img-1.png";
import { Container } from "./styles";

function FeedContainer() {
  return (
    <Container>
      <div className="header">
        <div className="left">
          <img src={ElonImg} alt="Elon Musk" title="Elon Musk" />
          <div className="description">
            <p>Elon Musk</p>
            <span>CEO of SpaceX</span>
          </div>
        </div>
        <div className="right">
          <button type="button">
            <img src={MoreSquare} alt="more" title="more" />
          </button>
        </div>
      </div>

      <div className="text-area">
        <p>
          You have to match the convenience of the gasoline car in order for
          people to buy an electric car. In order to have clean air in cities,
          you have to go electric. You should not show somebody something very
          cool and then not do it. At Tesla, any prototype that is shown to
          customers, the production must be better.
        </p>
      </div>

      <div className="img-area">
        <img src={PostImg} alt="Elon Musk" />
      </div>

      <Divider style={{ margin: "8px 0 16px" }} />

      <div className="footer-area">
        <div className="left">
          <nav>
            <ul>
              <li>
                <button type="button">
                  <i className="fa-regular fa-heart" />
                </button>
              </li>
              <li>
                <button type="button">
                  <i className="fa-regular fa-comment-dots" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <nav>
            <ul>
              <li>
                <button type="button">
                  <i className="fa-regular fa-bookmark" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
}

export default FeedContainer;
