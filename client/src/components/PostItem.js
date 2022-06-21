import React, { useState } from "react";
import { deletePost } from "../lib/api";
import CommentsModal from "./CommentsModal";
import EditPostModal from "./EditPostModal";
import PostsIcons from "./PostsIcons";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";

const PostItem = ({ post }) => {
  const currentPage = useSelector((state) => state.posts.currentPage);

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

  const handleDeletePost = async () => {
    await deletePost(post.id);
    dispatch(updateAsync(currentPage));
  };

  return (
    <div className="post-item">
      <Card>
        <div>
          <img
            className="image"
            src={post.imageSrc}
            alt="no post img"
            width="200"
            height="200"
          ></img>
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
          <PostsIcons
            post={post}
            openCommentsModal={openCommentsModal}
            openEditModal={openEditModal}
            handleDeletePost={handleDeletePost}
          />
          <EditPostModal
            post={post}
            closeEditModal={closeEditModal}
            editModalIsOpen={editModalIsOpen}
          />
        </div>
      </Card>
    </div>
  );
};

export default PostItem;
