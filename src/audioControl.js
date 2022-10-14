import { songsUrls } from "./SongList.js";

export const play = (audio) => {
  audio.play();
};

export const pause = (audio) => {
  audio.pause();
};

export const setAudioSrc = (audio, positionNumber) => {
  audio.src = songsUrls[positionNumber];
};

export const setFirstSong = (audio) => {
  setAudioSrc(audio, 0);
};

export const getCurrentSongPosition = (audio) => {
  let currentIndex;
  songsUrls.forEach(function callback(songInTheList, index) {
    if (audio.src === songInTheList) currentIndex = index;
  });
  return currentIndex;
};

export const setSrcNextSong = (audio) => {
  const currentPosition = getCurrentSongPosition(audio);
  if (currentPosition === songsUrls[songsUrls.length - 1]) {
    alert("Esta canción es la última en la lista");
    return null;
  }
  setAudioSrc(audio, currentPosition + 1);
};

export const setSrcPreviousSong = (audio) => {
  const currentPosition = getCurrentSongPosition(audio);
  if (currentPosition === songsUrls[0]) {
    alert("Esta canción es la primera en la lista");
    return null;
  }
  setAudioSrc(audio, currentPosition - 1);
};
