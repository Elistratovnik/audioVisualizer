import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring, config } from 'react-spring';
import { changeCurrentSongIndex, changePath, disableSongSelect, enableSongSelect, setContext, setCurrentTrackTime, setPaused } from '../redux/actions';
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
  const {currentSongIndex, path, songs, context, analyzer, src, paused, volume} = useSelector(state => ({
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
  }, [path, connect])

  useEffect(() => {
    audioRef.current.volume = volume/100
  }, [volume])

  const [{ size }, setSize] = useSpring(() => ({
    size: 0,
    config: { duration: 0 }
  }))

  const [{ color }, setColor] = useSpring(() => ({
    color: 0
  }))


  const [{ time }, setTime] = useSpring(() => ({
    time: 0,
    config: { duration: 0 }
  }))

  const connection = () => {
    if (context && !connect) {
      context.resume()
      src.connect(analyzer);
      analyzer.connect(context.destination);
      setConnect(true)
    }
  }

  const loop = () => {
    if (!audioRef.current.paused) {
      window.requestAnimationFrame(loop);
      const array = new Uint8Array(analyzer.frequencyBinCount)
      analyzer.getByteFrequencyData(array)
      if (array[0] > 190) {
        setColor({ color: Math.round(Math.random() * 360) })
      }
      setSize({ size: array[0] * 3, config: { duration: 0 } })
      setTime({time: audioRef.current.currentTime ? audioRef.current.currentTime /(audioRef.current.duration / 100) : 0})
    }
  }

  const start = () => {
    dispatch(disableSongSelect())
    audioRef.current.play()
    dispatch(setPaused(false))
    loop()
  }

  const stop = () => {
    setSize({ size: 0, config: config.molasses })
    audioRef.current.pause()
    dispatch(setPaused(true))
  }

  const clickHandler = () => {
    connection()
    if (audioRef.current.paused) {
      start()
    } else {
      stop()
    }
  }

  const changeAudioTime = (event) => {
    const {width} = event.currentTarget.getBoundingClientRect()
    event.stopPropagation()
    audioRef.current.currentTime = (audioRef.current.duration / width) * event.clientX
    setTime({time: 100 / (width/event.clientX)})
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
    setTime({time: 0})
  }

  return (
    <div className="visualizer" onClick={clickHandler}>
      <audio src={path} ref={audioRef} onEnded={endedHandler} onPlay={() => {dispatch(enableSongSelect())}}/>
      <div className="visualizer__effect">
        <Switch>
          <Route exact path='/' render={() => <Circle size={size} color={color} />}></Route>
          <Route path='/text' render={() => <Text size={size} color={color} />}></Route>
        </Switch>
         {paused ? <PauseIcon connect={connect}/> : <PlayIcon/>}
      </div>
      <Controls
        clickHandler={clickHandler}
        paused={paused}
        time={time}
        changeAudioTime={changeAudioTime}
        connection={connection}
        rewindToTheend={rewindToTheend}
        rewindToTheStart={rewindToTheStart}
        stop={stop}/>
      <Playlist connection={connection}/>
    </div>
  );
}

export default Visualizer;
