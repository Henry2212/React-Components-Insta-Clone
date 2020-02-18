// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
const {Comments} = props
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {Comments.map(i => (
        <comment data = {i}/>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
