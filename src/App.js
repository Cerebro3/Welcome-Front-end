import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Profile from './components/Profile';
import UserList from './components/UserList';
import Logout from './components/Logout';
import MessageList from './components/Messages';
import InfoUtilies from './components/InfoUtilies';
import Faq from './components/Faq';
import Welcome from './components/Welcome';
import PostPage from './components/PostPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  
    const updateUserData = (uD) => {
      
    };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (uD) => {
    setIsLoggedIn(true);
    setIsLoggedIn(true);
    setUserData(uD)
    setCurrentPage('messages');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginForm handleLogin={handleLogin} />;
      case 'register':
        return <RegisterForm handlePageChange={handlePageChange} />;
      case 'profile':
        return <Profile />;
      case 'users':
        return <UserList />;
      case 'messages':
        return (
          <>
            {isLoggedIn && <Logout handleLogout={handleLogout} />}
            <MessageList />
          </>
        );
      case 'info':
        return <InfoUtilies />;
      case 'faq':
        return <Faq />;
      case 'posts':
        return <PostPage/>
      default:
        return <Welcome handlePageChange={handlePageChange} isLoggedIn={isLoggedIn} />;
    }
  };

  return (
    <div className="container">
      <header className="header">
      <nav className="navbar" style={{backgroundColor: "#6800f1", position: "fixed", top: "0", width: "100%"}}>

          <div className="navbar-brand">
            <a className="navbar-item" href="#">
            <img src={require("./logo.png")} alt="Welcome"style={{ maxWidth: "100px" }}  />
            </a>
            <div className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="navbar-menu" id="navbarMenu">
            <div className="navbar-start">
              <a className="navbar-item" href="#" onClick={() => handlePageChange('info')}>
                Infos utiles
              </a>
              <a className="navbar-item" href="#" onClick={() => handlePageChange('faq')}>
                FAQ
              </a>
              <a className="navbar-item" href="#" onClick={() => handlePageChange('posts')}>
                Posts
              </a>
            </div>
            <div className="navbar-end">
              
              {!isLoggedIn && (
                <>
                  <a className="navbar-item" href="#" onClick={() => handlePageChange('login')}>
                    Se connecter
                  </a>
                  <a className="navbar-item" href="#" onClick={() => handlePageChange('register')}>
                    S'inscrire
                  </a>
                  
                
                  <a className="navbar-item" href="#" onClick={() => handlePageChange('messages')}>
                    Messages
                  </a>
                </>
              )}
              {isLoggedIn && (
                <>
                  <a className="navbar-item" href="#" onClick={() => handlePageChange('profile')}>
                    Profile
                  </a>
                  <a className="navbar-item" href="#" onClick={() => handlePageChange('users')}>
                    La liste des utilisateurs
                  </a>
                  <a className="navbar-item" href="#" onClick={() => handlePageChange('messages')}>
                    Messages
                  </a>
                </>
              )}
              {isLoggedIn && <Logout handleLogout={handleLogout} />}
            </div>
          </div>
        </nav>
      </header> 
      <BrowserRouter> 
      <Routes>
      <Route path = '/Welcome' Component = {Welcome}/>
      </Routes>
      </BrowserRouter>
      <div className="columns">
        <div className="column is-two-thirds">
          {renderPage()}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; Welcome, tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
