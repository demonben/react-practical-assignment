import React, { useEffect, useState } from "react";
import PostsList from "../components/PostList";
import { getPostsByPage } from "../lib/api";
import { useDispatch } from "react-redux";
import { changePosts } from "../redux/postsSlice";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/Navbar";

const MainPage = ({ user, logout }) => {
  // const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getPostsByPage(pageNumber).then((posts) => {
      setTotalPages(posts.totalPages);
      dispatch(changePosts(posts.result));
    });
  }, [pageNumber]);
  return (
    <div>
      <NavBar user={user} logout={logout} />{" "}
      <SearchBar 
      setPageNumber={setPageNumber}
       pageNumber={pageNumber} />
      <PostsList
        totalPages={totalPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default MainPage;
