const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
      console.log("Database connected Successfully");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
