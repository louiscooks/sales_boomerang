export default function validateInput(input) {
	const reg = /^\d+$/;
	if (input.length > 0) {
		let isValid = reg.test(input);
		if (!isValid) {
			return false;
		}
		let value = parseInt(input);
		if (value < 0 || value > 255) {
			return false;
		}
		return true;
	}
	return null;
}
