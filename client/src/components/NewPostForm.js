import React, { useState } from "react";
import { addPosts } from "../lib/api";
import styles from "./NewPostForm.module.css";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";

const NewPostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  
  const submitHandler = (event) => {
    event.preventDefault();
    let user = localStorage.getItem("user");
    let postObj = { title: text, username: user };
    addPosts(postObj);
    dispatch(updateAsync(1));
  };
  return (
    <div>
      {" "}
      <form onSubmit={submitHandler} className={styles.Form}>
        <input
          className={styles.Input}
          placeholder=" Type you're post title.."
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className={styles.Button} type="submit">
          post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
