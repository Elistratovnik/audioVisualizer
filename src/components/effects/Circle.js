import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import '../../sass/Circle.scss'

function Circle() {
  const circleFrameRef = useRef()
  const circleRef = useRef()
  const shadowRef = useRef()

  const {paused, analyzer} = useSelector(state => ({
    paused: state.paused,
    analyzer: state.analyzer
  }))

  // const [{ size, color }, set] = useSpring(() => ({
  //   size: 0,
  //   color: 0,
  //   config: { duration: 0 }
  // }))

  const circleLoop = useCallback(() => {
      const array = new Uint8Array(analyzer.frequencyBinCount)
      analyzer.getByteFrequencyData(array)
      if (array[0] > 190) {
        shadowRef.current.style.filter = `hue-rotate(${Math.round(Math.random() * 360)}deg)`
      }
      circleRef.current.style.width = (array[0] / 5) + '%'
      circleRef.current.style.paddingBottom = (array[0] / 5) + '%'
      shadowRef.current.style.boxShadow = `0 0 ${array[0] / 3}px #0f0, inset 0 0 ${array[0] / 3}px #0f0`
    circleFrameRef.current = requestAnimationFrame(circleLoop);
  },[analyzer])

  // const circleLoop = useCallback(() => {
  //   console.log('circleLoop')
  //     const array = new Uint8Array(analyzer.frequencyBinCount)
  //     analyzer.getByteFrequencyData(array)
  //     if (array[0] > 190) {
  //       set({ color: Math.round(Math.random() * 360) })
  //     }
  //     set({
  //       size: array[0], // 240 высокие частоты
  //       config: { duration: 0 }
  //     })
  //   circleFrameRef.current = requestAnimationFrame(circleLoop);
  // },[analyzer, set])

  // const sizeInterShanow = (sz) => `0 0 ${sz / 3}px #0f0, inset 0 0 ${sz / 3}px #0f0`
  // const sizeInter = (sz) => `${(sz / 2.5) / 2}%`
  // const colorInter = (c) => `hue-rotate(${c}deg)`

  useEffect(() => {
    if (!paused) {
      circleFrameRef.current = requestAnimationFrame(circleLoop);
    } else {
      cancelAnimationFrame(circleFrameRef.current);
    }
    return () => cancelAnimationFrame(circleFrameRef.current);
  }, [paused, circleLoop]);

  return (
    <div ref={circleRef} className="circle" >
      <div ref={shadowRef} className="circle__before"/>
      <div className="circle__after" />
    </div>
  );


  // return (
  //   <animated.div className="circle" style={{ width: size.interpolate(sizeInter), paddingBottom: size.interpolate(sizeInter) }}>
  //     <animated.div className="circle__before" style={{ filter: color.interpolate(colorInter), boxShadow: size.interpolate(sizeInterShanow) }}/>
  //     <div className="circle__after" />
  //   </animated.div>
  // );
}

export default Circle;
