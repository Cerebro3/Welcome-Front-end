import React, { useState } from 'react';

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  const sendMessage = () => {
    const newMessage = {
      sender: 'Armandine',
      text: messageText
    };

    setMessages([...messages, newMessage]);
    setMessageText('');
  };

  return (
    <div className="message-container">
      <h2>Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.sender}</strong>: {message.text}
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default MessageList;
