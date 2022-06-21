import React, { useState } from "react";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";
import EditCommentModal from "./EditCommentModal";
import CommentsIcons from "./CommentsIcons";
import { deleteComment } from "../lib/api";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";

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
    deleteComment(comment.id);
    dispatch(updateAsync(currentPage));
  };

  return (
    <div className="post-item">
      <Card>
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
          <CommentsIcons
            post={post}
            comment={comment}
            handleDeletePost={handleDeletePost}
            openEditModal={openEditModal}
          />
          <EditCommentModal
            comment={comment}
            post={post}
            closeEditModal={closeEditModal}
            editModalIsOpen={editModalIsOpen}
          />
        </div>
      </Card>
    </div>
  );
};

export default CommentItem;
