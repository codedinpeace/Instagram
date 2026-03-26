const express = require("express");
const likeRouter = express.Router();
const likeController = require("../controllers/like.controller");
const validateUser = require("../middlewares/validateUser");

likeRouter.post("/:postId", validateUser, likeController.likePostController);
likeRouter.post(
  "/unlike/:postId",
  validateUser,
  likeController.unLikePostController
);
likeRouter.get(
  "/likes/:postId",
  validateUser,
  likeController.getAllLikesController
);

module.exports = likeRouter;
