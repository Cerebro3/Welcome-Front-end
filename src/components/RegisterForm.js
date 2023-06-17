import React, { useState } from 'react';
import  Axios  from 'axios';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données d'inscription à l'API back-end
    Axios.post('https://welcome-back-end.onrender.com/api/welcome/auth/register',{ 
    name: lastName,
    email: email,
    school: 'EPSI',
    address: '4 Rue Paul', 
    question: 'Combien de coups ?',
    password: password
    }).then(()=>{alert('Inscription réussie');});
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Inscription</h2>
      <div className="form-group">
        <label htmlFor="firstName">Prénom :</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Nom :</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default RegisterForm;
