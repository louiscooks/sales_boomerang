module.exports = function validateQuery(rgb) {
	if (rgb.red === null && rgb.green === null && rgb.blue === null) {
		return true;
	}
	let isColor = true;
	let numbers = Object.values(rgb);
	numbers.forEach((num) => {
		if (num !== null) {
			let value = parseInt(num);
			if (value < 0 || value > 255) {
				isColor = false;
				return;
			}
		}
	});
	return isColor;
};
