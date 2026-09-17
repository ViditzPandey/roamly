const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/roamly");
  console.log("Connected to MongoDB");

  await initDB();
}

async function initDB() {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=>({...obj,owner:"6aaaa5d2b3271297b6634f72"}));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
}

main().catch((err) => {
  console.error(err);
});