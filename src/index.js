import "./playlist.js";
import "./control-buttons.js";
import "./songDataDisplay";
import * as audioControls from "./audioControl.js";

export const audio = document.createElement("audio");
audioControls.setFirstSong(audio);
