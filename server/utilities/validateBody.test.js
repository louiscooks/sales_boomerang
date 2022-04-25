const validateBody = require("./validateBody.js");

test("when padding number from 0 to 255 validateBody should return true", () => {
	expect(validateBody({ r: 0, g: 255 })).toBe(true);
});
test("when passing null validateBody should return true", () => {
	expect(validateBody({ r: 100, g: null })).toBe(true);
});
