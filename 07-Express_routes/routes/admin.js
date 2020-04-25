const express = require("express");
const path = require("path");

const rootDir = require("./../util/path");

const routes = express.Router();

// /admin/add-product => GET
routes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
routes.post("/add-product", (req, res, next) => {
  console.log(req.body);
  //   res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
  res.sendFile(path.join(rootDir , "views", "add-product.html"));
});

module.exports = routes;
