import { songsTitles } from "./SongList.js";
import * as audioControls from "./audioControl.js";
import { audio } from "./index.js";
import { setToPauseIcon } from "./control-buttons.js";

const showPlaylistButton = document.querySelector(".playlist-button");
const playlistSelector = document.querySelector(".playlist");
const nextSongButtonSelector = document.querySelector(".next-song-button");
const previousSongButtonSelector = document.querySelector(".previous-song-button");

// Añade el título de las canciones en la playlist
songsTitles.forEach(title => {
  const button = document.createElement("button");
  button.textContent = title;
  playlistSelector.insertAdjacentElement("beforeend", button);
});

const selectSongButtons = document.querySelectorAll(".playlist button");

showPlaylistButton.addEventListener("click", () => {
  if (showPlaylistButton.classList.contains("playlist-is-closed")) {
    showPlaylistButton.classList.remove("playlist-is-closed");
    showPlaylistButton.classList.add("playlist-is-open");
  } else if (showPlaylistButton.classList.contains("playlist-is-open")) {
    showPlaylistButton.classList.remove("playlist-is-open");
    showPlaylistButton.classList.add("playlist-is-closed");
  }
  playlistSelector.classList.toggle("hidden");
});

const removeAllSelectedClasses = () => {
  selectSongButtons.forEach(selectSongButton => {
    selectSongButton.classList.remove("selected");
  });
};

// selectSongButtons.forEach(selectSongButton => {
//  selectSongButton.addEventListener("click", () => {
//    removeAllSelectedClasses();
//    selectSongButton.classList.add("selected");
//  });
// });

selectSongButtons.forEach(function callback(selectSongButton, index) {
  selectSongButton.addEventListener("click", () => {
    removeAllSelectedClasses();
    selectSongButton.classList.add("selected");
    audioControls.setAudioSrc(audio, index);
    audioControls.play(audio);
    setToPauseIcon();
    audioControls.setCurrentPosition(index);
  });
});

previousSongButtonSelector.addEventListener("click", () => {
  removeAllSelectedClasses();
  selectSongButtons[audioControls.currentPosition].classList.add("selected");
});

nextSongButtonSelector.addEventListener("click", () => {
  removeAllSelectedClasses();
  selectSongButtons[audioControls.currentPosition].classList.add("selected");
});
