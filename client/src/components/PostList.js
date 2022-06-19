import React from "react";
import PostItem from "./PostItem";
import PaginationBtn from "./PaginationBtn";
import { useSelector } from "react-redux";

const PostList = ({ pageNumber, setPageNumber }) => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      <div className="posts-list">
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
      <PaginationBtn pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
};

export default PostList;
