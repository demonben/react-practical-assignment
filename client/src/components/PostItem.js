import React, { useState } from "react";
import { deletePost } from "../lib/api";
import CommentsModal from "./CommentsModal";
import EditPostModal from "./EditPostModal";
import PostsIcons from "./PostsIcons";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";

const PostItem = ({ post }) => {
  const [CommentsModalIsOpen, setCommentsModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  let votes = post.likes.length - post.dislikes.length;

  const openEditModal = () => {
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

  const handleDeletePost = () => {
    console.log("deleted");
    deletePost(post.id);
    dispatch(updateAsync(1))
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
          post={post}
        />
        <PostsIcons post={post} openCommentsModal={openCommentsModal} />
        <EditPostModal
          post={post}
          closeEditModal={closeEditModal}
          editModalIsOpen={editModalIsOpen}
        />
        {localStorage.getItem("user") === post.username && (
          <div>
            <button onClick={openEditModal}>edit</button>
            <button onClick={handleDeletePost}>delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;
