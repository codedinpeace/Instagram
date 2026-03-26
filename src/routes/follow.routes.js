const express = require("express");
const followRouter = express.Router();
const followController = require("../controllers/followers.controller");
const validateUser = require("../middlewares/validateUser");

followRouter.post(
  "/follow/:username",
  validateUser,
  followController.followUserController
);
followRouter.post(
  "/unfollow/:username",
  validateUser,
  followController.unFollowUserController
);

module.exports = followRouter;
