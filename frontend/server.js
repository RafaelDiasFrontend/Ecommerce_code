//simple express server to run frontend production build;
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.get("/produtos/*", function (req, res) {
	res.sendFile(path.join(__dirname, "dist","produtos", "index.html"));
});
app.listen(3333);