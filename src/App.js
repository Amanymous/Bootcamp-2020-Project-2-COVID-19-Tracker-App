import React from 'react';
import './App.css';
import InfoPanel from './component/InfoPanel';
import Navbar from './component/nav';

function App() {
  return (
    <div className="App">
      <Navbar />
      <InfoPanel />
    </div>
  );
}

export default App;
