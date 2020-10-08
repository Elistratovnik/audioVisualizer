const { SET_CONTEXT, ADD_SONG, CHANGE_PATH, CHANGE_CURRENT_SONG_INDEX } = require("./types");

export function setContext(context, audioRef) {
  return {
    type: SET_CONTEXT,
    payload: {
      context,
      audioRef
    }
  }
}

export function addSong(song) {
  return {
    type: ADD_SONG,
    payload: song
  }
}

export function changePath(path) {
  return {
    type: CHANGE_PATH,
    payload: path
  }
}

export function changeCurrentSongIndex(index) {
  return {
    type: CHANGE_CURRENT_SONG_INDEX,
    payload: index
  }
}


