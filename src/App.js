import React, { useState, useEffect } from 'react';
import TokenDataService from './services/token.service';
import { getToken } from './firebase';
import { getUserName } from './index';
function App() {
  const [token, setTokenFound] = useState(false);
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    const fcmNotificationToken = localStorage.getItem('fcmNotificationToken')
    if (fcmNotificationToken) {
      setTokenFound(fcmNotificationToken)
    } else {

      getToken(setTokenFound);
      setNewUser(true);
    }
  }, [])


  useEffect(() => {
    if(newUser && token) TokenDataService.create({ [getUserName()]: token })
  }, [newUser, token])

  return (
    <div>
      <header >
        <h1> {token ? `Hello ${getUserName()}, Your token:` : 'Need notification permission ❗️'}</h1>
        {token && <pre style={{background: '#fffade', padding: '20px'}}>{token}</pre>}
      </header>
      
</div>
  );
}

export default App;
