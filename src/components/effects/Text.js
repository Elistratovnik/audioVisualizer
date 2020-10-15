import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import '../../sass/Text.scss'

function Text() {
  const textFrameRef = useRef()
  const textBackgroundRef = useRef()
  const textContainerRef = useRef()
  const textLineTopRef = useRef()
  const textLineBottomRef = useRef()
  const textLineLeftRef = useRef()
  const textLineRightRef = useRef()
  const textTitleRef = useRef()

  const {paused, analyzer} = useSelector(state => ({
    paused: state.paused,
    analyzer: state.analyzer
  }))

  const textLoop = useCallback(() => {
      const array = new Uint8Array(analyzer.frequencyBinCount)
      analyzer.getByteFrequencyData(array)
      if (array[0] > 190) {
        textTitleRef.current.style.filter = `hue-rotate(${Math.round(Math.random() * 360)}deg)`
      }
      textBackgroundRef.current.style.transform = `scale(${1 + (array[0]/25)/300})`
      textContainerRef.current.style.transform = `scale(${1 + (array[0]/25)/100})`
      textLineTopRef.current.style.width = `${array[40] / 2.5}%`
      textLineBottomRef.current.style.width = `${array[40]/ 2.5}%`
      textLineLeftRef.current.style.height = `calc(100% - ${array[40] / 2.5}%)`
      textLineRightRef.current.style.height = `calc(100% - ${array[40] / 2.5}%)`
      textTitleRef.current.style.boxShadow = `0 0 ${array[0] / 10}px #0f0, inset 0 0 ${array[0] / 10}px #0f0`
    textFrameRef.current = requestAnimationFrame(textLoop);
  },[analyzer])

  useEffect(() => {
    if (!paused) {
      textFrameRef.current = requestAnimationFrame(textLoop);
    } else {
      cancelAnimationFrame(textFrameRef.current);
    }
    return () => cancelAnimationFrame(textFrameRef.current);
  }, [paused, textLoop]);

  return (
    <div className="text">
      <div ref={textBackgroundRef} className="text__background" />
      <div ref={textContainerRef} className="text__container">
        <div ref={textLineTopRef}  className="text__line text__line_top" />
        <div ref={textLineLeftRef} className="text__line text__line_left" />
        <h3 ref={textTitleRef} className="text__title">
          TEXT
        </h3>
        <div ref={textLineBottomRef} className="text__line text__line_bottom"/>
        <div ref={textLineRightRef} className="text__line text__line_right" />
      </div>
    </div>
  );
}

export default Text;
