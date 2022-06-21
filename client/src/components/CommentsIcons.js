import React, { useState, useEffect } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { editComment } from "../lib/api";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CommentsIcons = ({ post, comment, openEditModal, handleDeletePost }) => {
  const currentPage = useSelector((state) => state.posts.currentPage);
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(comment.likes);
  const [dislikes, setDislikes] = useState(comment.dislikes);
  let user = localStorage.getItem("user");

  useEffect(() => {
    if (likes.includes(user)) {
      let commentObj = { likes: likes, dislikes: dislikes };
      handleVotes(commentObj);
    } else if (dislikes.includes(user)) {
      let commentObj = { likes: likes, dislikes: dislikes };
      handleVotes(commentObj);
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
  const handleVotes = (commentObj) => {
    editComment(comment.id, commentObj);
    dispatch(updateAsync(currentPage));
  };

  return (
    <div>
      {" "}
      <div className="post-icons-section">
        {!likes.includes(user) && (
          <AiOutlineLike className="post-icon" onClick={handleLike} />
        )}
        {!dislikes.includes(user) && (
          <AiOutlineDislike onClick={handleDislike} className="post-icon" />
        )}
        {localStorage.getItem("user") === comment.username && (
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

export default CommentsIcons;
