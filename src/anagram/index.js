var router = require("express").Router();

router.use("/", require("./anagramAPI"));

module.exports = router;
