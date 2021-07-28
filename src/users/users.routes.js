const { Router } = require('express');
const userRouter = Router();
const { createUser, findUser } = require('./users.controllers');

userRouter.post('/users', createUser);
userRouter.get('/users/:username', findUser);

module.exports = userRouter;