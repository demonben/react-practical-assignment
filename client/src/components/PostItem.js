import React, { useState } from "react";

import CommentsModal from "./CommentsModal";
import EditModal from "./EditModal";
import PostsIcons from "./PostsIcons";

const PostItem = ({ post }) => {
  const [CommentsModalIsOpen, setCommentsModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  let votes = post.likes - post.dislikes;

  const openEditModal = () => {
    console.log("hello world");
    setEditModalIsOpen(true);
  };
  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  const openCommentsModal = () => {
    setCommentsModalIsOpen(true);
  };
  const closeCommentsModal = () => {
    setCommentsModalIsOpen(false);
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
          CommentsModalIsOpen={CommentsModalIsOpen}
          closeCommentsModal={closeCommentsModal}
        />
        <PostsIcons openCommentsModal={openCommentsModal} />
        <EditModal
          closeEditModal={closeEditModal}
          editModalIsOpen={editModalIsOpen}
        />
        {localStorage.getItem("user") === post.username && (
          <button onClick={openEditModal}>edit</button>
        )}
      </div>
    </div>
  );
};

export default PostItem;
