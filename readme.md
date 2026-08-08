# 🌍 Roamly

## ✨ About The Project

Roamly is a **full-stack travel accommodation listing platform** where users can explore, create, edit, and manage travel listings.

The project is built using the **MEN Stack**:

- 🍃 **MongoDB**
- ⚡ **Express.js**
- 🟢 **Node.js**

Frontend technologies used:

- 🎨 **EJS** for server-side rendering
- 💻 **HTML5 & CSS3**
- 🎨 **Bootstrap 5** for responsive UI

This project is part of my **🚀 #100DaysOfCode journey**, where I build real-world projects while improving my full-stack development skills.

---

# ✨ Features

## 🏠 Listing Management

- 📖 View all travel accommodation listings
- ➕ Create new listings
- ✏️ Edit existing listings
- 🗑️ Delete listings
- 👀 View complete details of each listing

---

## 🛡️ Validation & Error Handling

Implemented a complete validation and error-handling system:

- ✅ Client-side form validation
- ✅ Server-side schema validation using **Joi**
- ✅ Validation middleware for routes
- ✅ Custom `ExpressError` class
- ✅ Centralized async error handling using `wrapAsync`
- ✅ Custom Express error middleware
- ✅ Dedicated error page (`error.ejs`)
- ✅ Success & failure feedback messages
- ✅ Cleaner and maintainable error management

---

## 🎨 User Interface

- 📱 Responsive Bootstrap layout
- 🏠 Modern listing cards
- 🧭 Attractive navigation bar
- 🔻 Clean footer with social links
- 📝 Beautiful create & edit forms
- 🖼️ Responsive grid layout
- ✨ Hover effects on listing cards
- 🎨 Custom CSS styling

---

## ⚡ Backend Features

- 🔗 RESTful routing
- 🚀 Express.js server
- 🍃 MongoDB integration with Mongoose
- 📄 Dynamic EJS templating
- 🔄 Method Override for PUT & DELETE requests
- 🌱 Database seeding
- 🧩 Modular middleware architecture

---

# 🚀 Current Progress

## ✅ Completed Features

### ⚡ Backend Development

- ✅ Express.js server setup
- ✅ MongoDB connection
- ✅ Mongoose Listing model
- ✅ Complete CRUD functionality
- ✅ RESTful routes
- ✅ Database seeding
- ✅ MVC architecture implementation

---

### 🎨 Frontend Development

- ✅ EJS templates
- ✅ Bootstrap responsive UI
- ✅ Home page with listing cards
- ✅ Listing details page
- ✅ Create listing page
- ✅ Edit listing page
- ✅ Delete listing functionality
- ✅ Custom Navbar & Footer
- ✅ Custom CSS styling

---

### 🛡️ Validation & Error Handling

- ✅ Client-side form validation
- ✅ Server-side schema validation using Joi
- ✅ Validation middleware
- ✅ Custom Express error class
- ✅ Centralized async error handling (`wrapAsync`)
- ✅ Dedicated error page (`error.ejs`)
- ✅ Success & failure message handling

---

# 🛠️ Tech Stack

## 🔙 Backend

- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB
- 📦 Mongoose
- ✅ Joi

---

## 🎨 Frontend

- 📄 EJS
- 🌐 HTML5
- 🎨 CSS3
- 🖌️ Bootstrap 5
- ⭐ Font Awesome
- 🔤 Google Fonts (Plus Jakarta Sans)

---

## 🧰 Tools

- 🔥 Nodemon
- 🔄 Method Override
- 🐙 Git
- 🐙 GitHub
- 💻 VS Code

---

# 📂 Project Structure

```
Roamly/
│
├── init/
│   └── index.js
│
├── models/
│   └── listing.js
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

```
http://localhost:3000/listings
```

---

# 📸 Screenshots

Screenshots and demo GIFs will be added as development progresses.

---

# 🗺️ Upcoming Features

Future improvements planned:

- 🔐 User Authentication (Login & Signup)
- 🛡️ Authorization
- 💬 Flash Messages
- ☁️ Image Upload with Cloudinary
- ⭐ Reviews & Ratings
- 🔍 Search Functionality
- 🏷️ Filters
- 🗺️ Maps Integration
- 📅 Booking System
- 📱 Responsive Mobile Improvements
- 🌙 Dark Mode

---

# 📚 Learning Outcomes

Through this project, I have learned:

- 🚀 Express.js routing
- 🏗️ MVC architecture
- 🔄 CRUD operations
- 🍃 MongoDB & Mongoose
- 🔗 RESTful application design
- 📄 EJS templating
- 🎨 Bootstrap UI development
- ✅ Joi schema validation
- 🛡️ Client-side validation
- 🧩 Express middleware
- ⚡ Centralized async error handling
- ❌ Custom error classes
- 🐞 Error debugging
- 🐙 Git & GitHub workflow

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

If you like this project, consider giving it a **⭐ on GitHub**. Your support helps motivate me to continue building and improving Roamly.

Your support motivates me to keep learning, building, and improving Roamly 🚀
