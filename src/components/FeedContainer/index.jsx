import { Divider, Input } from "antd";
import React, { useState } from "react";

import { commentRoutes } from "../../api/commentRoutes";
import { commentRoute } from "../../api/index";
import MoreSquare from "../../assets/feed/more-square.svg";
import DefaultImage from "../../assets/layout/user-default.png";
import { Container, ModalComments } from "./styles";

function FeedContainer({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const showModal = async () => {
    const response = await commentRoutes.showAll(data.id);
    setComments(response);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (newComment === "") {
      setIsModalOpen(false);
    } else {
      const response = await commentRoute.create(data.id, newComment);

      if (response.error) {
        setNewComment("");
        setIsModalOpen(false);
      } else {
        const restartComments = await commentRoutes.showAll(data.id);
        setComments(restartComments);
        setNewComment("");
      }
    }
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
                  {comments.map((comment) => (
                    <article key={comment.id}>
                      <div className="img-area">
                        <img src={comment.user.image || DefaultImage} alt="" />
                      </div>
                      <div className="text-area">
                        <div className="title">
                          <p>{comment.user.name}</p>
                          <span>{comment.updatedAt}</span>
                        </div>
                        <div className="text">
                          <p>{comment.text}</p>
                        </div>
                      </div>
                    </article>
                  ))}
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
