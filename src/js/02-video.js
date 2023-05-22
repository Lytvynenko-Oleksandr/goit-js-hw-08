import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const saveCurrentTime = () => {
  player.getCurrentTime().then((currentTime) => {
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
};

const seekToSavedTime = () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));
window.addEventListener('load', seekToSavedTime);
