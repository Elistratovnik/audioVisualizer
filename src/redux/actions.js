const { SET_CONTEXT, ADD_SONG, CHANGE_PATH, CHANGE_CURRENT_SONG_INDEX, SET_CURRENT_TRACK_TIME, DISABLE_SONG_SELECT, ENABLE_SONG_SELECT, SET_PAUSED, CHANGE_VOLUME, SET_CURRENT_TRACK_DURATION } = require("./types");

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

export function setCurrentTrackTime(time) {
  return {
    type: SET_CURRENT_TRACK_TIME,
    payload: time
  }
}

export function setCurrentTrackDuration(duration) {
  return {
    type: SET_CURRENT_TRACK_DURATION,
    payload: duration
  }
}

export function disableSongSelect() {
  return {
    type: DISABLE_SONG_SELECT,
  }
}

export function enableSongSelect() {
  return {
    type: ENABLE_SONG_SELECT,
  }
}

export function setPaused(flag) {
  return {
    type: SET_PAUSED,
    payload: flag
  }
}

export function changeVolume(num) {
  return {
    type: CHANGE_VOLUME,
    payload: num
  }
}

