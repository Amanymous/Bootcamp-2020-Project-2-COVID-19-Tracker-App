import React from 'react';
import './App.css';
import InfoPanel from './component/InfoPanel';
import NavBar from './component/nav';
import FootNav from './component/FootNav';

function App() {
  const screenConfig = React.useState(0);

  return (
    <div className="App">
      <NavBar />
      <InfoPanel currentScreen={screenConfig[0]} />
      <FootNav screenConfig={screenConfig} />
    </div>
  );
}

export default App;
