const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
async function main() {
  await mongoose.connect(
    "mongodb+srv://usernameoffline404:8DkGcayeHEmIjn30@cluster0.jtzbnlb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}
main()
  .then(() => {
    console.log("connectd to db");
    app.listen(3000, () => {
      console.log("server running on 3000");
    });
  })
  .catch((err) => console.log(err));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node api");
});
