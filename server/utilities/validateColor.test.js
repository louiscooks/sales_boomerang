const validateColor = require("./validateColor.js");
let colorArr = ["red", "green", "blue"];

test("when passing an enum and vaild value; validateColor should return true", () => {
	expect(validateColor(colorArr, "red")).toBe(true);
});
test("when passing an enum and invaild value; validateColor should return false", () => {
	expect(validateColor(colorArr, "yellow")).toBe(false);
});
