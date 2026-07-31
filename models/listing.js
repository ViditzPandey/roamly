const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default:"https://unsplash.com/photos/a-house-on-the-beach-with-palm-trees-in-the-background-0uq8ZY9jyQo",
        set: (v) => v === "" ? "https://unsplash.com/photos/a-house-on-the-beach-with-palm-trees-in-the-background-0uq8ZY9jyQo" : v
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;