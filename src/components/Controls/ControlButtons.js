import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeVolume } from '../../redux/actions';

function ControlButtons({stopSongHandler, backwardSongHandler, clickHandler, nextSongHandler}) {
  const dispatch = useDispatch()
  const {paused, volume} = useSelector(state => ({
    paused: state.paused,
    volume: state.volume
  }))
  return (
    <div className="controls__buttons">
      <i className="fa fa-stop controls__stop" aria-hidden="true" onClick={stopSongHandler}></i>
      <i className="fa fa-step-backward controls__step-backward" aria-hidden="true" onClick={backwardSongHandler}></i>
      <div className="controls__play-stop" onClick={clickHandler}>
        {!paused ?
          <i className="fa fa-pause controls__pause" aria-hidden="true"></i> :
          <i className="fa fa-play controls__play" aria-hidden="true"></i>}
      </div>
      <i className="fa fa-step-forward controls__step-forward" aria-hidden="true" onClick={nextSongHandler}></i>
      <input className="controls__volume" type="range" min="0" max="100" value={volume} onChange={(e) => { dispatch(changeVolume(e.currentTarget.value)) }} />
    </div>
  );
}

export default ControlButtons;
