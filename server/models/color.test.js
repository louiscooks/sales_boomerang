const buildColor = require("./color.js");
const color = buildColor();
const result = { red: 255, green: 255, blue: 255 };
test("returns random color object if a color obj is not passed", () => {
	expect(color.genRandomColor(result)).toBe("255,255,255");
});
