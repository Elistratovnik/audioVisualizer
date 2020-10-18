import React from 'react';
import Visualizer from './Visualizer';
import '../sass/AudioPlayer.scss'
import Menu from './Menu/Menu';
import Spinner from './Spinner';
import { useSelector } from 'react-redux';

function AudioPlayer() {
  const loaded = useSelector(state => state.loaded)
  return (
    <div className="audio-player">
      {!loaded && <Spinner />}
      <Menu />
      <Visualizer />
    </div>
  );
}

export default AudioPlayer;
