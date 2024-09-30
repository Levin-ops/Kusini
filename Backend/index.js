const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { type } = require("os");
const { error } = require("console");

app.use(express.json());
app.use(cors());

//Database connection with mongoBD

mongoose.connect(
  "mongodb+srv://levinmwanganyi:Shanazia2021!@cluster0.uivn7.mongodb.net/kusini"
);

app.get("/", (req, res) => {
  res.send("Express App is running.");
});

//Image Storage
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Creating Upload endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//Schema for products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    description: req.body.description,
    level: req.body.level,
    price: req.body.price,
  });
  await product.save();
  res.json({
    success: 1,
    name: req.body.name,
  });
});

//Toggling Product Availability
app.post("/toggleavailability", async (req, res) => {
  const { id } = req.body;
  let product = await Product.findOne({ id });

  if (!product) {
    return res.status(404).json({ success: false, error: "Product not found" });
  }
  product.available = !product.available;

  await product.save();
  res.json({ success: true, available: product.available });
});

//Deletion API
app.post("/deleteproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({
    success: true,
    name: req.body.name,
  });
});

//EndPoint for Getting Products API
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  res.send(products);
});

//Endpoint for Top-Shelf drinks
app.get("/topshelf", async (req, res) => {
  let products = await Product.find({ level: "Top Shelf" });
  let topShelf = products.slice(1).slice(-8);
  res.send(products);
});

//Endpoint for Popular Drinks
app.get("/populardrinks", async (req, res) => {
  let products = await Product.find({ level: "Standard" });
  let popularDrinks = products.slice(0, 8);
  res.send(popularDrinks);
});

//Schema For Admin Model
const Admin = mongoose.model("Admin", {
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Admin Signup
app.post("/signup", async (req, res) => {
  let check = await Admin.findOne({ phone: req.body.phone });
  if (check) {
    return res.status(400).json({
      success: false,
      error: "Existing user found with similar number",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const admin = new Admin({
    name: req.body.name,
    phone: req.body.phone,
    password: hashedPassword, // Store the hashed password
  });

  await admin.save();

  const data = {
    user: {
      id: admin.id,
    },
  };
  const token = jwt.sign(data, "secret-kusini");
  res.json({ success: true, token });
});

//Admin login
app.post("/login", async (req, res) => {
  let admin = await Admin.findOne({ phone: req.body.phone });
  if (admin) {
    const passCompare = await bcrypt.compare(req.body.password, admin.password); // Compare hashed password
    if (passCompare) {
      const data = {
        admin: {
          id: admin.id,
        },
      };
      const token = jwt.sign(data, "secret-kusini");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, error: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Phone Number" });
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server running on port ${port}`);
  } else {
    console.log("Error:", error);
  }
});
