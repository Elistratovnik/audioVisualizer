import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import '../../sass/Text.scss'

function Text() {
  const textFrameRef = useRef()
  const textBackgroundRef = useRef()
  const textContainerRef = useRef()
  const textLineTopRef = useRef()
  const textLineBottomRef = useRef()
  const textLetterRef = useRef()

  const {paused, analyzer} = useSelector(state => ({
    paused: state.paused,
    analyzer: state.analyzer
  }))

  const textLoop = useCallback(() => {
    console.log('textLoop')
      const array = new Uint8Array(analyzer.frequencyBinCount)
      analyzer.getByteFrequencyData(array)
      if (array[0] > 190) {
        textLetterRef.current.style.filter = `hue-rotate(${Math.round(Math.random() * 360)}deg)`
      }
      textBackgroundRef.current.style.transform = `scale(${1 + (array[0]/25)/150})`
      textContainerRef.current.style.transform = `scale(${1 + (array[0]/25)/50})`
      textLineTopRef.current.style.width = `${array[40]*3}px`
      textLineBottomRef.current.style.width = `${array[40]*3}px`
      textLetterRef.current.style.boxShadow = `0 0 ${array[0] / 10}px #0f0, inset 0 0 ${array[0] / 10}px #0f0`
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
        <h3 className="text__title">
          <div className="text__letter">T</div>
          <div className="text__letter">E</div>
          <div ref={textLetterRef}  className="text__letter">X</div>
          <div className="text__letter">T</div>
        </h3>
        <div ref={textLineBottomRef} className="text__line text__line_bottom"/>
      </div>
    </div>
  );
}

export default Text;
