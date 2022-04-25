//
module.exports = function validateColor(colors, color) {
	const colorEnum = [...colors];
	const formattedColor = color.trim().toLowerCase();
	let isColor = false;
	if (colorEnum.indexOf(formattedColor) !== -1) {
		isColor = true;
	}
	return isColor;
};
