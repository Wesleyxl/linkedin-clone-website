import { Row, Col, Button, Divider } from "antd";
import React from "react";

// images
import DylanImg from "../../assets/feed/dylan-image.png";
import GoogleImg from "../../assets/feed/google.png";
import RyanImg from "../../assets/feed/ryan-image.png";
import SteveImg from "../../assets/feed/steve-image.png";
import TeslaImg from "../../assets/feed/tesla.png";
// end images
import {
  CardContainer,
  Container,
  PagesContainerList,
  PeopleSuggestionList,
} from "./styles";

function Home() {
  return (
    <Container>
      <Row>
        <Col span={6}>
          <CardContainer>
            <h1>Card left</h1>
          </CardContainer>

          <CardContainer>
            <PagesContainerList>
              <nav>
                <ul>
                  <li>
                    <a href="/" alt="Tesla, Inc." title="Tesla, Inc.">
                      <img
                        src={TeslaImg}
                        alt="Tesla, Inc."
                        title="Tesla, Inc."
                      />
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
          </CardContainer>
        </Col>

        <Col span={12}>
          <CardContainer>
            <h1>Center</h1>
          </CardContainer>
        </Col>

        <Col span={6}>
          <CardContainer>
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
                      <img
                        src={DylanImg}
                        alt="Dylan Field"
                        title="Dylan Field"
                      />
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
          </CardContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
