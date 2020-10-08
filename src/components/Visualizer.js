import React, { useRef } from 'react';
import { useSpring, config } from 'react-spring';
import '../sass/Visualizer.scss'
import Circle from './Circle';
import Controls from './Controls';

function Visualizer({ song }) {
  const audioRef = useRef()
  let context = null
  let analyzer = null
  let src = null

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

  const clickHandler = () => {
    if (!context) {
      preparation()
    }
    if (audioRef.current.paused) {
      audioRef.current.play()
      loop()
    } else {
      setSize({ size: 0, config: config.molasses })
      audioRef.current.pause()
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

  const preparation = () => {
    context = new AudioContext();
    analyzer = context.createAnalyser();
    src = context.createMediaElementSource(audioRef.current);
    src.connect(analyzer);
    analyzer.connect(context.destination);
    loop()
  }

  return (
    <div className="visualizer" onClick={clickHandler}>
      <audio src={song} ref={audioRef}></audio>
      <Circle size={size} color={color} />
      <Controls time={time} changeAudioTime={changeAudioTime}/>
    </div>
  );
}

export default Visualizer;
