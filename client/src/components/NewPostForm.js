import React, { useState } from "react";
import { addPosts } from "../lib/api";
import styles from "./NewPostForm.module.css";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const NewPostForm = () => {
  const currentPage = useSelector((state) => state.posts.currentPage);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    let user = localStorage.getItem("user");
    let postObj = { title: text, username: user };
    await addPosts(postObj);
    dispatch(updateAsync(currentPage));
    setIsLoading(false);
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
        {!isLoading ? (
          <button className={styles.Button} type="submit">
            Add
          </button>
        ) : (
          <Loader/>
        )}
      </form>
    </div>
  );
};

export default NewPostForm;
