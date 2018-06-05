var Joi = require("joi");

const inputValidation = {
  find: {
    query: {
      word: Joi.string().required()
    }
  }
};

module.exports = inputValidation;
