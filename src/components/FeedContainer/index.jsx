import { Divider, Input } from "antd";
import React, { useState } from "react";

import MoreSquare from "../../assets/feed/more-square.svg";
import DefaultImage from "../../assets/layout/user-default.png";
import { Container, ModalComments } from "./styles";

function FeedContainer({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <div className="header">
        <div className="left">
          <img
            src={data.user.image || DefaultImage}
            alt={data.user.name}
            title={data.user.name}
          />
          <div className="description">
            <p>{data.user.name}</p>
            <span>{data.user.career}</span>
          </div>
        </div>
        <div className="right">
          <button type="button">
            <img src={MoreSquare} alt="more" title="more" />
          </button>
        </div>
      </div>

      <div className="text-area">
        <p>{data.text}</p>
      </div>

      {data.image && (
        <div className="img-area">
          <img src={data.image} alt={data.user.name} title={data.user.name} />
        </div>
      )}

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
                <ModalComments
                  title="Comments"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <article>
                    <div className="img-area">
                      <img src={DefaultImage} alt="" />
                    </div>
                    <div className="text-area">
                      <div className="title">
                        <p>Elon Musk</p>
                        <span>30/09/2022</span>
                      </div>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta eveniet aut consectetur error, modi
                          numquam deserunt delectus doloribus perspiciatis,
                          optio fugit mollitia minus commodi amet, laboriosam
                          quos recusandae. Rem, nobis?
                        </p>
                      </div>
                    </div>
                  </article>
                  <Input.TextArea
                    id="comments"
                    name="comments"
                    placeholder="Fazer um comentário"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                </ModalComments>
                <button onClick={showModal} type="button">
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
