import React from 'react';
import { animated } from 'react-spring';
import '../sass/Circle.scss'

function Circle({size, color}) {

  const sizeInterShanow = (sz) => `0 0 ${sz / 10}px #0f0, inset 0 0 ${sz / 10}px #0f0`
  const sizeInter = (sz) => `${sz}px`
  const colorInter = (c) => `hue-rotate(${c}deg)`

  return (
    <animated.div className="circle" style={{ width: size.interpolate(sizeInter), height: size.interpolate(sizeInter) }}>
      <animated.div className="circle__before" style={{ filter: color.interpolate(colorInter), boxShadow: size.interpolate(sizeInterShanow) }}/>
      <div className="circle__after" />
    </animated.div>
  );
}

export default Circle;
