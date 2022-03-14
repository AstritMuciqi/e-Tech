const express = require('express');
const userController = require('../controllers/userController');
const checkIfAuthenticated = require('../middleware/checkIfAuthenticated');
const admin = require('../services/firebase');

const userRouter = express.Router();

userRouter.post('/register', userController.register);

userRouter.use(checkIfAuthenticated);

module.exports = userRouter;
