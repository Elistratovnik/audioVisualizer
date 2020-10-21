import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

function ControlBand({ audioRef }) {
  const [currentTime, setCurrentTime] = useState(0)
  let updateCurrentTimeRef = useRef()
  const { duration, paused, loaded } = useSelector(state => ({
    duration: state.currentTrackDuration,
    paused: state.paused,
    loaded: state.loaded
  }))

  useEffect(() => {
    if (loaded) {
      if (!paused) {
        updateCurrentTimeRef.current = setInterval(() => {
          setCurrentTime(audioRef.current.currentTime)
        }, 200)
      } else {
        clearInterval(updateCurrentTimeRef.current)
      }
      return () => {
        clearInterval(updateCurrentTimeRef.current)
      }
    }
  }, [paused, audioRef, loaded])

  const changeAudioTime = (event) => {
    const { width } = event.currentTarget.getBoundingClientRect()
    event.stopPropagation()
    audioRef.current.currentTime = (audioRef.current.duration / width) * event.clientX
    setCurrentTime((audioRef.current.duration / width) * event.clientX)
  }

  return (
    <div onClick={changeAudioTime} className="controls__band">
      <div style={{width: audioRef.current ? audioRef.current.currentTime / (duration / 100) + '%' : 0}} className="controls__current-time" />
      <div className="controls__timer">
        <Moment format="mm:ss / " >{currentTime * 1000}</Moment>
        <Moment format="mm:ss" >{duration ? Math.floor(duration * 1000) : 0}</Moment>
      </div>
    </div>
  );
}

export default ControlBand;
