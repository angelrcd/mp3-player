const playButtonSelector = document.querySelector(".play-button");

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
  } else {
    setToPauseIcon();
  }
});
