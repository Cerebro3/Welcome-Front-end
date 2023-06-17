import React, { useState } from 'react';
import  Axios  from 'axios';

const LoginForm = (props) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const {handleLogin}=props;

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
// Envoyer les données de connexion à l'API back-end
Axios.post('https://welcome-back-end.onrender.com/api/welcome/auth/login',{ 
    email: email,
    password: password
    }).then((res)=>{res.data.user.token = res.data.token; handleLogin(res.data.user); console.log(res)});
};

return (
<form className="login-form" onSubmit={handleSubmit}>
<h2> Welcome dans la communauté EPSI/WIS !</h2>

<h3>Connectez-vous avec vos camarades</h3>
<div className="form-group">
<label htmlFor="email">Email:</label>
<input type="text" id="email" value={email} onChange={handleEmailChange} />
</div>
<div className="form-group">
<label htmlFor="password">Mot de passe:</label>
<input type="password" id="password" value={password} onChange={handlePasswordChange} />
</div>
<button type="submit">Se connecter</button>
</form>
);
};

export default LoginForm;