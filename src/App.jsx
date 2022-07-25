import MainContent from './components/mainContent';
import { useState } from 'react';

function App() {

  const [init, setInit] = useState(false)

  const SetInit = () => {
    setInit(true)
  }

  const SetInitFalse = () => {
    setInit(false)
  }

  return (
    <>
      <MainContent init={init} SetInit={SetInit} SetInitFalse={SetInitFalse}/>
    </>
  );
}

export default App;
