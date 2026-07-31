# 🌍 Roamly

Roamly is a travel accommodation listing platform built from scratch. The goal of this project is to create a platform where users can explore, create, update, and manage accommodation listings with a smooth and intuitive experience.

This project is being developed as part of my **#100DaysOfCode challenge**, where I document my learning journey and build real-world applications step by step.

---

## 🚀 Current Progress

### Day 34/100

The backend foundation of Roamly has been successfully implemented.

### Completed Features:

✅ Express.js server setup  
✅ MongoDB database connection using Mongoose  
✅ Listing model creation  
✅ Complete CRUD operations for listings:

- 📖 View all listings
- ➕ Create new listings
- ✏️ Edit existing listings
- 🗑️ Delete listings

✅ Dynamic page rendering using EJS  
✅ Database seeding with sample listing data  
✅ RESTful routing structure

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- EJS (Embedded JavaScript Templates)
- HTML
- CSS (Upcoming improvements)

### Tools & Libraries
- Method Override (for PUT & DELETE requests)
- Nodemon (development workflow)

---

## 📂 Project Structure

```
Roamly/
│
├── models/
│   └── listing.js
│
├── views/
│   └── listings/
│       ├── index.ejs
│       ├── new.ejs
│       ├── show.ejs
│       └── edit.ejs
│
├── init/
│   ├── data.js
│   └── index.js
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run Roamly locally.

### 1. Clone the repository

```bash
git clone <your-github-repository-link>
```

### 2. Navigate into the project folder

```bash
cd Roamly
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running locally.

Default database:

```
mongodb://127.0.0.1:27017/roamly
```

### 5. Initialize sample data

Run:

```bash
node init/index.js
```

### 6. Start the application

For development:

```bash
node app.js
```

or with nodemon:

```bash
nodemon app.js
```

The application will run on:

```
http://localhost:3000
```

---

## 📸 Screenshots

Screenshots and demo videos will be added as the project UI evolves.

---

## 🗺️ Roadmap

Future improvements planned for Roamly:

- [ ] Improve UI/UX design
- [ ] Responsive design for mobile devices
- [ ] User authentication & authorization
- [ ] User profiles
- [ ] Image upload functionality
- [ ] Search and filtering system
- [ ] Reviews and ratings
- [ ] Booking functionality
- [ ] Additional features to enhance the travel experience

---

## 🤝 Contributions

Suggestions and feedback are always welcome.

If you have ideas that can improve Roamly, feel free to open an issue or share your thoughts.

---

## 👨‍💻 Developer

Built with ❤️ as part of my **#100DaysOfCode journey**.

Follow my progress as I continue building and improving Roamly.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub. It motivates me to keep building and learning.