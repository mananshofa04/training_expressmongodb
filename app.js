const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv/config');

const router = require('./src/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Connect To DB
mongoose
  .connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    (err, client) => {
      console.log(err)
      if (!err) {
        console.log("SUCCESSFULLY!! Connect to DB ");
        db = client.db;
      }
    }
  )

app.use('/auth', router);

app.use("*", (request, response) => {
  response.send("hello apii");
});

app.listen(process.env.PORT, () => {
  console.log("API is running on port "+process.env.PORT);
});

module.exports = app;
