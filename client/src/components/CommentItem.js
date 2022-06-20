import React, { useState } from "react";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";
import PostsIcons from "./PostsIcons";


const CommentItem = ({ comment }) => {

  const [CommentsModalIsOpen, setCommentsModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  let votes = comment.likes - comment.dislikes;

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
    // deletePost(post.id);
    // dispatch(updateAsync(1))
  };

  return <div className="post-item">
  <div>
    <div className="post-card">
      <span className="line-title">Author:</span>
      <span>{comment.username}</span>
    </div>
    <div className="post-card">
      <span className="line-title">Title:</span>
      <span>{comment.text}</span>
    </div>
    <div className="post-card">
      <span className="line-title">Votes:</span>
      <span>{votes}</span>
    </div>
    <div className="post-card">
      <span className="line-title">Timestamp:</span>
      <span>{comment.date}</span>
    </div>
    <PostsIcons openCommentsModal={openCommentsModal} />
    {/* <EditModal
      post={post}
      closeEditModal={closeEditModal}
      editModalIsOpen={editModalIsOpen}
    /> */}
    {localStorage.getItem("user") === comment.username && (
      <div>
        <button onClick={openEditModal}>edit</button>
        <button onClick={handleDeletePost}>delete</button>
      </div>
    )}
  </div>
</div>;
};

export default CommentItem;
