import React, { useEffect, useState } from "react";
import PostsList from "../components/PostList";
import { getPostsByPage } from "../lib/api";
import { useDispatch } from "react-redux";
import { changePosts } from "../redux/postsSlice";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/Navbar";
import NewPostForm from "../components/NewPostForm";
import { useSelector } from "react-redux";
const MainPage = ({ user, logout }) => {
  const currentPage = useSelector((state) => state.posts.currentPage);
  const posts = useSelector((state) => state.posts.posts);

  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getPostsByPage(currentPage).then((posts) => {
      setTotalPages(posts.totalPages);
      dispatch(changePosts(posts.result));
    });
  }, [pageNumber, currentPage]);
  return (
    <div>
      <NavBar user={user} logout={logout} />{" "}
      {posts.length === 0 ? (
        <center id="no-posts-text">There are no posts on the wall yet</center>
      ) : (
        <div>
          <SearchBar setPageNumber={setPageNumber} pageNumber={pageNumber} />
          <PostsList />
        </div>
      )}
      <NewPostForm />
    </div>
  );
};

export default MainPage;
