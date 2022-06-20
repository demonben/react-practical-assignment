import React, { useState } from "react";
import { createComment } from "../lib/api";
import styles from "./NewPostForm.module.css";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";

const NewCommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    let user = localStorage.getItem("user");
    let commentObj = { text: text, postId: post.id, username: user };
    createComment(commentObj);
    dispatch(updateAsync(1));
  };
  return (
    <div>
      {" "}
      <form onSubmit={submitHandler} className={styles.Form}>
        <input
          className={styles.Input}
          placeholder=" Type you're comment title.."
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className={styles.Button} type="submit">
          comment
        </button>
      </form>
    </div>
  );
};

export default NewCommentForm;
