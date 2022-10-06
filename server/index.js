const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const todoRoute = require("./routes/todo");
const userRoute = require("./routes/user")

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(cors());


const PORT = process.env.PORT || 5500;

//database connection
mongoose
  .connect(
    process.env.DB_CONNECTION
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

app.use("/api/item", todoRoute);
app.use("/api/user", userRoute)

app.listen(PORT, () => {
  console.log("server connected");
});
