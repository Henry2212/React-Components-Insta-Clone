// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = props => {
  const {data} = props
  return (
    <div className="comment-text">
      <span className="user">{data.username}</span>
      {' '}
      <span className="comment">{data.text}</span>
    </div>
  );
};


export default Comment;
