import React from "react";
import PostItem from "./PostItem";
import PaginationBtn from "./PaginationBtn";
import { useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      <div className="posts-list">
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
      <PaginationBtn />
    </div>
  );
};

export default PostList;
