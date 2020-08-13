import React from 'react';
import './App.css';
import InfoPanel from './component/InfoPanel';
import Navbar from './component/nav';
import FootNav from './component/FootNav';

function App() {
  const screenConfig = React.useState(0);

  return (
    <div className="App">
      <Navbar />
      <InfoPanel currentScreen={screenConfig[0]} />
      <FootNav screenConfig={screenConfig} />
    </div>
  );
}

export default App;
