import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../sass/Icon.scss';

function PauseIcon({ connect }) {
  const [hidePlayIcon, set] = useSpring(() => ({
    to: { opacity: 0 },
    from: { opacity: 1 },
    immediate: connect ? false : true
  }))


  return (
    <animated.div style={hidePlayIcon} className="icon icon_pause" />
  );
}

export default PauseIcon;
