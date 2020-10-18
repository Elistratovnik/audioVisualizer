import { ADD_SONG, ADD_SONG_DURATION, CHANGE_CURRENT_SONG_INDEX, CHANGE_PATH, CHANGE_VOLUME, DISABLE_SONG_SELECT, ENABLE_SONG_SELECT, HIDE_SPINNER, SET_CONTEXT, SET_CURRENT_TRACK_DURATION, SET_CURRENT_TRACK_TIME, SET_PAUSED } from "./types";
import song from '../music/song1.mp3';

const initialState = {
  context: null,
  analyzer: null,
  src: null,
  songs: [],
  path: song,
  currentIndex: -1,
  currentTime: 0,
  currentTrackDuration: 0,
  songSelectDisabled: false,
  paused: true,
  volume: 100,
  loaded: false
}

export function reduser(state = initialState, action) {
  switch (action.type) {
    case SET_CONTEXT:
      return { ...state, context: action.payload.context, analyzer: action.payload.context.createAnalyser(), src: action.payload.context.createMediaElementSource(action.payload.audioRef) }
    case ADD_SONG:
      return { ...state, songs: [...state.songs, action.payload] }
    case CHANGE_PATH:
      return { ...state, path: action.payload }
    case CHANGE_CURRENT_SONG_INDEX:
      return { ...state, currentIndex: action.payload }
    case SET_CURRENT_TRACK_TIME:
      return { ...state, currentTime: action.payload }
    case SET_CURRENT_TRACK_DURATION:
      return { ...state, currentTrackDuration: action.payload }
    case DISABLE_SONG_SELECT:
      return { ...state, songSelectDisabled: true }
    case ENABLE_SONG_SELECT:
      return { ...state, songSelectDisabled: false }
    case SET_PAUSED:
      return { ...state, paused: action.payload }
    case CHANGE_VOLUME:
      return { ...state, volume: action.payload }
    case HIDE_SPINNER:
      return { ...state, loaded: true }
    case ADD_SONG_DURATION:
      return {
        ...state, songs: state.songs.map((song, index) => {
          if (action.payload === index) {
            song.duration = state.currentTrackDuration
          }
          return song
        })
      }
    default:
      return state;
  }
}
