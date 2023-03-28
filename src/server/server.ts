const express = require("express");

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index");
});

server.listen("8080", () => {
  console.info("Express server is listening at port 8080");
});
