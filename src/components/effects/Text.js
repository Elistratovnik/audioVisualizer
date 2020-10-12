import React from 'react';
import { animated } from 'react-spring';
import '../../sass/Text.scss'

function Text({size, color, size_middle_freq}) {

  const sizeInterShanow = (sz) => `0 0 ${sz / 10}px #0f0, inset 0 0 ${sz / 10}px #0f0`
  const sizeInter = (sz) => `scale(${1 + (sz/25)/150})`
  const sizeInterContainer = (sz) => `scale(${1 + (sz/25)/50})`
  const colorInter = (c) => `hue-rotate(${c}deg)`
  const middleSizeInter = (sz) => `${sz*3}px`

  return (
    <div className="text">
      <animated.div style={{transform: size.interpolate(sizeInter)}} className="text__background" />
      <animated.div style={{transform: size.interpolate(sizeInterContainer)}} className="text__container">
        <animated.div style={{width: size_middle_freq.interpolate(middleSizeInter)}} className="text__line text__line_top" />
        <h3 className="text__title">
          <animated.div className="text__letter" style={{ filter: color.interpolate(colorInter), boxShadow: size.interpolate(sizeInterShanow) }}>T</animated.div>
          <animated.div className="text__letter" style={{ filter: color.interpolate(colorInter), boxShadow: size.interpolate(sizeInterShanow) }}>E</animated.div>
          <animated.div className="text__letter" style={{ filter: color.interpolate(colorInter), boxShadow: size.interpolate(sizeInterShanow) }}>X</animated.div>
          <animated.div className="text__letter" style={{ filter: color.interpolate(colorInter), boxShadow: size.interpolate(sizeInterShanow) }}>T</animated.div>
        </h3>
        <animated.div style={{width: size_middle_freq.interpolate(middleSizeInter)}} className="text__line text__line_bottom"/>
      </animated.div>
    </div>
  );
}

export default Text;
