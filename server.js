const express = require("express");
require('dotenv').config();
const dbConnect=require("./config/connectdb");
const { use } = require("./routes/contacts");
const app = express();
dbConnect();
// create route
//middleware routing body parsing
app.use(express.json());
app.use("/api/contact", require("./routes/contacts"));





const PORT=process.env.PORT
 
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running")
);
