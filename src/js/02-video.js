import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';
const trottledOnPlay = throttle(onPlay, 1000);
getSavedTime();
player.on('timeupdate', trottledOnPlay);

function onPlay(data) {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, data.seconds);
}
function getSavedTime() {
  const savedTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);

  if (savedTime) {
    parsedSeconds = JSON.parse(savedTime);
    player.setCurrentTime(parsedSeconds);
  } else {
    parsedSeconds = 0;
  }
}
