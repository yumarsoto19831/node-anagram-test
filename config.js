var config = module.exports;
var PRODUCTION = process.env.NODE_ENV === "production";

config.express = {
  port: process.env.EXPRESS_PORT || 3001
};

config.validationOptions = {
  customSanitizers: {
    toLowerCase: input => input.toLowerCase()
  }
};
