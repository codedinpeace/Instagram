const createToken = require("../config/createToken");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({
      $or: [{ username}, {email}],
    });

    if (existingUser)
      return res.status(401).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    createToken(user._id, user.username, res);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
    console.log(error);
  }
};

const login = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await userModel.findOne({
        $or: [{username}, {email}],
      });

    if (!user) return res.status(404).json({ message: "User not found" });

    const comparedPassword = await bcrypt.compare(password, user.password);

    if (!comparedPassword)
      return res.status(409).json({ message: "invalid credentials" });

    createToken(user._id, user.username, res);

    res.status(200).json({
      message: "User loggedIn successfully",
      user: {
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    res.status(400).json({message:"Something went wrong"})
    console.log(error)
  }
};

module.exports = {
  register,
  login,
};
