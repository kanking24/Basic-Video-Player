const video2 = document.getElementById('video1');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// To play and pause the video
function toggleVideoStatus(){
  if(video2.paused){
    video2.play();
  }else{
    video2.pause();
  }

}

// update play/pause icon
function updatePlayIcon(){
  if(video2.paused){
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else{
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// update progress & timestamp
function updateProgress(){
  progress.value = (video2.currentTime / video2.duration) * 100;

  // Get minutes
  let mins = Math.floor(video2.currentTime / 60);
  if(mins < 10){
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video2.currentTime % 60);
  if(secs < 10){
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress(){
  video2.currentTime = +(progress.value * video2.duration)/100;
}

// Stop video
function stopVideo(){
  video2.currentTime = 0;
  video2.pause();
}

// These are Event Listeners
video2.addEventListener('click', toggleVideoStatus);
video2.addEventListener('pause',updatePlayIcon);
video2.addEventListener('play',updatePlayIcon);
video2.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change',setVideoProgress);
video2.addEventListener('click', toggleVideoStatus);