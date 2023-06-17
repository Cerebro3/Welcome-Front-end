import React from 'react';
import handlePageChange from '../App'

function Welcome() {
  const backgroundStyle = {
    backgroundImage: `url(${require("../infosUtiles.png")})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#8b00ff',
    marginBottom: '2rem',
    marginTop: '100px'

  };

  const paragraphStyle = {
   
    fontSize: '1.5rem',
    backgroundColor: '#e9b714',
    color:'#8b00ff',
    maxWidth: '60%',
    margin: '0 auto'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem'
  };

  const buttonStyle = {
    backgroundColor: '#e9b714',
    color: '#8b00ff',
    padding: '1rem 2rem',
    borderRadius: '1rem',
    marginRight: '1rem'
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={titleStyle}>Welcome</h1>
      <p style={paragraphStyle}>
        Notre plateforme est conçue pour aider les étudiants à communiquer entre eux et à partager des bons plans. Nous sommes là pour faciliter votre vie étudiante en vous offrant un espace convivial où vous pouvez discuter, échanger des astuces et des conseils, et trouver toutes les informations dont vous avez besoin pour réussir dans vos études. Rejoignez-nous dès maintenant et découvrez une communauté d'étudiants motivés et bienveillants !
      </p>
    </div>
  );
};

export default Welcome;
