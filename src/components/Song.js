import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated } from 'react-spring';
import { changeCurrentSongIndex, changePath } from '../redux/actions';
import '../sass/Song.scss';

function Song({ duration, name, path, index, connection, props }) {
  const dispath = useDispatch()
  const {currentIndex, songSelectDisabled} = useSelector(state => ({currentIndex: state.currentIndex, songSelectDisabled: state.songSelectDisabled}))

  const className = currentIndex === index ?
    'song playlist__song song_active' :
    'song playlist__song'

  return (
    <animated.div style={props} className={className} onClick={() => {
      if (!songSelectDisabled) {
        connection()
        dispath(changeCurrentSongIndex(index))
        dispath(changePath(path))
      }
    }}>
      <h3 className="song__name">{name}</h3>
      <span className="song__duration">{duration}</span>
    </animated.div>
  );
}

export default Song;
