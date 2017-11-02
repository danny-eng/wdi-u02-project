

const socket = io();
let id;

let game;
let count;

window.onload = () => {
  socket.emit('connection');

  socket.once('id', x => {
    id = x;
    console.log(id);
  });

  window.addEventListener("keydown", moveObject);
  window.addEventListener("mousemove", mouseTracker);
  window.addEventListener("click", clickFire);

  game = document.getElementById("game-window");
  count = document.getElementById("counter");

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
  let playersOnline = Object.keys(localPlayers).length;

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
    ctx.fillRect(localPlayers[key].x, localPlayers[key].y, 15, 15);
    ctx.fillStyle = "red";
    ctx.fillRect(localPlayers[key].x + 1, localPlayers[key].y + 1, 13, 13);
    ctx.fillStyle = "black";
    ctx.font = "12px Times New Roman";
    ctx.fillText(`${localPlayers[key].nick}`, localPlayers[key].x - 3, localPlayers[key].y - 3);
  }

  if (playersOnline === 0){
    count.innerHTML = `<p>There are no players online.</p>`;
  } else if (playersOnline === 1){
    count.innerHTML = `<p>There is ${playersOnline} player online.</p>`;
  } else {
    count.innerHTML = `<p>There are ${playersOnline} players online.</p>`;
  }
}
