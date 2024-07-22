let wheel1 = document.querySelector('.wheel1 img');
let wheel2 = document.querySelector('.wheel2 img');

let rotation = 0;

setInterval(() => {
  wheel1.style.transform = `rotate(${rotation}deg)`;
  wheel2.style.transform = `rotate(${rotation}deg)`;
  rotation = (rotation + 1) % 360;
}, 4); // 16ms = 60fps

var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;
document.body.appendChild(audio); // Add the audio element to the DOM
audio.play();