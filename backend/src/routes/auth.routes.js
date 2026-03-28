const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controllers");
const validateUser = require('../middlewares/validateUser')

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/check", validateUser, authController.check)

module.exports = authRouter;
