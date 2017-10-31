/*

  Connect to server.

  Spawn as a knight or as an archer.

  Can attack, move.

*/

const socket = io();
let id;

let game;

window.onload = () => {
  socket.emit('connection');

  socket.on('id', x => {
    id = x;
  });

  window.addEventListener("keydown", moveObject);
  window.addEventListener("mousemove", mouseTracker);
  window.addEventListener("click", clickFire);

  game = document.getElementById("game-window");

  socket.on('state', players => {
    refreshDraws(players);
  });
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

function refreshDraws(players){
  let ctx = game.getContext('2d');
  ctx.clearRect(0, 0, 800, 600);
  ctx.fillStyle = 'green';

  let localPlayers = players;
  let len = Object.keys(localPlayers).length

  for (let key in localPlayers){
    ctx.font = "30px Arial";
    ctx.fillText(`${len}`,10,50);
  }

}
