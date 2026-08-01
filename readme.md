# 🌍 Roamly

Roamly is a full-stack travel accommodation listing platform inspired by Airbnb, where users can explore, create, edit, and manage travel listings. The project is built from scratch using the **MEN Stack (MongoDB, Express.js, Node.js)** with **EJS** for server-side rendering and **Bootstrap** for a responsive user interface.

This project is part of my **#100DaysOfCode** journey, where I build real-world projects while improving my full-stack development skills.

---

# ✨ Features

### 🏠 Listing Management

* 📖 View all travel accommodation listings
* ➕ Create new listings
* ✏️ Edit existing listings
* 🗑️ Delete listings
* 👀 View complete details of each listing

### 🎨 User Interface

* Responsive Bootstrap layout
* Modern listing cards
* Attractive navbar with branding
* Clean footer with social links
* Beautiful forms for creating and editing listings
* Responsive grid layout for listings
* Hover effects on listing cards
* Consistent styling using custom CSS

### ⚡ Backend

* RESTful routing
* Express.js server
* MongoDB integration with Mongoose
* Dynamic EJS templating
* Method Override for PUT & DELETE requests
* Sample database seeding

---

# 🚀 Current Progress

### ✅ Completed

* Express.js server setup
* MongoDB connection
* Mongoose Listing model
* Complete CRUD functionality
* Dynamic EJS rendering
* RESTful routes
* Bootstrap-based responsive UI
* Home page with listing cards
* Listing Details page
* Create Listing page
* Edit Listing page
* Delete Listing functionality
* Custom Navbar & Footer
* Custom CSS styling
* Database seeding with sample data

---

# 🛠️ Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Frontend

* EJS
* HTML5
* CSS3
* Bootstrap 5
* Font Awesome
* Google Fonts (Plus Jakarta Sans)

## Tools

* Nodemon
* Method Override
* Git & GitHub

---

# 📂 Project Structure

```text
Roamly/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   └── listing.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── (other static assets)
│
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   ├── includes/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   └── listings/
│       ├── index.ejs
│       ├── new.ejs
│       ├── show.ejs
│       └── edit.ejs
│
├── app.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/roamly.git
```

### 2. Navigate into the Project

```bash
cd roamly
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running locally.

Default database:

```text
mongodb://127.0.0.1:27017/roamly
```

### 5. Seed the Database

```bash
node init/index.js
```

### 6. Run the Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

Open your browser and visit:

```text
http://localhost:3000/listings
```

---

# 📸 Screenshots

### 🏠 Home Page

> Displays all listings in a responsive card layout.

### ➕ Create Listing

> Add a new travel accommodation listing.

### 👀 Listing Details

> View detailed information about a selected listing.

### ✏️ Edit Listing

> Update an existing listing.

*(Screenshots will be added soon.)*

---

# 🗺️ Upcoming Features

* User Authentication (Login & Signup)
* Authorization
* Image Upload (Cloudinary)
* Form Validation
* Flash Messages
* Reviews & Ratings
* Search Functionality
* Filters by Category
* Booking System
* Maps Integration
* Responsive Mobile UI Improvements
* Dark Mode

---

# 📚 Learning Outcomes

Through this project, I have learned:

* Express.js routing
* RESTful API design
* CRUD operations
* MongoDB & Mongoose
* Server-side rendering with EJS
* Bootstrap responsive layouts
* MVC project structure
* Dynamic templates
* Database seeding
* Git & GitHub workflow

---

# 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

If you'd like to improve Roamly, feel free to fork the repository, create a feature branch, and submit a pull request.

---

# 👨‍💻 Developer

Developed with ❤️ by **Anurag** as part of the **#100DaysOfCode** challenge.

Building one project at a time while learning full-stack web development.

---

# ⭐ Show Your Support

If you like this project, consider giving it a **⭐ on GitHub**. Your support helps motivate me to continue building and improving Roamly.
