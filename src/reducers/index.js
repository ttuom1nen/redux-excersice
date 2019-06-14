import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song title A", duration: "4:05" },
    { title: "Song title B", duration: "2:23" },
    { title: "Song title C", duration: "5:10" },
    { title: "Song title D", duration: "2:00" }
  ];
};

const selectedSongReducer = (selectedSong = null) => {
  if (applicationCache.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
