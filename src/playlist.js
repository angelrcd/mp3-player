import { songList } from "./musicControl";

const showPlaylistButton = document.querySelector(".playlist-button");
const playlistSelector = document.querySelector(".playlist");

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
