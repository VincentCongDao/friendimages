import React, { useContext } from "react";
import { ContextProvider } from "../Hero/Context";

// import Comment from "./Comments";
const Posts = () => {
  const { posts } = useContext(ContextProvider);
  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div className="posts-header">
            <div className="posts-header-avator">{post.username[0]}</div>
            <div className="posts-header-name">{post.username}</div>
          </div>
          <div className="posts-img">
            <img src={post.image} alt={post.image} />
          </div>
          {/* <Comment id={post.id} /> */}
        </div>
      ))}
    </>
  );
};

export default Posts;
