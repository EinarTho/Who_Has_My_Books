import React, { useState } from 'react';
const axios = require('axios');

export default function Loginpage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = () => {
    //axios.post ..
    //if success, setlogin to true.
  };

  return (
    <div>
      <form onSubmit={submitLogin}>
        <input type='text' placeholder='username' />
        <input type='text' placeholder='password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
