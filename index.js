const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const middleware = (request, response, next) => {
  const { body } = request;
  if (body.umur < 17) {
    response.json({
      ...body,
      status: "di reject",
    });
  }

  body.status = "diterima";
  next();
};

app.get("/hello", (request, response) => {
  response.send("Hello world");
});

app.post("/biodata", middleware, (request, response) => {
  const { body } = request;

  response.json(body);
});

app.use("*", (request, response) => {
  response.send("hello apii");
});

app.listen(3000, () => {
  console.log("API is running on port 3000");
});

module.exports = app;
