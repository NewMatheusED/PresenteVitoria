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
        name: "Habits",
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
    },
    {
        index: 6,
        name: 'Stressed Out',
        artist: 'Twenty One Pilots',
        img: 'music/img7.jpg',
        music: 'music/twenty one pilots - Stressed Out (Audio).mp3'
    },
    {
        index: 7,
        name: 'Sweater Weather',
        artist: 'The Neighbourhood',
        img: 'music/img8.jpg',
        music: 'music/Sweater Weather.mp3'
    },
    {
        index: 8,
        name: 'Happier',
        artist: 'Marshmello ft. Bastille',
        img: 'music/img9.jpg',
        music: 'music/Marshmello ft. Bastille - Happier (Official Lyric Video).mp3'
    },
    {
        index: 9,
        name: 'When I Was Your Man',
        artist: 'Bruno Mars',
        img: 'music/img10.jpg',
        music: 'music/Bruno Mars - When I Was Your Man (Lyrics).mp3'
    },
    {
        index: 10,
        name: 'Somebody That I Used To Know',
        artist: 'Gotye',
        img: 'music/img11.jpg',
        music: 'music/Gotye - Somebody That I Used To Know (feat. Kimbra).mp3'
    },
    {
        index: 11,
        name: 'Heathens',
        artist: 'Twenty One Pilots',
        img: 'music/img12.jpg',
        music: 'music/Twenty One Pilots - Heathens (Audio).mp3'
    },
    {
        index: 12,
        name: 'Grenade',
        artist: 'Bruno Mars',
        img: 'music/img13.png',
        music: 'music/Bruno Mars - Grenade (Lyrics).mp3'
    },
    {
        index: 13,
        name: 'Feel Good Inc.',
        artist: 'Gorillaz',
        img: 'music/img14.jpg',
        music: 'music/Gorillaz - Feel Good Inc HD.mp3'
    },
    {
        index: 14,
        name: 'In The End',
        artist: 'Linkin Park',
        img: 'music/img15.jpg',
        music: 'music/In The End [Official HD Music Video] - Linkin Park.mp3'
    },
    {
        index: 15,
        name: 'R U mine?',
        artist: 'Arctic Monkeys',
        img: 'music/img6.jpg',
        music: 'music/Arctic Monkeys - R U Mine.mp3'
    },
    {
        index: 16,
        name: 'Talking To The Moon',
        artist: 'Bruno Mars',
        img: 'music/img16.jpg',
        music: 'music/Bruno Mars - Talking To The Moon.mp3'
    },
    {
        index: 17,
        name: 'Given Up',
        artist: 'Linkin Park',
        img: 'music/img17.jpg',
        music: 'music/Given Up [Official Music Video] - Linkin Park.mp3'
    },
    {
        index: 18,
        name: 'Faint',
        artist: 'Linkin Park',
        img: 'music/img18.jpg',
        music: 'music/Faint [Official Music Video] - Linkin Park.mp3'
    },
    {
        index: 19,
        name: 'I Gotta Feeling',
        artist: 'The Black Eyed Peas',
        img: 'music/img19.jpg',
        music: 'music/I Gotta Feeling.mp3'
    },
    {
        index: 20,
        name: 'We Are Young',
        artist: 'Fun',
        img: 'music/img20.jpg',
        music: 'music/We Are Young (feat. Janelle Monáe).mp3'
    },
    {
        index: 21,
        name: 'Riptide',
        artist: 'Vance Joy',
        img: 'music/img21.jpg',
        music: 'music/Riptide.mp3'
    },
    {
        index: 22,
        name: 'Fireflies',
        artist: 'Owl City',
        img: 'music/img22.jpg',
        music: 'music/Owl City - Fireflies (HQ).mp3'
    },
    {
        index: 23,
        name: 'Hey There Delilah',
        artist: "Plain White T's",
        img: 'music/img23.jpg',
        music: 'music/Hey There Delilah.mp3'
    },
    {
        index: 24,
        name: 'Hey, Soul Sister',
        artist: 'Train',
        img: 'music/img24.jpg',
        music: 'music/Hey, Soul Sister.mp3'
    },
    {
        index: 25,
        name: 'Beautiful Girls',
        artist: 'Sean Kingston',
        img: 'music/img25.jpg',
        music: 'music/Beautiful Girls (Radio Edit).mp3'
    },
    {
        index: 26,
        name: 'Am I Wrong',
        artist: 'Nico & Vinz',
        img: 'music/img26.jpg',
        music: 'music/Am I Wrong.mp3'
    },
    {
        index: 27,
        name: 'Yellow',
        artist: 'Coldplay',
        img: 'music/img27.jpg',
        music: 'music/Coldplay - Yellow (Lyrics).mp3'
    },
    {
        index: 28,
        name: 'Lights',
        artist: 'Ellie Goulding',
        img: 'music/img28.jpg',
        music: 'music/Ellie Goulding - Lights (Lyrics).mp3'
    },
    {
        index: 29,
        name: 'Turning Page',
        artist: 'Sleeping At Last',
        img: 'music/img29.jpg',
        music:'music/Turning Page Sleeping At Last Lyrics.mp3'
    },
    {
        index: 30,
        name: 'Imprevisto',
        artist: 'Yago Oproprio',
        img: 'music/img30.jpg',
        music:'music/Yago Oproprio Ft. Rô Rosa - Imprevisto (Áudio Oficial).mp3'
    },
    {
        index: 31,
        name: 'N.A.D.A.B.O.M pt.2',
        artist: 'Costa Gold',
        img: 'music/img31.jpg',
        music:'music/Costa Gold - N.A.D.A.B.O.M pt. 2 feat Luccas Carlos e Don L.mp3'
    },
    {
        index: 32,
        name: 'O Casamento',
        artist: 'MC Sid',
        img: 'music/img32.jpg',
        music:'music/Mc Sid , Spinardi - O Casamento (Animação Oficial) - Prod. Ugo Ludovico.mp3'
    },
    {
        index: 33,
        name: 'Ô moça (RAAD Remix)',
        artist: 'MC Zaquin',
        img: 'music/img33.jpg',
        music:'music/MC Zaquin - Ô Moça (RAAD Remix).mp3'
    },

]

if(window.off)

trackList.forEach(function(val) {
    var el = document.createElement('div')
    el.classList.add(val.index)
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