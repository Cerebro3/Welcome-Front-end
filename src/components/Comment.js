import React, { useState } from 'react';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const sendComment = () => {
    const newComment = {
      sender: 'Vous avez commenté cette photo',
      text: commentText
    };

    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <div className="comment-container">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.sender}</strong>: {comment.text}
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
        <button onClick={sendComment}>Send</button>
      </div>
    </div>
  );
};

export default CommentList;
