const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    let result = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database is connected");
  } catch (error) {
    console.log("cannot connect $(error)");
  }
};

module.exports = connectdb;
