import React from "react";

const PostItem = ({ post }) => {
  return (
    <div>
      <span>{post.title}</span>
    </div>
  );
};

export default PostItem;
