const express = require("express");
const app = express();
var ev = require("express-validation");
var expressValidator = require("express-validator");

const anagramData = require("./src/model");
anagramData.processWorldList();
app.get("/ping", (req, res) => res.send("pong"));

app.get("/", (req, res) => res.send("Hello guys from SweetIQ"));

app.use(require("./src/anagram"));
app.use(expressValidator);

app.listen(3001, () => {
  console.log("App anagram is ready");
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
