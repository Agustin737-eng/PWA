import React from 'react';
import './App.css';

//funcionan
import Camera from './components/Camera/Camera';
import Scanner from './components/Scanner/Scanner';
import ReaderQR from './components/Scanner/ReaderQR'; 
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [typeScanner, setTypeScanner] = useState("");

  const changeScanner = () => {
    if (typeScanner == 'barcode') {
      setTypeScanner('')
    } else {
      setTypeScanner('barcode')
    }
  }

  useEffect(() => {
    console.log(typeScanner);
  }, [typeScanner])

  return (
    <>
      <Scanner
        type={typeScanner}
        width={'600px'}
        height={'600px'}
      /> 
      <button onClick={changeScanner}>Cambiar Scanner</button>  
    </>
  );
}

export default App;
