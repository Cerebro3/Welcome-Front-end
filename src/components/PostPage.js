import React, { useState } from 'react';
import CommentList from './Comment';

const ExampleComponent = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    setShowComments(!showComments);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  return (
    <div className="example-component">
      <div className="post">
      <img src={require("./Demon Slayer.jpg")} alt="Post" />
        <p>Post de votre camarade Kirikou </p>
      </div>
      <div className="actions">
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleComment}>Comment ({comments})</button>
        <button onClick={handleShare}>Share ({shares})</button>
      </div>
      <div>
      {showComments && <CommentList />}
      </div>
    </div>
  );
};

export default ExampleComponent;
