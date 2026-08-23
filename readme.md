# 🌍 Roamly

## ✨ About The Project

Roamly is a **full-stack travel accommodation listing platform** where users can explore, create, edit, and manage travel listings and share reviews and ratings.

The project is built using the **MEN Stack**:

* 🍃 **MongoDB**
* ⚡ **Express.js**
* 🟢 **Node.js**

Frontend technologies used:

* 🎨 **EJS** for server-side rendering
* 💻 **HTML5 & CSS3**
* 🎨 **Bootstrap 5** for responsive UI

This project is part of my **🚀 #100DaysOfCode journey**, where I build real-world projects while improving my full-stack development skills.

---

# ✨ Features

## 🏠 Listing Management

* 📖 View all travel accommodation listings
* ➕ Create new listings
* ✏️ Edit existing listings
* 🗑️ Delete listings
* 👀 View complete listing details
* 🖼️ Listing image support
* 💰 Display listing prices
* 📍 Display location and country

---

## ⭐ Reviews & Ratings

Roamly now includes a complete review system.

* ⭐ Add ratings from 1–5
* 💬 Add comments to listings
* 📋 Display all reviews for a listing
* 🗑️ Delete reviews
* 🔗 Connect reviews with listings using MongoDB ObjectId references
* 🔍 Populate reviews using Mongoose `populate()`
* 🧹 Automatically delete associated reviews when a listing is deleted

### Review Model

Reviews are stored separately from listings and connected through references:

```js
reviews: [{
    type: Schema.Types.ObjectId,
    ref: "Review"
}]
```

This provides a clean relationship between the `Listing` and `Review` collections.

---

## 🛡️ Validation & Error Handling

Implemented a validation and error-handling system:

* ✅ Client-side form validation
* ✅ Server-side schema validation using **Joi**
* ✅ Listing validation middleware
* ✅ Review validation middleware
* ✅ Custom `ExpressError` class
* ✅ Centralized async error handling using `wrapAsync`
* ✅ Custom Express error middleware
* ✅ Dedicated error page (`error.ejs`)

---

## 🎨 User Interface

* 📱 Responsive Bootstrap layout
* 🏠 Listing cards
* 🧭 Navigation bar
* 🔻 Footer with social links
* 📝 Create & edit forms
* ⭐ Review submission form
* 💬 Review cards
* 🖼️ Responsive grid layout
* ✨ Hover effects
* 🎨 Custom CSS styling

---

# 🚀 Current Progress

## 📅 Day 40/100 — #100DaysOfCode

### ✅ Backend Development

* ✅ Express.js server setup
* ✅ MongoDB connection
* ✅ Mongoose Listing model
* ✅ Mongoose Review model
* ✅ Complete Listing CRUD functionality
* ✅ Review creation
* ✅ Review deletion
* ✅ Listing–Review relationship
* ✅ Mongoose `populate()`
* ✅ Automatic review cleanup when deleting listings
* ✅ RESTful routes
* ✅ Database seeding
* ✅ MVC architecture

---

### ✅ Frontend Development

* ✅ EJS templates
* ✅ Bootstrap responsive UI
* ✅ Home page with listing cards
* ✅ Listing details page
* ✅ Create listing page
* ✅ Edit listing page
* ✅ Delete listing functionality
* ✅ Custom Navbar & Footer
* ✅ Custom CSS styling
* ✅ Leave a Review form
* ✅ Reviews display section
* ✅ Review delete button

---

### ✅ Validation & Error Handling

* ✅ Client-side form validation
* ✅ Server-side validation using Joi
* ✅ Listing validation middleware
* ✅ Review validation middleware
* ✅ Custom Express error class
* ✅ Centralized async error handling
* ✅ `wrapAsync` utility
* ✅ Dedicated error page
* ✅ 404 handling

---

# 🛠️ Tech Stack

## 🔙 Backend

* 🟢 Node.js
* ⚡ Express.js
* 🍃 MongoDB
* 📦 Mongoose
* ✅ Joi

---

## 🎨 Frontend

* 📄 EJS
* 🌐 HTML5
* 🎨 CSS3
* 🖌️ Bootstrap 5
* ⭐ Font Awesome
* 🔤 Google Fonts — Plus Jakarta Sans

---

## 🧰 Tools

* 🔥 Nodemon
* 🔄 Method Override
* 🐙 Git
* 🐙 GitHub
* 💻 VS Code

---

# 📂 Project Structure

```text
Roamly/
│
├── init/
│   └── index.js
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
```

---

# 🔗 Review Routes

Roamly currently supports the following review operations:

### Create Review

```text
POST /listings/:id/reviews
```

### Delete Review

```text
DELETE /listings/:id/reviews/:reviewId
```

### View Listing With Reviews

```text
GET /listings/:id
```

Reviews are populated using:

```js
Listing.findById(id).populate("reviews");
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/roamly.git
```

---

## 2️⃣ Navigate Into Project

```bash
cd roamly
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Start MongoDB

Make sure MongoDB is running.

Database:

```text
mongodb://127.0.0.1:27017/roamly
```

---

## 5️⃣ Seed Database

```bash
node init/index.js
```

---

## 6️⃣ Run Application

```bash
nodemon app.js
```

Application will run at:

```text
http://localhost:3000/listings
```

---

# 📸 Screenshots

Screenshots and demo GIFs will be added as development progresses.

---

# 🗺️ Upcoming Features

Future improvements planned:

* 🔐 User Authentication — Login & Signup
* 🛡️ Authorization
* 👤 User accounts
* 🏷️ User-specific reviews
* 💬 Flash Messages
* ☁️ Image Upload with Cloudinary
* 🔍 Search Functionality
* 🏷️ Filters
* 🗺️ Maps Integration
* 📅 Booking System
* 📱 Responsive mobile improvements
* 🌙 Dark Mode

---

# 📚 Learning Outcomes

Through this project, I have learned:

* 🚀 Express.js routing
* 🏗️ MVC architecture
* 🔄 CRUD operations
* 🍃 MongoDB & Mongoose
* 🔗 MongoDB document relationships
* 🔍 Mongoose `populate()`
* 🧹 Middleware for cascading document cleanup
* 🔗 RESTful application design
* 📄 EJS templating
* 🎨 Bootstrap UI development
* ⭐ Review & rating implementation
* ✅ Joi schema validation
* 🛡️ Client-side validation
* 🧩 Express middleware
* ⚡ Centralized async error handling
* ❌ Custom error classes
* 🐞 Error debugging
* 🐙 Git & GitHub workflow

---

# 📈 100 Days of Code Progress

## 🔥 Day 40/100

**Current milestone:** Reviews & Ratings implemented ⭐

### Progress

```text
████████████████░░░░░░░░░░░░░░░░░░░░░░ 40%
```

**40 days completed — 60 days remaining.**

The goal is to continue transforming Roamly into a complete, production-style travel accommodation platform while strengthening full-stack development skills.

---

# 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

If you want to improve Roamly:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch
3. ✨ Make your changes
4. 🚀 Submit a pull request

---

# 👨‍💻 Developer

Developed with ❤️ by **Vidit** as part of the **#100DaysOfCode** challenge.

> Building one project at a time while learning full-stack web development.

---

# ⭐ Show Your Support

If you like this project, consider giving it a **⭐ on GitHub**.

Your support motivates me to keep learning, building, and improving Roamly 🚀
