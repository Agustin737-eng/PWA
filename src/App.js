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
    setTypeScanner('barcode')
  }, [])

  return (
    <>
      <sdds-theme name="scania"></sdds-theme>
      <nav class='sdds-nav'>
        <div class='sdds-nav__left'>
          <div class='sdds-nav__app-name'></div>
          <h2 className='sdds-nav__app-name'>Camera Mobile PWA</h2>  
        </div>
      </nav>
      <Scanner 
        type={typeScanner}
        height={'700px'}
      />
      <button onClick={changeScanner}>Cambiar Scanner</button>
      {typeScanner == 'barcode' ?
        <h1>Barcode</h1>
        :<h1>QR code</h1>
      }

    </>
  );
}

export default App;
