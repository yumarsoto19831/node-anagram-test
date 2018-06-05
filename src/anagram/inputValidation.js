var Joi = require("joi");

const inputValidation = {
  find: {
    query: {
      word: Joi.string().required()
    }
  },
  compare: {
    query: {
      word1: Joi.string().required(),
      word2: Joi.string().required()
    }
  }
};

module.exports = inputValidation;
