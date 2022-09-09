let trackImg = document.querySelector(".trackImg");
let trackName = document.querySelector(".trackName");
let trackArtist = document.querySelector(".trackArtist");
 
let playpauseBtn = document.querySelector(".playpauseTrack");
let nextBtn = document.querySelector(".nextTrack");
let prevBtn = document.querySelector(".prevTrack");
 
let seekSlider = document.querySelector(".seekSlider");
let volumeSlider = document.querySelector(".volumeSlider");
let currTime = document.querySelector(".currentTime");
let totalDuration = document.querySelector(".totalDuration");

let trackIndex = 0;
let isPlaying = false;
let updateTimer;

let currTrack = document.createElement('audio');

let listMusic = document.querySelector('.listMusic');
let flexList = document.querySelector('.flexList')
let listImg = document.querySelector('.tracklistImg');
let listName = document.querySelector('.tracklistName');
let listArtist = document.querySelector('.tracklistArtist');

let trackList = [
    {
        index: 0,
        name: "All Of Me",
        artist: "Jonh Legend",
        img: 'music/img1.jpg',
        music: 'music/John Legend - All of Me.mp3'
    },
    {
        index: 1,
        name: "Somewhere Only We Know",
        artist: "Keane",
        img: 'music/img2.jpg',
        music: 'music/Keane - Somewhere Only We Know.mp3'
    },
    {
        index: 2,
        name: "Another Love",
        artist: "Tom Odell",
        img: 'music/img3.jpg',
        music: 'music/Tom Odell - Another Love.mp3'
    },
    {
        index: 3,
        name: "Save Your Tear",
        artist: "The Weeknd",
        img: 'music/img4.jpg',  
        music: 'music/The Weeknd - Save Your Tears.mp3'
    },
    {
        index: 4,
        name: "Habits - Hippie Sabotage Remix",
        artist: "Love Lo",
        img: 'music/img5.jpg', 
        music: 'music/Tove Lo - Habits (Stay High) - Hippie Sabotage Remix.mp3'
    },
    {
        index: 5,
        name: 'Do I Wanna Know?',
        artist: 'Arctic Monkeys',
        img: 'music/img6.jpg',
        music: 'music/Arctic Monkeys - Do I Wanna Know (Official Video).mp3'
    }
]

trackList.forEach(function(val) {
    var el = document.createElement('div')
    el.innerHTML += `
    <div class="tracklistImg" style="background-image: url(${val.img})"></div>
    <div class="tracklistName">${val.name} |</div>
    <div class="tracklistArtist">${val.artist}</div>`
    flexList.appendChild(el)
})

function loadTrack(trackIndex) {
    clearInterval(updateTimer);
    resetValues();

    currTrack.src = trackList[trackIndex].music
    currTrack.load();

    trackImg.style.backgroundImage = "url(" + trackList[trackIndex].img + ")";
    trackName.textContent = trackList[trackIndex].name;
    trackArtist.textContent = trackList[trackIndex].artist

    updateTimer = setInterval(seekUpdate, 1000);

    currTrack.addEventListener('ended', nextTrack);
}

function resetValues() {
    currTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    seekSlider.value = 0;
}

function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
    currTrack.play();
    isPlaying = true;

    playpauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    currTrack.pause();
    isPlaying = false;

    playpauseBtn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>'
}

function nextTrack () {
    if(trackIndex < trackList.length - 1) {
        trackIndex += 1 
    } else {
        trackIndex = 0
    }

    pauseTrack();
    loadTrack(trackIndex);
    playTrack();
}

function prevTrack () {
    if(trackIndex > 0) {
        trackIndex -= 1
    } else if(trackIndex == 0) {
        trackIndex = trackList.length - 1
    }

    pauseTrack();
    loadTrack(trackIndex);
    playTrack();
}

function seekTo() {
    let seekto = currTrack.duration * (seekSlider.value / 100);
   
    currTrack.currentTime = seekto;
  }
   
  function setVolume() {
    currTrack.volume = volumeSlider.value / 100;
  }
   
  function seekUpdate() {
    let seekPosition = 0;
   
    if (!isNaN(currTrack.duration)) {
      seekPosition = currTrack.currentTime * (100 / currTrack.duration);
      seekSlider.value = seekPosition;
   
      let currentMinutes = Math.floor(currTrack.currentTime / 60);
      let currentSeconds = Math.floor(currTrack.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(currTrack.duration / 60);
      let durationSeconds = Math.floor(currTrack.duration - durationMinutes * 60);
   
      if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
      if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
      if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
   
      currTime.textContent = currentMinutes + ":" + currentSeconds;
      totalDuration.textContent = durationMinutes + ":" + durationSeconds;
    }
  }

loadTrack(trackIndex)