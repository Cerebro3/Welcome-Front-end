import React, { useState, useEffect } from 'react';
import Axios  from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Récupérer les informations de l'utilisateur connecté depuis l'API
    console.log('Je suis là !');
    fetch('/api/user')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Bio:</strong> {user.bio}
      </div>
      <div>
        <strong>Interests:</strong>{' '}
        {user.interests.map((interest) => (
          <span key={interest}>{interest} </span>
        ))}
      </div>
    </div>
  );
};

export default Profile;
