

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

let room = {
  height: 1000,
  width: 1000
}

function refreshDraws(players){
  let ctx = game.getContext('2d');
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0, 0, 800, 550);

  let localPlayers = players;
  let len = Object.keys(localPlayers).length;

  let camX = 0;
  let camY = 0;
  if ((localPlayers[id].x >= (game.width/2)) && localPlayers[id].x < (room.width - (game.width/2))) {
    camX = localPlayers[id].x - game.width/2;
  } else if (localPlayers[id].x >= (room.width - (game.width/2))){
    camX = room.width - game.width;
  }
  if ((localPlayers[id].y >= (game.height/2)) && localPlayers[id].y < (room.height - (game.height/2))){
    camY = localPlayers[id].y - game.height/2;
  } else if (localPlayers[id].y >= (room.height - (game.height/2))){
    camY = room.height - game.height;
  }
  ctx.translate(-camX, -camY);

  for (let key in localPlayers){
    ctx.fillStyle = "black";
    ctx.fillRect(localPlayers[key].x, localPlayers[key].y, 10, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(localPlayers[key].x + 1, localPlayers[key].y + 1, 8, 8);
  }

  console.log(`${localPlayers[id].x}, ${camX}`);
  console.log(`${localPlayers[id].y}, ${camY}`);

}

