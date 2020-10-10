import React from 'react';
import { useTrail, animated, config } from 'react-spring';


function ControlTitle({ open }) {
  const letters = ['c', 'o', 'n', 't', 'r', 'o', 'l', 's']
  const lettersTrail = useTrail(letters.length, {
    opacity: open ? 0 : 1,
    transform: open ? 'translateX(100%)' : 'translateX(0%)',
    config: config.wobbly})

  return (
    <div className="controls__title">
      {
        lettersTrail.map((props, i) => <animated.div className="controls__letter" style={props} key={i}>{letters[i]}</animated.div>)
      }
    </div>
  );
}

export default ControlTitle;
