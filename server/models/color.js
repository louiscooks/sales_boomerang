const randomNumber = require("../utilities/randomNumber.js");

module.exports = function buildColor() {
	return Object.freeze({
		genRandomColor,
		colorList
	});

	function genRandomColor(rgb) {
		let red = randomNumber();
		let green = randomNumber();
		let blue = randomNumber();
		if (rgb.red) {
			red = rgb.red;
		}
		if (rgb.green) {
			green = rgb.green;
		}
		if (rgb.blue) {
			blue = rgb.blue;
		}

		const color = `${red},${green},${blue}`;
		return color;
	}

	function colorList() {
		let colors = {
			red: "255,0,0",
			orange: "255,165,0",
			yellow: "255,255,0",
			green: "0,128,0",
			blue: "0,0,255",
			indigo: "75,0,130",
			violet: "238,130,238"
		};
		return colors;
	}
};
