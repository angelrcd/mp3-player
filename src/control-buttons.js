import { songList, audio, currentSong, pause, play, updateMusicSource } from "./musicControl.js";
const playButtonSelector = document.querySelector(".play-button");
updateMusicSource(songList[0].url);

function setToPlayIcon() {
  playButtonSelector.classList.remove("playing");
  playButtonSelector.innerHTML = "<img src=\"media-play.svg\" alt=\"previous\">";
}

function setToPauseIcon() {
  playButtonSelector.classList.add("playing");
  playButtonSelector.innerHTML = "<img src=\"pause.svg\" alt=\"previous\">";
}

function isPlaying() {
  return playButtonSelector.classList.contains("playing");
}

playButtonSelector.addEventListener("click", () => {
  if (isPlaying()) {
    setToPlayIcon();
    pause();
  } else {
    setToPauseIcon();
    play();
  }
});

audio.addEventListener("ended", () => {
  updateMusicSource(updateMusicSource(songList[1].url));
});
