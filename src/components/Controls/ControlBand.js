import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

function ControlBand({ changeAudioTime }) {
  const currentTimeRef = useRef()
  const timerRef = useRef()
  const { currentTime, duration } = useSelector(state => ({
    currentTime: state.currentTime,
    duration: state.currentTrackDuration
  }))

  useEffect(() => {
    currentTimeRef.current.style.width = currentTime / (duration / 100) + '%'
  }, [currentTime, duration])

  return (
    <div onClick={changeAudioTime} className="controls__band">
      <div ref={currentTimeRef} className="controls__current-time">
        <div ref={timerRef} className="controls__timer">{Math.floor((duration - currentTime) / 60) + ':' + Math.round((duration - currentTime) % 60)}</div>
      </div>
    </div>
  );
}

export default ControlBand;
