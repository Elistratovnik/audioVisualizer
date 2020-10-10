import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

function Nav({ props, item, path }) {
  const [hover, setHover] = useState(false)

  const { gradient } = useSpring(
    {gradient: hover ? 0 : 100}
  )

  const gradientInter = gradient.interpolate((g) => `linear-gradient(to left, white 0%, white ${g}%, gold 0%, gold 100%)`)

  return (
    <NavLink className="menu__nav" activeClassName="menu__nav_active" to={path} exact={true}>
      <animated.div key={item.id} className="menu__item" style={{ ...props }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <animated.span style={{backgroundImage: gradientInter}} className="menu__link">{item.title}</animated.span>
      </animated.div>
    </NavLink>
  );
}

export default Nav;
