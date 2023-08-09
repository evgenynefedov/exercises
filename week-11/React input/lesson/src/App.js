import React, { useState } from 'react'
import './App.css';
import Spotcheck from './components/spotcheck';
import Exercise1 from './components/exercise1';
import Exercise2 from './components/exercise2';

function App() {
  return (
    <div>
      <Spotcheck />
      <Exercise1 />
      <Exercise2 />
    </div>
  );
}

export default App;
