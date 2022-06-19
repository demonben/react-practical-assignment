import React, { useEffect, useState } from "react";
import PostsList from "../components/PostList";
import { getPostsByPage } from "../lib/api";
import { useDispatch } from "react-redux";
import { changePosts } from "../redux/postsSlice";

import NavBar from "../components/Navbar";

const MainPage = ({ user, logout }) => {
  // const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getPostsByPage(pageNumber).then((posts) => {
      // setPosts(posts);
      dispatch(changePosts(posts));
    });
  }, [pageNumber]);
  return (
    <div>
      <NavBar user={user} logout={logout} />{" "}
      <PostsList pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
};

export default MainPage;
