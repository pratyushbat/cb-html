const { Product } = require("../../db");

const route = require("express").Router();

route.get("/", (req, res) => {
  console.log("insdie product");
  Product.findAll()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500).send({
        error: "Could not retreive products",
      });
    });
});
route.post("/", (req, res) => {
  if (isNaN(req.body.price)) {
    return res.status(403).send({
      error: "Product is not a valid number",
    });
  }
  Product.create({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
  })
    .then((products) => {
      res.status(201).send(products);
    })
    .catch((err) => {
      res.status(501).send({
        error: "Error adding products",
      });
    });
});
exports = module.exports = route;
