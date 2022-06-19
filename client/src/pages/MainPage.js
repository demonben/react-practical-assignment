import React, { useEffect, useState } from "react";
import PostsList from "../components/PostList";
import { getPostsByPage } from "../lib/api";
import NavBar from "../components/Navbar";

const MainPage = ({ user, logout }) => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    getPostsByPage(pageNumber).then((posts) => {
      setPosts(posts);
    });
  }, [pageNumber]);
  return (
    <div>
      <NavBar user={user} logout={logout} />{" "}
      <PostsList
        posts={posts}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default MainPage;
