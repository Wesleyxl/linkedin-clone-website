import { Row, Col, Button, Divider, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState, useEffect, useRef } from "react";

import { feedRoute } from "../../api";

// images
import DylanImg from "../../assets/feed/dylan-image.png";
import PencilIcon from "../../assets/feed/edit.svg";
import GoogleImg from "../../assets/feed/google.png";
import RyanImg from "../../assets/feed/ryan-image.png";
import SteveImg from "../../assets/feed/steve-image.png";
import TeslaImg from "../../assets/feed/tesla.png";
import DefaultImage from "../../assets/layout/user-default.png";
import FeedContainer from "../../components/FeedContainer";
// end images
import Header from "../../layouts/Header/index";
import {
  Container,
  PagesContainerList,
  PeopleSuggestionList,
  ProfileContainer,
  CreatePostContainer,
  MenuConfigContainer,
} from "./styles";

function Home() {
  // states
  const [feeds, setFeeds] = useState([]);
  const [textFeed, setTextFeed] = useState("");
  const me = JSON.parse(localStorage.getItem("user"));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleGetFeeds = async () => {
      const response = await feedRoute.getAll();
      setFeeds(response);
    };

    handleGetFeeds();
  }, []);

  // create feed
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (!textFeed || textFeed === "") {
      setIsModalOpen(false);
    } else {
      const response = await feedRoute.createFeed(textFeed);
      const feedResponse = await feedRoute.getAll();

      console.log(response);

      setFeeds(feedResponse);
      setTextFeed("");
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header />
      <Row>
        <Col span={6}>
          <ProfileContainer>
            <div className="profile">
              <img
                src={me.image || DefaultImage}
                alt="Wesley Alves"
                title="Wesley Alves"
              />
              <div className="description">
                <p>{me.name}</p>
                <span>{me.career}</span>
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
              <button type="button" onClick={showModal}>
                <img
                  src={PencilIcon}
                  alt="Write something"
                  title="Write something"
                />
                <p>Write something ...</p>
              </button>
            </div>
            <Modal
              title="Create Feed"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <TextArea
                id="text"
                name="text"
                placeholder="Write something"
                value={textFeed}
                onChange={(e) => setTextFeed(e.target.value)}
                rows={5}
                style={{ border: "none" }}
              />
              {/* <input type="file" name="file" id="file" multiple ref={} /> */}
            </Modal>

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
          {feeds.length >= 1 ? (
            feeds.map((feed) => <FeedContainer key={feed.id} data={feed} />)
          ) : (
            <h1>Loading</h1>
          )}
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
