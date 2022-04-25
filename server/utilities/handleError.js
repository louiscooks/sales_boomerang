module.exports = function handleError(
	res,
	code = 400,
	message = "Color not found."
) {
	res.status(code).json({ status: "Error", message: message });
	return;
};
