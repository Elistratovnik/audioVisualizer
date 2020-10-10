import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import { changeCurrentSongIndex, changePath, disableSongSelect } from '../../redux/actions';
import '../../sass/Controls.scss';
import ControlButtons from './ControlButtons';
import ControlTitle from './ControlTitle';

function Controls({ time, changeAudioTime, clickHandler, connection, rewindToTheend, rewindToTheStart, stop }) {
  const [clicked, setClicked] = useState(false)
  const [open, setOpen] = useState(false)
  const timeInter = time.interpolate((d) => `linear-gradient(to right, #C90000 ${d}%, gray 0%)`)
  const dispatch = useDispatch()
  const { currentIndex, songSelectDisabled, songs } = useSelector(state => ({
    currentIndex: state.currentIndex,
    songSelectDisabled: state.songSelectDisabled,
    songs: state.songs
  }))

  const rotateInter = (r) => `${r} rotate(90deg)`
  const { rotate, height } = useSpring({
    rotate: open ? 'rotate(-45deg)' : 'rotate(45deg)',
    height: open ? '100px' : '0px',
  })

  const nextSongHandler = () => {
    if (songs.length > currentIndex + 1) {
      if (!songSelectDisabled) {
        connection()
        dispatch(changeCurrentSongIndex(currentIndex + 1))
        dispatch(changePath(songs[currentIndex + 1].path))
      }
    }
    else {
      rewindToTheend()
      dispatch(disableSongSelect())
    }
  }

  const backwardSongHandler = () => {
    if (currentIndex > 0) {
      if (!songSelectDisabled) {
        connection()
        dispatch(changeCurrentSongIndex(currentIndex - 1))
        dispatch(changePath(songs[currentIndex - 1].path))
      }
    }
    else {
      rewindToTheStart()
    }
  }

  const stopSongHandler = () => {
    rewindToTheStart()
    stop()
  }

  return (
    <animated.div style={{height: height}} className="controls" onClick={e => e.stopPropagation()}>
      <button className="controls__hide-button" onClick={() => { setOpen(!open) }}>
        <ControlTitle open={open}/>
        <animated.span style={{ transform: rotate }} className="controls__icon-line controls__icon-line_top" />
        <animated.span style={{ transform: rotate.interpolate(rotateInter) }} className="controls__icon-line controls__icon-line_bottom" />
      </button>
      <animated.div onClick={changeAudioTime}
        onMouseDown={() => { setClicked(true) }}
        onMouseUp={() => { setClicked(false) }}
        className="controls__band"
        style={{ backgroundImage: timeInter }}
        onMouseMove={(e) => { if (clicked) changeAudioTime(e) }} />
        <ControlButtons stopSongHandler={stopSongHandler}
        backwardSongHandler={backwardSongHandler}
        clickHandler={clickHandler}
        nextSongHandler={nextSongHandler}/>
    </animated.div>
  );
}

export default Controls;
