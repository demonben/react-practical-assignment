import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import Modal from "react-modal";
const PostItem = ({ post }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  let votes = post.likes - post.dislikes;

  const openCommentsModal = () => {
    setIsOpen(true);
  };
  const closeCommentsModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="post-item">
      <div>
        <div className="post-card">
          <span className="line-title">Author:</span>
          <span>{post.username}</span>
        </div>
        <div className="post-card">
          <span className="line-title">Title:</span>
          <span>{post.title}</span>
        </div>
        <div className="post-card">
          <span className="line-title">Votes:</span>
          <span>{votes}</span>
        </div>
        <div className="post-card">
          <span className="line-title">Timestamp:</span>
          <span>{post.date}</span>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeCommentsModal}
          contentLabel="test"
          ariaHideApp={false}
        >
          <AiOutlineCloseCircle onClick={closeCommentsModal} />
        </Modal>
        <div className="post-icons-section">
          <button className="icon-button" onClick={openCommentsModal}>
            <FaRegCommentDots className="post-icon" />
          </button>
          <button className="icon-button">
            <AiOutlineLike className="post-icon" />
          </button>
          <button className="icon-button">
            <AiOutlineDislike className="post-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
