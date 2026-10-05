const sampleListings = [
    {
        title: "Cozy Beach Cottage",
        description: "Escape to this charming cottage just steps away from the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
        },
        price: 1500,
        location: "Malibu",
        country: "US"
    },
    {
        title: "Modern Mountain Cabin",
        description: "A peaceful cabin surrounded by beautiful mountains and nature.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
        },
        price: 2200,
        location: "Aspen",
        country: "US"
    },
    {
        title: "Luxury City Apartment",
        description: "Stay in a stylish apartment located in the heart of the city.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
        },
        price: 3200,
        location: "New York",
        country: "US"
    },
    {
        title: "Peaceful Lake House",
        description: "Relax in this beautiful lake house with stunning water views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156"
        },
        price: 2800,
        location: "Lake Tahoe",
        country: "US"
    },
    {
        title: "Tropical Villa",
        description: "Enjoy a relaxing vacation in this beautiful tropical villa.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6"
        },
        price: 4500,
        location: "Maui",
        country: "US"
    },
    {
        title: "Rustic Forest Retreat",
        description: "A cozy retreat surrounded by trees, fresh air, and wildlife.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
        },
        price: 1800,
        location: "Portland",
        country: "US"
    },
    {
        title: "Elegant Paris Apartment",
        description: "Experience Paris from this elegant apartment near the city center.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        },
        price: 3500,
        location: "Paris",
        country: "France"
    },
    {
        title: "Seaside Luxury Villa",
        description: "A luxurious villa offering breathtaking ocean views and privacy.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
        },
        price: 5200,
        location: "Santorini",
        country: "Greece"
    },
    {
        title: "Downtown Loft",
        description: "A modern loft perfect for travelers who love city life.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9"
        },
        price: 2400,
        location: "Chicago",
        country: "US"
    },
    {
        title: "Desert Oasis",
        description: "Relax in a stylish desert home surrounded by beautiful landscapes.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
        },
        price: 1900,
        location: "Phoenix",
        country: "US"
    },
    {
        title: "Charming Countryside Home",
        description: "Enjoy a quiet stay in this charming countryside property.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
        },
        price: 1700,
        location: "Dublin",
        country: "Ireland"
    },
    {
        title: "Modern Beach House",
        description: "A bright and modern home with easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
        },
        price: 3900,
        location: "Miami",
        country: "US"
    },
    {
        title: "Cozy Winter Cabin",
        description: "Warm up beside the fireplace in this cozy winter cabin.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
        },
        price: 2100,
        location: "Whistler",
        country: "Canada"
    },
    {
        title: "Royal Palace Stay",
        description: "Experience luxury and traditional architecture in this stunning home.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
        },
        price: 3000,
        location: "Jaipur",
        country: "India"
    },
    {
        title: "Hilltop Retreat",
        description: "Wake up to breathtaking views from this peaceful hilltop home.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        },
        price: 1600,
        location: "Manali",
        country: "India"
    },
    {
        title: "Luxury Dubai Villa",
        description: "Stay in a luxurious villa with modern interiors and premium amenities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        },
        price: 4800,
        location: "Dubai",
        country: "UAE"
    },
    {
        title: "Traditional Bali Villa",
        description: "Enjoy a relaxing tropical getaway surrounded by nature.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
        },
        price: 2700,
        location: "Bali",
        country: "Indonesia"
    },
    {
        title: "London Townhouse",
        description: "A beautiful townhouse located close to London's major attractions.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
        },
        price: 3300,
        location: "London",
        country: "UK"
    },
    {
        title: "Lake View Apartment",
        description: "Enjoy peaceful mornings with beautiful views of the lake.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        },
        price: 2300,
        location: "Zurich",
        country: "Switzerland"
    },
    {
        title: "Forest Luxury Lodge",
        description: "A luxurious lodge offering privacy, comfort, and stunning forest views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
        },
        price: 3600,
        location: "Vancouver",
        country: "Canada"
    }
];

module.exports = sampleListings;