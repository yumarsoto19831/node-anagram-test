const express = require("express");
const app = express();
var ev = require("express-validation");
var expressValidator = require("express-validator");
var bodyParser = require("body-parser");

const validation = require("./src/validation");

app.use(bodyParser.json());

var config = require("./config");

const anagramData = require("./src/model");

app.use(expressValidator(validation.validationOptions));
app.use(require("./src/anagram"));

app.get("/ping", (req, res) => res.send("pong"));

app.get("/", (req, res) => res.send("Hello guys from SweetIQ"));

app.listen(3002, () => {
  anagramData.processWorldList();
  console.log("App anagram is ready!");
});

// error handler
app.use(function(err, req, res, next) {
  // specific for validation errors
  if (err instanceof ev.ValidationError)
    return res.status(err.status).json(err);

  // other type of errors, it *might* also be a Runtime Error
  // example handling
  if (process.env.NODE_ENV !== "production") {
    return res.status(500).send(err.stack);
  } else {
    return res.status(500);
  }
});

module.exports = app;
