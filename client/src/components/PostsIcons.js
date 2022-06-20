import React, { useState, useEffect } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { editPosts } from "../lib/api";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";

const PostsIcons = ({ openCommentsModal, post }) => {
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  let user = localStorage.getItem("user");
  // useEffect(() => {}, [setLikes]);

  const handleLike = () => {
    setLikes([...likes, user]);
    let postObj = { likes: likes };
    handleVotes(postObj);
  };
  const handleDislike = () => {
    setLikes(likes.filter((like) => like !== user));
    setDislikes([...dislikes, user]);
    let postObj = { dislikes: dislikes };
    handleVotes(postObj);
  };
  const handleVotes = (postObj) => {
    console.log(postObj);
    editPosts(post.id, postObj);
    dispatch(updateAsync(1));
  };
  return (
    <div>
      {" "}
      <div className="post-icons-section">
        <button className="icon-button" onClick={openCommentsModal}>
          <FaRegCommentDots className="post-icon" />
        </button>
        {!likes.includes(user) && (
          <button className="icon-button" onClick={handleLike}>
            <AiOutlineLike className="post-icon" />
          </button>
        )}
        {!dislikes.includes(user) && (
          <button className="icon-button" onClick={handleDislike}>
            <AiOutlineDislike className="post-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PostsIcons;
