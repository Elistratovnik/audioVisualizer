import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../sass/Icon.scss';

function PauseIcon() {
  const hidePlayIcon = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 }
  })

  return (
    <animated.div style={hidePlayIcon} className="icon icon_pause" />
  );
}

export default PauseIcon;
