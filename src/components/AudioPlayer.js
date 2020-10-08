import React, { useState } from 'react';
import Visualizer from './Visualizer';
import song from '../music/song.mp3';
import '../sass/AudioPlayer.scss'

function AudioPlayer() {
  const [paused, setPaused] = useState(true)
  return (
    <div className="audio-player" onClick={() => setPaused(!paused)}>
      <Visualizer song={song}/>
    </div>
  );
}

export default AudioPlayer;
