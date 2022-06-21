import React, { useState, useEffect } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { editPosts } from "../lib/api";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const PostsIcons = ({
  openCommentsModal,
  post,
  openEditModal,
  handleDeletePost,
}) => {
  const currentPage = useSelector((state) => state.posts.currentPage);
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  let user = localStorage.getItem("user");

  useEffect(() => {
    if (likes.includes(user)) {
      let postObj = { likes: likes, dislikes: dislikes };
      handleVotes(postObj);
    } else if (dislikes.includes(user)) {
      let postObj = { likes: likes, dislikes: dislikes };
      handleVotes(postObj);
    }
  }, [likes, dislikes]);

  const handleLike = () => {
    setDislikes(dislikes.filter((dislike) => dislike !== user));
    setLikes([...likes, user]);
  };
  const handleDislike = () => {
    setLikes(likes.filter((like) => like !== user));
    setDislikes([...dislikes, user]);
  };
  const handleVotes = (postObj) => {
    editPosts(post.id, postObj);
    dispatch(updateAsync(currentPage));
  };

  return (
    <div>
      {" "}
      <div className="post-icons-section">
        <FaRegCommentDots className="post-icon" onClick={openCommentsModal} />
        {!likes.includes(user) && (
          <AiOutlineLike className="post-icon" onClick={handleLike} />
        )}
        {!dislikes.includes(user) && (
          <AiOutlineDislike onClick={handleDislike} className="post-icon" />
        )}
        {localStorage.getItem("user") === post.username && (
          <div>
            <FiEdit className="post-icon" onClick={openEditModal} />
            <RiDeleteBin5Line
              className="post-icon"
              onClick={handleDeletePost}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsIcons;
