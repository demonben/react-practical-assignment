import React, { useState, useEffect } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { editComment } from "../lib/api";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CommentsIcons = ({ post, comment }) => {
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

export default CommentsIcons;
