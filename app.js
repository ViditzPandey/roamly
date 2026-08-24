const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressErrors.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");

const listings=require("./routes/listing.js");

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

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

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => { el.message }).join(",")
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

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

app.use("/listings",listings);

//Reviews
//Post Route
app.post("/listings/:id/reviews", validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    // console.log("New Review Saved !!!");
    // res.send("New Review Saved!!!");
    res.redirect(`/listings/${listing._id}`);
}));

// Delete Review Route
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async(req, res)=> {
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));


app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found !"));
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong!" } = err;
    res.status(status).render("error.ejs", { message });
    // res.status(status).send(message);
});