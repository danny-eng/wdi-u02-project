const express = require('express');
const playerRouter = express.Router();

const playerController = require('../controllers/players-controller');


playerRouter.get('/', playerController.index);

playerRouter.get('/login', )
