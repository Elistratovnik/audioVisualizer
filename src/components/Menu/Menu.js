import React, { useRef, useState } from 'react';
import { useChain, useSpring, useTransition, animated, useTrail } from 'react-spring';
import '../../sass/Menu.scss'
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';

function Menu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { title: 'circle', path: '/' , id: '0'},
    { title: 'text', path: '/text' , id: '1'},
    { title: 'visual3', path: '/visual3', id: '2' },
    { title: 'visual4', path: '/visual4', id: '3' }
  ]

  const openMenuRef = useRef();
  const {transform, width, ...rest} = useSpring({
    ref: openMenuRef,
    width: open ? '40%' : '0%',
    transform: open ? 'transtaleX(350px)' : 'translateX(-100px)',
    from: {width: '0%'}
  })


  const showMenuItemsRef = useRef();
  const showMenuItems = useTransition(open ? menuItems : [], item => item.title, {
    ref: showMenuItemsRef,
    unique: true,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: [{ opacity: 0, transform: 'scale(1)' }, { opacity: 1, transform: 'scale(1)' }],
    leave: { opacity: 0, transform: 'scale(0)' },
    config: {duration: 300}
  })

  const hideMenuIconsRef = useRef();
  const hideMenuIcons = useTrail(3, {
    ref: hideMenuIconsRef,
    transform: open ? 'scale(0)' : 'scale(1)',
    config: {
      duration: 200
    }
  })


  useChain(open ? [hideMenuIconsRef, openMenuRef, showMenuItemsRef] : [showMenuItemsRef, openMenuRef, hideMenuIconsRef], [0, open ? 0.1 : 0.2])

  return (

    <animated.div style={{...rest, width: width}} className="menu" onMouseEnter={() => {setOpen(true)}} onMouseLeave={() => { setOpen(false) }}>
      <Logo />
      <div className="menu__icon">
        {
          hideMenuIcons.map((props, index) => <animated.div className="menu__line" style={props} key={index}/>)
        }
      </div>
      {
        showMenuItems.map(({ item, props }) => {
          return <Nav item={item} key={item.id} props={props} path={item.path}/>
        })
      }
      <animated.div style={{...rest, transform: transform, width: width}} className="menu__blink" />
    </animated.div>
  );
}

export default Menu;
