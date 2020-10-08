import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import '../sass/Playlist.scss';
import Song from './Song';

function Playlist({handleAddSong}) {
  const [open, setOpen] = useState(false)
  const songs = useSelector(state => state.songs)

  const playlistSpring = useSpring({
    transform: open ? 'translateX(0%)' : 'translateX(100%)'
  })

  const rotateInter = (r) => `${r} rotate(90deg)`
  const { rotate } = useSpring({
    rotate: open ? 'rotate(45deg)' : 'rotate(-45deg)'
  })

  return (
    <animated.div style={playlistSpring} className="playlist" onClick={e => e.stopPropagation()}>
      <header className="playlist__header">
        <input type="file" id="input" onChange={handleAddSong} multiple></input>
      </header>
      <div className="playlist__songs">
        {
          songs.map((song, index) => {
            return <Song key={index} index={index} name={song.name} artist={song.artist} duration={song.duration} path={song.path}/>
          })
        }
      </div>
      <button className="playlist__button" onClick={() => { setOpen(!open) }}>
        <animated.span style={{ transform: rotate }} className="playlist__icon-line playlist__icon-line_top" />
        <animated.span style={{ transform: rotate.interpolate(rotateInter) }} className="playlist__icon-line playlist__icon-line_bottom" />
      </button>
    </animated.div>
  );
}

export default Playlist;
