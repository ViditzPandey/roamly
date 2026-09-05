🌍 Roamly

✨ About The Project

Roamly is a full-stack travel accommodation listing platform where users can explore, create, edit, and manage travel listings, share reviews and ratings, and interact with the application through session-based state and feedback messages.

The project is being developed as part of my 🚀 #100DaysOfCode journey, where I build real-world projects while continuously improving my full-stack development skills.

Roamly is built using the MEN Stack:

🍃 MongoDB
⚡ Express.js
🟢 Node.js

Frontend Technologies
🎨 EJS for server-side rendering
💻 HTML5 & CSS3
🎨 Bootstrap 5 for responsive UI
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

Roamly includes a complete review and rating system.

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


This creates a clean relationship between the Listing and Review collections.

🧩 Express Router

As Roamly grew, keeping all routes inside app.js became increasingly difficult to maintain.

To improve the backend structure, Express Router was introduced to separate listing and review routes into dedicated modules.

Before

Previously, listing and review routes were defined directly inside app.js:

app.get("/listings", ...)
app.post("/listings", ...)
app.put("/listings/:id", ...)
app.delete("/listings/:id", ...)

app.post("/listings/:id/reviews", ...)
app.delete("/listings/:id/reviews/:reviewId", ...)

After

Routes are now organized into separate modules using express.Router():

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


This allows app.js to focus on application configuration while route-specific functionality remains inside dedicated modules.

Benefits

Using Express Router makes the backend:

🧩 More modular
📖 Easier to understand
🛠️ Easier to maintain
🔄 Easier to extend
📂 Better organized as the application grows
🔐 Sessions & Session Management

As Roamly moves toward authentication and user-specific functionality, the application now includes session management using express-session.

Sessions allow the server to maintain information between multiple HTTP requests.

What I learned
🔐 What sessions are
🔄 How session data persists across requests
📦 How to store information in a session
📖 How to retrieve and use session information
⚙️ Session configuration and options
🍪 How cookies are used with sessions
Express Session

Roamly now uses express-session to create and manage sessions.

A simplified configuration looks like:

app.use(session({
    secret: "your-secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        // session cookie options
    }
}));


The session can then be accessed through the request:

req.session.someData = "value";


And retrieved in another request:

const data = req.session.someData;


This introduced an important backend concept:

HTTP requests are independent by default, but sessions allow an application to maintain state across requests.

🍪 Session Cookies

Sessions work together with cookies to identify the browser's session.

Roamly now explores session cookie configuration through the cookie option provided by express-session.

This helped me understand the relationship between:

Browser
   ↓
Cookie
   ↓
Session Identifier
   ↓
Server
   ↓
Session Data


Understanding cookies and sessions is an important step toward implementing authentication and authorization.

💬 Flash Messages

Roamly now uses connect-flash to provide temporary success and failure messages to users.

Flash messages are useful when an action needs to communicate a result after a request.

For example:

Create Listing
      ↓
Server processes request
      ↓
Flash message stored
      ↓
Redirect
      ↓
Message displayed to user

Implemented
✅ Success flash messages
❌ Failure/error flash messages
🔄 Temporary messages across requests
📢 User feedback after actions

This makes interactions such as creating, editing, or deleting resources more informative for the user.

🌐 Using res.locals

Roamly also uses Express res.locals to make commonly required data available to EJS templates.

This is particularly useful for displaying flash messages across views.

For example:

res.locals.success = req.flash("success");
res.locals.error = req.flash("error");


The data can then be accessed directly inside EJS templates.

This helped me understand another useful Express concept:

Middleware can prepare data before the request reaches the view.

🔄 Session + Flash + res.locals Flow

The concepts learned on Day 42 connect together:

User Action
     ↓
Express Route
     ↓
Session / Flash Data
     ↓
Middleware
     ↓
res.locals
     ↓
EJS View
     ↓
User Feedback


This is a small but important step toward building more interactive and user-aware applications.

📅 Day 42 Progress
Backend Development
✅ Express.js server setup
✅ MongoDB connection
✅ Mongoose Listing model
✅ Mongoose Review model
✅ Complete Listing CRUD functionality
✅ Review creation
✅ Review deletion
✅ Listing–Review relationship
✅ Mongoose populate()
✅ Automatic review cleanup
✅ RESTful routes
✅ Database seeding
✅ MVC architecture
✅ Express Router
✅ Modular listing routes
✅ Modular review routes
✅ Cookies
✅ Express Sessions
✅ Session configuration
✅ Session cookies
✅ Storing and retrieving session data
✅ Flash messages
✅ Success & failure flash messages
✅ res.locals
Frontend Development
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
✅ Flash message display
Validation & Error Handling
✅ Client-side form validation
✅ Server-side validation using Joi
✅ Listing validation middleware
✅ Review validation middleware
✅ Custom Express error class
✅ Centralized async error handling
✅ wrapAsync utility
✅ Dedicated error page
✅ 404 handling
✅ Success and failure user feedback
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

Through building Roamly, I have learned and implemented:

🚀 Express.js routing
🧩 Express Router
🏗️ MVC architecture
🔄 CRUD operations
🍃 MongoDB & Mongoose
🔗 MongoDB document relationships
🔍 Mongoose populate()
🧹 Middleware-based document cleanup
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
🍪 Cookies
🔐 Sessions
⚙️ Session configuration
💬 Flash messages
🌐 res.locals
🐙 Git & GitHub workflow
🚀 100 Days of Code Progress
🔥 Day 42/100

Current Milestone: Sessions, Flash Messages & Request State Management 🔐

Progress
█████████████████░░░░░░░░░░░░░░░░░░░░░ 42%


42 days completed — 58 days remaining.

The goal is to continue transforming Roamly into a complete, production-style travel accommodation platform while continuously strengthening my full-stack development skills.

🔜 What's Next?

The next major milestone is moving from session management toward actual user functionality.

🔐 User Authentication
👤 User Registration & Login
🛡️ Authorization
🏠 User-owned Listings
☁️ Image Uploads
🔎 Search & Filters
🗺️ Maps Integration
⭐ Further UI improvements
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
