import { songsTitles, songsArtists, songsArtBox } from "./SongList";

const songTitleDisplay = document.querySelector(".song-title");
const songArtistDisplay = document.querySelector(".song-author");
const songArtBoxDisplay = document.querySelector(".art-box");

function insertTitle(position) {
  songTitleDisplay.textContent = songsTitles[position];
}

function insertArtist(position) {
  songArtistDisplay.textContent = songsArtists[position];
}

function insertArtBox(position) {
  const image = document.createElement("img");
  image.classList.add("thumbnail");
  image.src = songsArtBox[position];
  image.alt = "album de la cancion";
  songArtBoxDisplay.appendChild(image);
}

export function insertAllData(position) {
  insertTitle(position);
  insertArtist(position);
  insertArtBox(position);
}
