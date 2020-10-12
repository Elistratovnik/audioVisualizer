import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring, animated, useChain, useTransition} from 'react-spring';
import { addSong } from '../redux/actions';
import '../sass/Playlist.scss';
import Song from './Song';

function Playlist({connection}) {
  const [open, setOpen] = useState(false)
  const songs = useSelector(state => state.songs)
  const dispatch = useDispatch()

  const playlistSpringRef = useRef()
  const {width, opacity, transform} = useSpring({
    ref: playlistSpringRef,
    width: open ? '400px' : '0px',
    opacity: open ? 0 : 1,
    transform: open ? 'translateX(-100%)' : 'translateX(0%)'
  })

  const showSongsRef = useRef();
  const showSongs = useTransition(open ? songs : [], item => item.name, {
    ref: showSongsRef,
    unique: true,
    trail: 50,
    from: { opacity: 0, right: '-100%' },
    enter: { opacity: 1,  right: '0%' },
    leave: { opacity: 0,  right: '0%' }
  })

  const rotateInter = (r) => `${r} rotate(90deg)`
  const { rotate } = useSpring({
    rotate: open ? 'rotate(45deg)' : 'rotate(-45deg)'
  })

  const handleAddSong = (e) => {
    e.stopPropagation()
    let error = false
    Object.values(e.currentTarget.files).forEach((file) => {
      if (file.type !== 'audio/mpeg') {
        error = true
      }
    })
    if (error) {
      return alert('неправильный тип файла - загрузите mp3')
    }

    const names = Object.values(e.currentTarget.files).map((file) => {
      return file.name
    })
    for (let i = 0; i < Object.values(e.currentTarget.files).length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(e.currentTarget.files[i])
      reader.onloadstart = function () {
        console.log('start')
      }
      reader.onloadend = function () {
        console.log('end')
      }

      reader.onload = function () {
        setTimeout(() => {
          dispatch(addSong({name: names[i], duration: '--:--', path: reader.result}))
        }, 500)
      };
      reader.onerror = function () {
        console.log(reader.error);
      };
    }
  }

  useChain(open ? [playlistSpringRef, showSongsRef] : [showSongsRef, playlistSpringRef])

  return (
    <animated.div style={{width: width}} className="playlist" onClick={e => e.stopPropagation()}>
      <header className="playlist__header">
        <label className="playlist__download" htmlFor="download">
          <i className="fa fa-cloud-download playlist__icon" aria-hidden="true"></i>
        </label>
        <input style={{display: 'none'}} name="download" type="file" id="download" onChange={handleAddSong} multiple></input>
      </header>
      <div className="playlist__songs">
        {
          showSongs.map(({item, props}, index) => {
            return <Song key={index} index={index} name={item.name} duration={item.duration} path={item.path} connection={connection} props={props}/>
          })
        }
      </div>
      <div className="playlist__button" onClick={() => {
        setOpen(!open)
        }}>
        <animated.h3 style={{opacity: opacity, transform: transform}} className="playlist__title">playlist</animated.h3>
        <animated.span style={{ transform: rotate }} className="playlist__icon-line playlist__icon-line_top" />
        <animated.span style={{ transform: rotate.interpolate(rotateInter) }} className="playlist__icon-line playlist__icon-line_bottom" />
      </div>
    </animated.div>
  );
}

export default Playlist;
