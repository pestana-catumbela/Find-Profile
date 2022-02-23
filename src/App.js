import React, { useEffect, useState } from "react";
import logo from './img/logo.png';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
    .then(response => response.json())
    .then(userResponse => setUserData(userResponse));
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
    <div className='all'>
      <div className="parent">
        <div className="son1">
          <img className="logo" src={logo}/>
          <h1 className='fp'>Find Profile</h1>
        </div>

        <form className='form' onSubmit={handleSubmit}>
          <div className="son2">
            <input type="text" className="inpt" value={search} onChange={handleChange} required/>
            <button type='submit'>Find User</button>
          </div>
        </form>

        <div className="infotext">
          <p className="text">
            This site is a classic example of a Single Page application (SPA),
            where you can enjoy its beautiful infrastructure and of course its great functionality.<br/><br/>
            Here you can, by username, bring any and all profiles from github with your main data.<br/><br/>
            So make the most of it!
          </p>
        </div>
      </div>

      <div className='result'>
        {userData && (
          <div className="parent_">
            <img className="avatar" src={userData.avatar_url}/>
            <h2 className="name">
              {userData.name}
              {!userData.name && (
                <i>************</i>
              )}
            </h2>
            <h2 className="bio">
              {userData.bio}
              {!userData.bio && (
                <i>************</i>
              )}
            </h2>
            <p>
              <strong>Id: </strong>
              {userData.id}
              {!userData.id && (
                <i>************</i>
              )}
              
              <strong> Username: </strong>
              {userData.login}
              {!userData.login && (
                <i>************</i>
              )}
            </p>
            <p>
              <strong>Adress: </strong>
              {userData.location}
              {!userData.location && (
                <i>************</i>
              )}

              <strong> Email: </strong>
              {userData.email}
              {!userData.email && (
                <i>************</i>
              )}
            </p>
            <p>
              <strong>Company: </strong>
              {userData.company}
              {!userData.company && (
                <i>************</i>
              )}

              <strong> Site: </strong>
              {userData.blog}
              {!userData.blog && (
                <i>************</i>
              )}
            </p>
          </div>
        )}
      </div>
    </div>

    <div className="footer">
        <span>Copyright 2022 | <strong>devPPC</strong> | All Right Reserved</span>
      </div>
    </div>
  );
}

export default App;
