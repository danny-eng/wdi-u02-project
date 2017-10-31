/*

  Connect to server.

  Spawn as a knight or as an archer.

  Can attack, move.

*/

const socket = io();
let data = {};

const game = document.querySelector('game-window');

window.onload = () => {
  socket.emit('connection');

  socket.on('data', data => {
    console.log(data);
  });

  window.addEventListener("keydown", moveObject);
  window.addEventListener("mousemove", mouseTracker);
  window.addEventListener("mouseclick", clickFire);
}

// mouse

let mouseX;
let mouseY;
function mouseTracker(event){
  let e = event;
  mouseX = e.x;
  mouseY = e.y;
}

function clickFire(event){
  let fire_pos = {};
  fire_pos.x = mouseX;
  fire_pos.y = mouseY;
  console.log(fire_pos);
}

// keyboard

function moveObject(event){
  socket.emit('keypress', event.code);
}
