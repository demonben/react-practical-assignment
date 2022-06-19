import React, { useState } from "react";

import CommentsModal from "./CommentsModal";
import PostsIcons from "./PostsIcons";

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
        <CommentsModal
          modalIsOpen={modalIsOpen}
          closeCommentsModal={closeCommentsModal}
        />
        <PostsIcons openCommentsModal={openCommentsModal} />
      </div>
    </div>
  );
};

export default PostItem;
