import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentSongIndex, changePath, disableSongSelect, enableSongSelect, setContext, setCurrentTrackDuration, setCurrentTrackTime, setPaused } from '../redux/actions';
import '../sass/Visualizer.scss'
import Circle from './effects/Circle';
import Controls from './Controls/Controls';
import PauseIcon from './PauseIcon';
import PlayIcon from './PlayIcon';
import Playlist from './PlayList';
import { Route, Switch } from 'react-router-dom';
import Text from './effects/Text';

function Visualizer() {
  const [connect, setConnect] = useState(false)
  const dispatch = useDispatch()
  const { currentSongIndex, path, songs, context, analyzer, src, paused, volume } = useSelector(state => ({
    currentSongIndex: state.currentIndex,
    path: state.path,
    songs: state.songs,
    context: state.context,
    analyzer: state.analyzer,
    src: state.src,
    paused: state.paused,
    volume: state.volume
  })
  )

  const audioRef = useRef()

  useEffect(() => {
    dispatch(setContext(new AudioContext(), audioRef.current))
  }, [dispatch])

  useEffect(() => {
    if (connect) {
      // setTimeout(start, 500)
      start()
    }
  }, [path])

  useEffect(() => {
    if (connect) {
      document.addEventListener('keyup', clickHandler)
      return () => {
        document.removeEventListener('keypup', clickHandler);
      }
    }
  }, [connect])

  useEffect(() => {
    audioRef.current.volume = volume / 100
  }, [volume])


  const connection = () => {
    if (context && !connect) {
      context.resume()
      src.connect(analyzer);
      analyzer.connect(context.destination);
      setConnect(true)
    }
  }

  const start = () => {
    setTimeout(() => {
      dispatch(setCurrentTrackDuration(audioRef.current.duration))
    }, 1000)
    dispatch(disableSongSelect())
    audioRef.current.play()
    dispatch(setPaused(false))
  }

  const stop = () => {
    audioRef.current.pause()
    dispatch(setPaused(true))
  }

  const clickHandler = (e) => {
    if (e.keyCode === 32 || e.keyCode === undefined) {
      connection()
      if (audioRef.current.paused) {
        start()
      } else {
        stop()
      }
    }
  }

  const changeAudioTime = (event) => {
    const { width } = event.currentTarget.getBoundingClientRect()
    event.stopPropagation()
    audioRef.current.currentTime = (audioRef.current.duration / width) * event.clientX
  }

  const endedHandler = () => {
    if (songs.length > currentSongIndex + 1) {
      dispatch(changePath(songs[currentSongIndex + 1].path))
      dispatch(changeCurrentSongIndex(currentSongIndex + 1))
      dispatch(setCurrentTrackTime(audioRef.current.duration))
    } else {
      alert('закончились песенки =(')
      dispatch(setPaused(true))
      dispatch(enableSongSelect())
    }
  }

  const rewindToTheend = () => {
    audioRef.current.currentTime = audioRef.current.duration
    start()
  }
  const rewindToTheStart = () => {
    audioRef.current.currentTime = 0
  }

  const timeUpdateHandler = (e) => {
    dispatch(setCurrentTrackTime(e.currentTarget.currentTime))
  }

  return (
    <div className="visualizer" onClick={clickHandler} >
      <audio src={path} ref={audioRef} onEnded={endedHandler} onPlay={() => { dispatch(enableSongSelect()) }} onTimeUpdate={timeUpdateHandler}/>
      <div className="visualizer__effect">
        <Switch>
          <Route exact path='/audioVisualizer' render={() => <Circle />}></Route>
          <Route path='/text' render={() => <Text />}></Route>
        </Switch>
        {paused ? <PauseIcon connect={connect} /> : <PlayIcon />}
      </div>
      <Controls
        clickHandler={clickHandler}
        changeAudioTime={changeAudioTime}
        connection={connection}
        rewindToTheend={rewindToTheend}
        rewindToTheStart={rewindToTheStart}
        stop={stop} />
      <Playlist connection={connection} />
    </div>
  );
}

export default Visualizer;
