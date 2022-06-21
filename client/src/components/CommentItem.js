import React, { useState } from "react";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";
import EditCommentModal from "./EditCommentModal";
import CommentsIcons from "./CommentsIcons";
import { deleteComment } from "../lib/api";
import { useSelector } from "react-redux";

const CommentItem = ({ comment, post }) => {
  const currentPage = useSelector((state) => state.posts.currentPage);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  let votes = comment.likes.length - comment.dislikes.length;

  const openEditModal = () => {
    setEditModalIsOpen(true);
  };
  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };


  const handleDeletePost = () => {
    console.log("comment.id", comment.id);
    deleteComment(comment.id);
    dispatch(updateAsync(currentPage));
  };

  return (
    <div className="post-item">
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
        <CommentsIcons post={post} comment={comment}/>
        <EditCommentModal
          comment={comment}
          post={post}
          closeEditModal={closeEditModal}
          editModalIsOpen={editModalIsOpen}
        />
        {localStorage.getItem("user") === comment.username && (
          <div>
            <button onClick={openEditModal}>edit</button>
            <button onClick={handleDeletePost}>delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
