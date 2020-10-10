import React from 'react';
import Visualizer from './Visualizer';
import '../sass/AudioPlayer.scss'
import Menu from './Menu/Menu';

function AudioPlayer() {
  return (
    <div className="audio-player">
      <Menu />
      <Visualizer />
    </div>
  );
}

export default AudioPlayer;
