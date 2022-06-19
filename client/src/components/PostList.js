import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, pageNumber, setPageNumber }) => {
  return (
    <div>
      <div className="posts-list">
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
      {/* <PaginationBtn pageNumber={pageNumber} setPageNumber={setPageNumber} /> */}
    </div>
  );
};

export default PostList;
