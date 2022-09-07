import React from 'react';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import UserInfoDisplay from './components/UserInfoDisplay/UserInfoDisplay';

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserInfoDisplay />
    </div>
  );
}

export default App;
