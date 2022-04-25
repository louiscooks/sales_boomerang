const express = require("express");
const router = express.Router();
const colorController = require("../../controller/colors/index.js");

router.get("/", colorController.getAllColors);
router.post("/", colorController.getRandomColor);
router.get("/:color", colorController.getOneColor);

module.exports = router;
