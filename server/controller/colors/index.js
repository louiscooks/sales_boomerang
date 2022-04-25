const logger = require("../../config/logger.js");
const buildColor = require("../../models/color.js");
const handleError = require("../../utilities/handleError.js");
const validateBody = require("../../utilities/validateBody.js");
const validateColor = require("../../utilities/validateColor.js");

const color = buildColor();

module.exports.getAllColors = (req, res) => {
	logger.info("Getting all Colors");
	const rgb = color.colorList();
	res.status(200).json({ status: "success", colors: rgb });
};
module.exports.getOneColor = (req, res) => {
	logger.info("Getting One color");
	const colorParam = req.params.color;
	const rgb = color.colorList();
	const colorsArr = Object.keys(rgb);
	const isColor = validateColor(colorsArr, colorParam);
	if (!isColor) {
		handleError(res);
		return;
	}
	const value = rgb[colorParam];
	res.status(200).json({ status: "success", rgb: value });
};
module.exports.getRandomColor = (req, res) => {
	logger.info("Getting Random Color");
	//building the rbg object model
	let rgb = { red: null, green: null, blue: null };
	if (req.body.red) {
		rgb.red = req.body.red;
	}
	if (req.body.green) {
		rgb.green = req.body.green;
	}
	if (req.body.blue) {
		rgb.blue = req.body.blue;
	}
	let isColor = validateBody(rgb);
	if (!isColor) {
		handleError(res, 400, "Error: value must be from 0 to 255");
		return;
	}
	const randomColor = color.genRandomColor(rgb);
	res.status(200).json({ status: "success", rgb: randomColor });
};
