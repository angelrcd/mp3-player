import { songsUrls } from "./SongList.js";

export let currentPosition;

export function setCurrentPosition(position) {
  currentPosition = position;
  console.log(currentPosition);
}

export const play = (audio) => {
  audio.play();
};

export const pause = (audio) => {
  audio.pause();
};

export const setAudioSrc = (audio, positionNumber) => {
  audio.src = songsUrls[positionNumber];
  setCurrentPosition(positionNumber);
};

export const setFirstSong = (audio) => {
  setAudioSrc(audio, 0);
};

export const setSrcNextSong = (audio) => {
  setAudioSrc(audio, currentPosition + 1);
  if (currentPosition > songsUrls.length - 1) {
    setAudioSrc(audio, songsUrls.length - 1);
    return null;
  }
};

export const setSrcPreviousSong = (audio) => {
  setAudioSrc(audio, currentPosition - 1);
  if (currentPosition < 0) {
    setFirstSong(audio);
  }
};
