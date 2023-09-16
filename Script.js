console.log("Welcome to spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "True love ", filePath: "songs/1.mp3", coverPath: "cover7.jpeg" },
    { songName: "Tum se he", filePath: "songs/6.mp3", coverPath: "Cover4.jpg" },
    { songName: "Agency song", filePath: "songs/3.mp3", coverPath: "Cover 2.jpg" },
    { songName: "Amplifire", filePath: "songs/4.mp3", coverPath: "cover5.jpeg" },
    { songName: "Chuny se tere", filePath: "songs/5.mp3", coverPath: "Cover8.jpg" },
    { songName: "Dar ha tujhy me kho na du ", filePath: "songs/2.mp3", coverPath: "cover6.jpg" },
    { songName: "Tere wasty falak se me ", filePath: "songs/7.mp3", coverPath: "Cover3.jpeg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${index}.mp3.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})