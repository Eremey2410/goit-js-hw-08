import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let arr = [];

player.on('play', function (data) {
  //   console.log(date.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
  const ger = localStorage.getItem('videoplayer-current-time');
  arr.push(ger);
  console.log(Number(arr));
});
player
  .setCurrentTime(Number(arr.length - 1))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

// console.log(player);

// player.on('timeupdate', onPlay);
// let timeArray = [];
// function onPlay(data) {
//   console.log(data);

//   localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
//   const curTime = localStorage.getItem('videoplayer-current-time');
//   const parsedCurTime = JSON.parse(curTime);
//   //   console.log(parsedCurTime.seconds);
//   timeArray.push(parsedCurTime.seconds);
// }
// console.log(timeArray);
// player
//   .setCurrentTime(timeArray.length - 1)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
