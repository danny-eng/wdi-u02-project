
const socket = io();

window.onload = () => {
  socket.emit('connection');
}
