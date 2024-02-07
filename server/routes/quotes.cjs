// const router = require("express").Router();
// const controller = require("../controller/quotes.cjs");

// router.get("/getQuotes", controller.getQuotes);

// module.exports = {router};

// quotes.cjs
const router = require("express").Router();
const controller = require("../controller/quotes.cjs");

router.get("/getQuotes", controller.getQuotes);

module.exports = router;
