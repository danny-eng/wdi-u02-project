const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const authHelpers = require('./services/auth/auth-helpers');

require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/index', (req, res) => {
  res.render('index');
})

const authRouter = require('./routes/auth-router');
app.use('/auth', authRouter);

let userdat = {}
app.get('/game', authHelpers.loginRequired, (req, res) => {
  res.render('game');
  userdat = req.user;
  userdat["x"] = 100;
  userdat["y"] = 100;
});

app.use('*', (req, res) => {
  res.status(404).json("Not Found!");
});


/* game stuff */

let players = {};

io.on('connection', socket => {
  console.log(`New connection from ${socket.id}.`);
  io.emit('data', userdat);
  io.emit('id', socket.id);
  players[socket.id] = userdat;

  setInterval(function(){
    io.sockets.emit('state', players)
  }, 1000/60);

  socket.on('disconnect', event => {
    console.log(`User ${socket.id} has disconnected.`);
    delete players[socket.id];
  });

  socket.on('keypress', event => {
    if (event === "KeyW"){
      if (players[socket.id].y >= 5){
        players[socket.id].y -= 5;
      }
    }
    if (event === "KeyA"){
      if (players[socket.id].x >= 5){
        players[socket.id].x -= 5;
      }
    }
    if (event === "KeyS"){
      if (players[socket.id].y < 990){
        players[socket.id].y += 5;
      }
    }
    if (event === "KeyD"){
      if (players[socket.id].x < 990){
        players[socket.id].x += 5;
      }
    }
  });

});
