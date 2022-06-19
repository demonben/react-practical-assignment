import React, { useState } from "react";
import { searchPosts } from "../lib/api";
import styles from "./NewPostForm.module.css";
import { getPostsByPage } from "../lib/api";
import { useDispatch } from "react-redux";
import { changePosts } from "../redux/postsSlice";

const SearchBar = ({ pageNumber }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (text) {
      searchPosts(text).then((posts) => {
        dispatch(changePosts(posts.result));
      });
    } else {
      getPostsByPage(pageNumber).then((posts) => {
        dispatch(changePosts(posts.result));
      });
    }
  };
  return (
    <div>
      {" "}
      <form onSubmit={submitHandler} className={styles.Form}>
        <input
          className={styles.Input}
          placeholder=" Type search text.."
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className={styles.Button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
