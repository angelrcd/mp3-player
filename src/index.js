import "./playlist.js";
import "./control-buttons.js";
import * as audioControls from "./audioControl.js";

export const audio = document.createElement("audio");
let currentPosition = 0;
audio.src = "https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3";
audioControls.setFirstSong(audio);

export function setCurrentPosition(position) {
  currentPosition = position;
}
