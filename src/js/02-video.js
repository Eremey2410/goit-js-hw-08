import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';
const savedTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);
const trottledOnPlay = throttle(onPlay, 1000);

player.on('timeupdate', trottledOnPlay);

function onPlay(data) {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, data.seconds);
}

if (savedTime) {
  parsedSeconds = JSON.parse(savedTime);
  player.setCurrentTime(parsedSeconds);
} else {
  parsedSeconds = 0;
}
