import { audio } from "./index.js";
import * as audioControls from "./audioControl.js";

const playButtonSelector = document.querySelector(".play-button");

function setToPlayIcon() {
  playButtonSelector.classList.remove("playing");
  playButtonSelector.innerHTML = "<img src=\"media-play.svg\" alt=\"previous\">";
}

export function setToPauseIcon() {
  playButtonSelector.classList.add("playing");
  playButtonSelector.innerHTML = "<img src=\"pause.svg\" alt=\"previous\">";
}

function isPlaying() {
  return playButtonSelector.classList.contains("playing");
}

playButtonSelector.addEventListener("click", () => {
  if (isPlaying()) {
    setToPlayIcon();
    audioControls.pause(audio);
  } else {
    setToPauseIcon();
    audioControls.play(audio);
  }
});
