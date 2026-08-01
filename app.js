const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));

app.engine("ejs", ejsMate);

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/roamly');
};

main().then(() => {
    console.log("Connected");
}).catch((err) => {
    console.log(err);
});

app.listen(3000, (req, res) => {
    console.log("App listening on port :- 3000");
});

app.get("/", (req, res) => {
    res.send("ok!");
});

// app.get("/testListing",async(req,res)=>{
//     let sampleListing= new Listing({
//         title:"My new villa",
//         description:"By the beach",
//         price:1200,
//         location:"Calangute,Goa",
//         country:"India"
//     });
//     await sampleListing.save();
//     console.log("Sample was saved to DB");
//     res.send("Success!!!");
// });


// Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

// New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Show Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const idList = await Listing.findById(id);
    // console.log(id);
    res.render("listings/show.ejs", { idList });
});

// Create Route
app.post("/listings", async (req, res) => {
    let newLisitng = new Listing(req.body.Listing);
    await newLisitng.save();
    res.redirect("/listings");
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

// Update Route
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.Listing });
    res.redirect(`/listings/${id}`);
});

// Delete route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});