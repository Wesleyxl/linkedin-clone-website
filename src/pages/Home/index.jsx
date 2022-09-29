import { Row, Col, Button, Divider } from "antd";
import React from "react";

// images
import DylanImg from "../../assets/feed/dylan-image.png";
import PencilIcon from "../../assets/feed/edit.svg";
import GoogleImg from "../../assets/feed/google.png";
import RyanImg from "../../assets/feed/ryan-image.png";
import SteveImg from "../../assets/feed/steve-image.png";
import TeslaImg from "../../assets/feed/tesla.png";
import WesleyImg from "../../assets/feed/wesley-logo.png";
import FeedContainer from "../../components/FeedContainer";
// end images
import {
  Container,
  PagesContainerList,
  PeopleSuggestionList,
  ProfileContainer,
  CreatePostContainer,
  MenuConfigContainer,
} from "./styles";

function Home() {
  return (
    <Container>
      <Row>
        <Col span={6}>
          <ProfileContainer>
            <div className="profile">
              <img src={WesleyImg} alt="Wesley Alves" title="Wesley Alves" />
              <div className="description">
                <p>Wesley Alves</p>
                <span>Programador</span>
              </div>
            </div>
          </ProfileContainer>

          <PagesContainerList>
            <nav>
              <ul>
                <li>
                  <a href="/" alt="Tesla, Inc." title="Tesla, Inc.">
                    <img src={TeslaImg} alt="Tesla, Inc." title="Tesla, Inc." />
                    Tesla, Inc.
                  </a>
                  <span>2</span>
                </li>
                <li>
                  <a href="/" alt="Google" title="Google">
                    <img src={GoogleImg} alt="Google" title="Google" />
                    Google
                  </a>
                  <span>+99</span>
                </li>
              </ul>
            </nav>
            <div className="btn-area">
              <a href="/">
                <div>
                  <i className="fa-solid fa-plus" />
                </div>
                Add new page
              </a>
            </div>
          </PagesContainerList>

          <MenuConfigContainer>
            <nav>
              <ul>
                <li>
                  <a href="/" alt="" title="">
                    <i className="fa-regular fa-circle-play" />
                    Learning
                  </a>
                </li>
                <li>
                  <a href="/" alt="" title="">
                    <i className="fa-solid fa-list" />
                    Insights
                  </a>
                </li>
                <li>
                  <a href="/" alt="" title="">
                    <i className="fa-solid fa-users" />
                    Find Colleagues
                  </a>
                </li>
                <li>
                  <a href="/" alt="" title="">
                    <i className="fa-regular fa-bookmark" />
                    Bookmarks
                  </a>
                </li>
                <li>
                  <a href="/" alt="" title="">
                    <i className="fa-solid fa-gamepad" />
                    Gaming
                  </a>
                  <div>new</div>
                </li>
                <li>
                  <a href="/" alt="" title="">
                    <i className="fa-solid fa-gears" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </MenuConfigContainer>
        </Col>

        <Col span={12}>
          <CreatePostContainer>
            <div className="write-text">
              <button type="button">
                <img
                  src={PencilIcon}
                  alt="Write something"
                  title="Write something"
                />
                <p>Write something ...</p>
              </button>
            </div>

            <Divider style={{ margin: "8px 0 16px" }} />

            <nav>
              <ul>
                <li>
                  <button type="button">
                    <i className="fa-regular fa-image" />
                    Photo
                  </button>
                </li>
                <li>
                  <button type="button">
                    <i className="fa-regular fa-circle-play" />
                    Video
                  </button>
                </li>
                <li>
                  <button type="button">
                    <i className="fa-regular fa-calendar" />
                    Event
                  </button>
                </li>
                <li>
                  <button type="button">
                    <i className="fa-regular fa-newspaper" />
                    Article
                  </button>
                </li>
              </ul>
            </nav>
          </CreatePostContainer>

          {/* Feeds */}
          <FeedContainer />
        </Col>

        <Col span={6}>
          <PeopleSuggestionList>
            <div className="title">
              <p>People you may know:</p>
            </div>
            <nav>
              <ul>
                <li>
                  <div className="left">
                    <img src={SteveImg} alt="Steve Jobs" title="Steve Jobs" />
                    <div className="description">
                      <p>Steve Jobs</p>
                      <span>CEO of Apple</span>
                    </div>
                  </div>
                  <div className="right">
                    <Button
                      style={{ color: "#00ACFF", borderColor: "#00ACFF" }}
                    >
                      Connect
                    </Button>
                  </div>
                </li>

                <li>
                  <div className="left">
                    <img
                      src={RyanImg}
                      alt="Ryan Roslansky"
                      title="Ryan Roslansky"
                    />
                    <div className="description">
                      <p>Ryan Roslansky</p>
                      <span>CEO of LinkedIn</span>
                    </div>
                  </div>
                  <div className="right">
                    <Button
                      style={{ color: "#00ACFF", borderColor: "#00ACFF" }}
                    >
                      Connect
                    </Button>
                  </div>
                </li>

                <li>
                  <div className="left">
                    <img src={DylanImg} alt="Dylan Field" title="Dylan Field" />
                    <div className="description">
                      <p>Dylan Field</p>
                      <span>CEO of Figma</span>
                    </div>
                  </div>
                  <div className="right">
                    <Button
                      style={{ color: "#00ACFF", borderColor: "#00ACFF" }}
                    >
                      Connect
                    </Button>
                  </div>
                </li>
              </ul>
            </nav>
            <Divider style={{ margin: "8px 0" }} />
            <div className="link">
              <a href="/peoples">See all</a>
            </div>
          </PeopleSuggestionList>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
