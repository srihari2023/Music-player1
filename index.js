const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "If It's Lovin' That You Want",
    name: "Taylor Swift",
    source:
      "./lover.mp3",
  },
  {
    title: "Oy Oy",
    name: "Siddharth",
    source:
      "./OY-OY.mp3",
  },
  {
    title: "Until I Found You",
    name: "Stephen Sanchez",
    source:
      "./song.mp3",
  },
  {
    title: "Aagi Aagi",
    name: " Anurag Kulkarni, Manisha Eerabathini",
    source:
      "./Aagi Aagi - SenSongsMp3.Co.mp3",
  },
  {
    title: "Apna Bana Le",
    name: "Arijit Singh & Sachin-Jigar",
    source:
      "./Apna-Bana-Le_192(PagalWorld).mp3",
  },

  {
    title: "Chiru Chiru",
    name: "Tamanna",
    source:
      "./[iSongs.info] 01 - Chiru Chiru Chiru.mp3 ",
  },
  {
    title: "Chana Mereya",
    name: "Pritam",
    source:
      "./Channa Mereya - Ae Dil Hai Mushkil 128 Kbps.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching