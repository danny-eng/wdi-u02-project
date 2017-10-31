/*

  Connect to server.

  Spawn as a knight or as an archer.

  Can attack, move.

*/

const socket = io();
let data = {};

window.onload = () => {
  socket.emit('connection');

  socket.on('data', data => {
    console.log(data);
  });

  window.addEventListener("keydown", moveObject);
  window.addEventListener("mousemove", mouseTracker);
  window.addEventListener("click", clickFire);
}

// mouse

let mouseX;
let mouseY;
function mouseTracker(event){
  let e = event;
  mouseX = e.x;
  mouseY = e.y;
}

function clickFire(){
  let pos = {
    x: mouseX,
    y: mouseY
  };
  socket.emit('fire', pos);
}

// keyboard

function moveObject(event){
  socket.emit('keypress', event.code);
}


