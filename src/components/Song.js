import React from 'react';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { changeCurrentSongIndex, changePath } from '../redux/actions';
import '../sass/Song.scss';

function Song({ duration, name, artist, path, index}) {
  const dispath = useDispatch()

  return (
    <animated.div className="song playlist__song" onClick={() => {
      dispath(changeCurrentSongIndex(index))
      dispath(changePath(path))
      }}>
      <div className="song__info">
        <h3 className="song__name">{name}</h3>
        <p className="song__artist">{artist}</p>
      </div>
      <span className="song__duration">{duration}</span>
    </animated.div>
  );
}

export default Song;
