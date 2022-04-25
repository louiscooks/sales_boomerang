const express = require("express");
const cors = require("cors");
const logger = require("./config/logger.js");
const colorRoutes = require("./router/colors/index.js");

const app = express();
app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
// 	logger.info("Request coming from : ");
// 	next();
// });

app.use("/colors", colorRoutes);
app.use("*", (req, res) => {
	res.status(404).json({
		message: "Page not found."
	});
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
	logger.info(`app listening on port ${port}`);
});
