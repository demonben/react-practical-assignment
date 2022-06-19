import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const PostsIcons = ({ openCommentsModal }) => {
  return (
    <div>
      {" "}
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
  );
};

export default PostsIcons;
