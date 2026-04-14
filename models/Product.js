const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  storeId: String,
  storeName: String,
  productId: String,
  productName: String,
  price: Number
});

module.exports = mongoose.model("Product", productSchema);