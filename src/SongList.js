const songListArray = [
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

function returnCertainKeyValues(key) {
  const result = [];
  songListArray.forEach(song => {
    result.push(song[key]);
  });
  return result;
}

export const songsTitles = returnCertainKeyValues("title");
export const songsArtists = returnCertainKeyValues("artist");
export const songsUrls = returnCertainKeyValues("url");
export const songsArtBox = returnCertainKeyValues("image");
