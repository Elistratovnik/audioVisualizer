import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import '../../sass/SpotLight.scss'

function Spotlight() {
  const lines = new Array(80).fill('')
  const circleRef = useRef()
  const spotFrameRef = useRef()
  const backgroundRef = useRef()
  const flagRef = useRef(true)
  const {paused, analyzer} = useSelector(state => ({
    paused: state.paused,
    analyzer: state.analyzer
  }))

  const spotLightLoop = useCallback(() => {
      const array = new Uint8Array(analyzer.frequencyBinCount)
      analyzer.getByteFrequencyData(array)
      if (array[0] > 210) {
        backgroundRef.current.style.filter = `brightness(120%)`
      }
      if (array[0] > 190) {
        if (flagRef.current) {
          flagRef.current = false
          const randomColor = Math.round(Math.random() * 360)
          circleRef.current.style.filter = `hue-rotate(${randomColor}deg)`
          backgroundRef.current.style.filter = `hue-rotate(${randomColor}deg)`
          setTimeout(() => {
            flagRef.current = true
          }, 1000)
        }
      }
      backgroundRef.current.style.backgroundImage = `linear-gradient(45deg, transparent ${60 - array[0]/10}%, rgba(34, 101, 163, .5)), linear-gradient(-45deg, transparent ${60 - array[0]/10}%, rgba(34, 101, 163, .5))`
      Array.from(circleRef.current.children).forEach((line, index) => {
        line.style.transform = `rotate(${-45 + index * 5}deg) translateY(${array[index * 10]/2.5}%)`
      })
      spotFrameRef.current = requestAnimationFrame(spotLightLoop);
  },[analyzer])

  useEffect(() => {
    if (!paused) {
      spotFrameRef.current = requestAnimationFrame(spotLightLoop);
    } else {
      cancelAnimationFrame(spotFrameRef.current);
    }
    return () => cancelAnimationFrame(spotFrameRef.current);
  }, [paused, spotLightLoop]);

  return (
    <div className="spotlight">
      <div ref={backgroundRef} className="spotlight__background"></div>
      <div className="spotlight__container">
      <div ref={circleRef} className="spotlight__circle">
        {
          lines.map((a, i) => {
              return <div key={i} className="spotlight__line"/>
          })
        }
      </div>
      <div className="spotlight__photo"></div>
      </div>
    </div>
  );
}

export default Spotlight;
