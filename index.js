require("dotenv").config(); // <--- load env variables

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const productRoute = require("./routes/product.route");

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main()
  .then(() => {
    console.log("connected to db");
    app.listen(3000, () => {
      console.log("server running on 3000");
    });
  })
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node api");
});
