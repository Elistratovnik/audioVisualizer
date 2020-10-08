import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../sass/Icon.scss';

function PlayIcon() {
  const hidePlayIcon = useSpring({
    to: {opacity: 0},
    from: {opacity: 1}
  })

  return (
    <animated.div style={hidePlayIcon} className="icon icon_play"/>
  );
}

export default PlayIcon;
