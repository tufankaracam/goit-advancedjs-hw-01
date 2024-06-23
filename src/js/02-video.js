import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

document.addEventListener('DOMContentLoaded', () => {
  const currentTime = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  player.setCurrentTime(currentTime);
});

player.on(
  'timeupdate',
  _.throttle(async () => {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime)
    );
  }, 1000)
);

