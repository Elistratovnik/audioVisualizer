import React from 'react';
import { animated } from 'react-spring';
import '../sass/Controls.scss';

function Controls({time, changeAudioTime}) {
  const timeInter = time.interpolate((d) => `linear-gradient(to right, gray ${d}%, lightgray 0%)`)
  return (
    <animated.div onClick={changeAudioTime} className="controls" style={{backgroundImage: timeInter}}>

    </animated.div>
  );
}

export default Controls;
