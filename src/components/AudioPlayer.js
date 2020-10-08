import React, { useEffect, useRef} from 'react';
import Visualizer from './Visualizer';
import '../sass/AudioPlayer.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addSong, setContext } from '../redux/actions';

function AudioPlayer() {
  const dispatch = useDispatch()
  const audioRef = useRef()
  const path = useSelector(state => state.path)
  const { context, analyzer, src, currentIndex } = useSelector(state => ({
    context: state.context,
    analyzer: state.analyzer,
    src: state.src,
    currentIndex: state.currentIndex
  }))

  const handleAddSong = (e) => {
    e.stopPropagation()
    const names = Object.values(e.currentTarget.files).map((file) => {
      return file.name
    })
    for (let i = 0; i < Object.values(e.currentTarget.files).length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(e.currentTarget.files[i])
      reader.onload = function () {
        setTimeout(() => {
          dispatch(addSong({name: names[i], artist: '123', duration: audioRef.current.duration, path: reader.result}))
        }, 1000)
      };
      reader.onerror = function () {
        console.log(reader.error);
      };
    }
  }

  useEffect(() => {
    dispatch(setContext(new AudioContext(), audioRef.current))
  }, [])

  return (
    <div className="audio-player">
      <audio src={path} ref={audioRef} />
      <Visualizer context={context} analyzer={analyzer} src={src} audioRef={audioRef} handleAddSong={handleAddSong}/>
    </div>
  );
}

export default AudioPlayer;
