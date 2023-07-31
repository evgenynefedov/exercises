import './App.css';
import React, { useState } from 'react'
import Spotcheck from './components/Spotcheck';
import Exercise1 from './components/Exercise1';
import ConversationApp from './components/ConversationApp';

function App() {

  return (
    <div>
      <div className="exercise">
        <h1>Spotcheck</h1>
        <Spotcheck />
      </div>
      <div className="exercise">
        <h1>Exercise 1</h1>
        <Exercise1 />
      </div>
      <div className="exercise">
        <h1>Exercise 2-7</h1>
        <ConversationApp />
      </div>
    </div>
  );
}

export default App;
