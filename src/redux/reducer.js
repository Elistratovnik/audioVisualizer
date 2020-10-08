import { ADD_SONG, CHANGE_CURRENT_SONG_INDEX, CHANGE_PATH, SET_CONTEXT } from "./types";
import song from '../music/song.mp3';

const initialState = {
  context: null,
  analyzer: null,
  src: null,
  songs: [],
  path: song,
  currentIndex: null
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
    default:
      return state;
  }
}
