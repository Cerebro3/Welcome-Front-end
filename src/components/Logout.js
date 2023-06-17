import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
