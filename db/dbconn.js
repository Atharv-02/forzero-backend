const mongoose = require("mongoose");
const URI =
  "mongodb+srv://AtharvGulati:Atharv030203@nodeexpressprojects.desv4e8.mongodb.net/";

const connecttoDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connecttoDb;
