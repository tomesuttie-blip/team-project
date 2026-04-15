const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

//default
app.get("/", (req, res) => {
    res.send("Server is running");
});
//get all endpoint
const Product = require("./models/Product");
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

//post product endpoint
app.post("/products", async (req, res) => {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
});

//put product endpoint
app.put("/products/:id", async (req, res) => {
    const id = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedProduct)
});

//delete product endpoint

app.delete("/products/:id", async (req, res) => {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.send("Deleted successfully");
});

if (process.env.NODE_ENV !== "test") {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}
module.exports = app;