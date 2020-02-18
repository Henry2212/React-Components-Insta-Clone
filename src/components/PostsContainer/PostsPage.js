//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = props => {
  const {data} = props
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {data.map(i => (
        <Post data = {i}/>
      ))}
    </div>
  );
}
export default PostsPage;

