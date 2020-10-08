import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring, config } from 'react-spring';
import '../sass/Visualizer.scss'
import Circle from './Circle';
import Controls from './Controls';
import PauseIcon from './PauseIcon';
import PlayIcon from './PlayIcon';
import Playlist from './PlayList';

function Visualizer({ context, analyzer, src, audioRef, handleAddSong }) {
  const [connect, setConnect] = useState(false)
  const [paused, setPaused] = useState(true)
  const dispath = useDispatch()
  const {currentSong} = useSelector(state => ({
    currentSong: state.currentIndex
  })
  )

  // const endedHandler = () => {
  //   console.log(currentSong)
  //   // dispath(changePath(songs[currentSong + 1].path))
  //   // dispath(changeCurrentSongIndex(currentSong + 1))
  //   // setTimeout(start, 500)
  // }

  // useEffect(() => {
  //   audioRef.current.addEventListener('ended', endedHandler)
  // }, [])

  useEffect(() => {
    if (connect) {
      setTimeout(start, 500)
    }
  }, [currentSong])

  const [{ size }, setSize] = useSpring(() => ({
    size: 0,
    config: { duration: 0 }
  }))

  const [{ color }, setColor] = useSpring(() => ({
    color: 0
  }))


  const [{ time }, setTime] = useSpring(() => ({
    time: 0
  }))

  const start = () => {
    audioRef.current.play()
    setPaused(false)
    loop()
  }

  const clickHandler = () => {
    if (context && !connect) {
      context.resume()
      src.connect(analyzer);
      analyzer.connect(context.destination);
      setConnect(true)
    }
    if (audioRef.current.paused) {
      start()
    } else {
      setSize({ size: 0, config: config.molasses })
      audioRef.current.pause()
      setPaused(true)
    }
  }

  const changeAudioTime = (event) => {
    event.stopPropagation()
    audioRef.current.currentTime = (audioRef.current.duration / window.innerWidth) * event.clientX
    setTime({time: 100 / (window.innerWidth/event.clientX)})
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
      setTime({time: audioRef.current.currentTime /(audioRef.current.duration / 100)})
    }
  }

  return (
    <div className="visualizer" onClick={clickHandler}>
      <Circle size={size} color={color} />
      <Controls time={time} changeAudioTime={changeAudioTime}/>
      {paused ? <PauseIcon connect={connect}/> : <PlayIcon/>}
      <Playlist handleAddSong={handleAddSong} clickHandler={clickHandler}/>
    </div>
  );
}

export default Visualizer;
