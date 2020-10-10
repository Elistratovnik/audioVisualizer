import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AudioPlayer />
      </div>
    </BrowserRouter>
  );
}

export default App;
