export const songList = [
  {
    title: "Monkey Island Theme",
    artist: "Michael Land",
    url: "https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3",
    image: "monkey.jpg"
  },
  {
    title: "The SCUMM Bar",
    artist: "Michael Land",
    url: "https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3",
    image: "scummbar.jpg"
  },
  {
    title: "LeChuck's Theme",
    artist: "Michael Land",
    url: "https://scummbar.com/mi2/MI1-CD/04%20-%20LeChuck's%20Theme.mp3",
    image: "lechuck.jpg"
  },
  {
    title: "Monkey Island (Remix)",
    artist: "Michael Land",
    url: "https://scummbar.com/mi2/MI1-CD/26%20-%20Monkey%20Island%20-%20Rock%20Remix%202.mp3",
    image: "monkey-mix.jpg"
  }
];

export const audio = document.createElement("audio");
export let currentSong = 0;

export const songTitles = (key) => {
  const titles = [];
  songList.forEach(song => {
    titles.push(song[key]);
  });
  return titles;
};

export const play = () => {
  audio.play();
};

export const pause = () => {
  audio.pause();
};

// Modifica el src del audio
export const updateMusicSource = (string) => {
  audio.src = string;
};

const nextSong = () => {
  updateMusicSource(songList[currentSong + 1].url);
  currentSong++;
};

const previousSong = () => {
  updateMusicSource(songList[currentSong - 1].url);
  currentSong--;
};
