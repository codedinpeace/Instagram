const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: [true, "user with that username already exists"],
    },
    email: {
      type: String,
      unique: [true, "user with that email already exists"],
    },
    password: {
      type: String,
      minLength: 6,
    },
    bio: {
      type: String,
    },
    imageURL: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Twitter_default_profile_400x400.png",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
