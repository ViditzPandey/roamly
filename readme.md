🌍 Roamly
✨ About The Project

Roamly is a full-stack travel accommodation listing platform where users can explore, create, edit, and manage travel listings and share reviews and ratings.

The project is built using the MEN Stack:

🍃 MongoDB
⚡ Express.js
🟢 Node.js

Frontend technologies used:

🎨 EJS for server-side rendering
💻 HTML5 & CSS3
🎨 Bootstrap 5 for responsive UI

This project is part of my 🚀 #100DaysOfCode journey, where I build real-world projects while improving my full-stack development skills.

✨ Features
🏠 Listing Management
📖 View all travel accommodation listings
➕ Create new listings
✏️ Edit existing listings
🗑️ Delete listings
👀 View complete listing details
🖼️ Listing image support
💰 Display listing prices
📍 Display location and country
🛣️ Modular listing routes using Express Router
⭐ Reviews & Ratings

Roamly includes a complete review system.

⭐ Add ratings from 1–5
💬 Add comments to listings
📋 Display all reviews for a listing
🗑️ Delete reviews
🔗 Connect reviews with listings using MongoDB ObjectId references
🔍 Populate reviews using Mongoose populate()
🧹 Automatically delete associated reviews when a listing is deleted
🛣️ Modular review routes using Express Router
Review Model

Reviews are stored separately from listings and connected through references:

reviews: [{
    type: Schema.Types.ObjectId,
    ref: "Review"
}]


This provides a clean relationship between the Listing and Review collections.

🧩 Express Router

As the application grew, keeping all routes inside app.js started making the backend harder to manage.

To improve the structure of Roamly, I introduced Express Router and separated listing and review routes into their own route modules.

Before

Previously, listing and review routes were defined directly inside app.js:

app.get("/listings", ...)
app.post("/listings", ...)
app.put("/listings/:id", ...)
app.delete("/listings/:id", ...)

app.post("/listings/:id/reviews", ...)
app.delete("/listings/:id/reviews/:reviewId", ...)


As more functionality was added, this approach made app.js increasingly large.

After

Routes are now organized into separate modules using express.Router().

For example:

const express = require("express");
const router = express.Router();

router.get("/", ...)
router.post("/", ...)
router.get("/:id", ...)
router.put("/:id", ...)
router.delete("/:id", ...);

module.exports = router;


The routers are then mounted in app.js:

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);


This allows app.js to focus on configuring the application while route-specific logic is kept inside dedicated modules.

📂 Updated Route Structure
Roamly/
│
├── routes/
│   ├── listing.js
│   └── review.js
│
├── models/
│   ├── listing.js
│   └── review.js
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   ├── wrapAsync.js
│   └── ExpressErrors.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── error.ejs
│
├── schema.js
├── app.js
├── package.json
└── README.md

🎯 Why Express Router?

Using Express Router makes the backend:

🧩 More modular
📖 Easier to read
🛠️ Easier to maintain
🔄 Easier to extend
📂 Better organized as the application grows

This restructuring is an important step toward making Roamly's backend architecture more scalable and closer to how larger Express applications are structured.

🚀 Current Progress
📅 Day 41/100 — #100DaysOfCode
✅ Backend Development
✅ Express.js server setup
✅ MongoDB connection
✅ Mongoose Listing model
✅ Mongoose Review model
✅ Complete Listing CRUD functionality
✅ Review creation
✅ Review deletion
✅ Listing–Review relationship
✅ Mongoose populate()
✅ Automatic review cleanup when deleting listings
✅ RESTful routes
✅ Database seeding
✅ MVC architecture
✅ Express Router for modular route organization
✅ Separated listing routes from review routes
✅ Frontend Development
✅ EJS templates
✅ Bootstrap responsive UI
✅ Home page with listing cards
✅ Listing details page
✅ Create listing page
✅ Edit listing page
✅ Delete listing functionality
✅ Custom Navbar & Footer
✅ Custom CSS styling
✅ Leave a Review form
✅ Reviews display section
✅ Review delete button
✅ Validation & Error Handling
✅ Client-side form validation
✅ Server-side validation using Joi
✅ Listing validation middleware
✅ Review validation middleware
✅ Custom Express error class
✅ Centralized async error handling
✅ wrapAsync utility
✅ Dedicated error page
✅ 404 handling
📂 Project Structure
Roamly/
│
├── init/
│   └── index.js
│
├── models/
│   ├── listing.js
│   └── review.js
│
├── routes/
│   ├── listing.js
│   └── review.js
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   ├── wrapAsync.js
│   └── ExpressErrors.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   │
│   └── error.ejs
│
├── schema.js
├── app.js
├── package.json
└── README.md

📚 Learning Outcomes

Through this project, I have learned:

🚀 Express.js routing
🧩 Express Router and modular route organization
🏗️ MVC architecture
🔄 CRUD operations
🍃 MongoDB & Mongoose
🔗 MongoDB document relationships
🔍 Mongoose populate()
🧹 Middleware for cascading document cleanup
🔗 RESTful application design
📄 EJS templating
🎨 Bootstrap UI development
⭐ Review & rating implementation
✅ Joi schema validation
🛡️ Client-side validation
🧩 Express middleware
⚡ Centralized async error handling
❌ Custom error classes
🐞 Error debugging
🐙 Git & GitHub workflow
📈 100 Days of Code Progress
🔥 Day 41/100

Current milestone: Express Router & Backend Restructuring 🧩

Progress
████████████████░░░░░░░░░░░░░░░░░░░░░░ 41%


41 days completed — 59 days remaining.

The goal is to continue transforming Roamly into a complete, production-style travel accommodation platform while continuously strengthening my full-stack development skills.

🤝 Contributing

Contributions, suggestions, and feedback are always welcome!

If you'd like to contribute to Roamly:

🍴 Fork the repository
🌿 Create a feature branch
✨ Make your changes
🚀 Submit a pull request

Whether it's a bug fix, improvement, or new idea, your contribution is appreciated.

👨‍💻 Developer

Developed with ❤️ by Vidit as part of the #100DaysOfCode challenge.

Building one project at a time, learning from every challenge, and continuously improving my full-stack development skills.

⭐ Show Your Support

If you find Roamly interesting or useful, consider giving the repository a ⭐ on GitHub.

Your support motivates me to keep learning, building, and improving Roamly. 🚀