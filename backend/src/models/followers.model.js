const mongoose = require("mongoose");

const followSchema = mongoose.Schema(
  {
    follower: {
      type: String,
      required: true,
    },

    followee: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

followSchema.index(
  { follower: 1, followee: 1 },
  { unique: [true, "You already follow this user"] }
);

followModel = mongoose.model("follow", followSchema);
module.exports = followModel;
