const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    caption: {
      type: String,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    user: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"user",
      required:[true, "user is required for creating a post"],
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;
