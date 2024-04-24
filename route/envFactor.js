const express = require("express");
const envFactorController = require("../controller/envFactor");

const Router = express.Router();

Router.post("/get", envFactorController.getOne);
// Router.post("/get", (req, res) => {
//     console.log(req.body);
//     res.json({ message: "Hello" });
// });

Router.put("/update", envFactorController.updateOne);

Router.post("/create", envFactorController.createOne);

module.exports = Router;
