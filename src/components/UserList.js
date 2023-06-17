import React from 'react';

const UserList = () => {
  const users = [
    { id: 1, username: 'Armandine PIYO' },
    { id: 2, username: 'Kirikou DELAROCHELLE' },
    { id: 3, username: 'Jonas ViDEGLO' },
    { id: 4, username: 'God s Will AVOY' }
  ];

  return (
    <div>
      <h2>La liste de quelques uns de vos camarades</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
