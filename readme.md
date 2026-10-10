# 🌍 Roamly

A full-stack travel accommodation platform built with the **MEN Stack** (MongoDB, Express.js, and Node.js), with EJS for server-side rendering. Roamly allows users to explore accommodation listings, manage their own properties, share reviews, and discover property locations on an interactive map.

## 🛠️ Tech Stack

- 🍃 **MongoDB** — Database
- ⚡ **Express.js** — Backend web framework
- 🟢 **Node.js** — JavaScript runtime
- 🎨 **EJS** — Server-side templating
- 🖌️ **Bootstrap 5** — Responsive UI
- 🔐 **Passport.js** — Authentication
- 🗺️ **Map Integration** — Geocoding, coordinates, map markers, and popups
- ☁️ **Cloudinary** — Image storage and management

## ✨ Features

### 🏠 Listings Management
- Create, view, edit, and delete accommodation listings
- Upload and display listing images
- Store listing details in MongoDB
- Display property locations on an interactive map

### 🗺️ Interactive Maps
- Geocoding to convert location information into geographical coordinates
- Store latitude and longitude coordinates for listings
- Display map markers for property locations
- Interactive map popups to show listing information

### 👤 Authentication & Authorization
- User signup and login
- Passport.js local authentication
- Password hashing and salting
- Session and cookie management
- Authorization for protected routes and listing operations

### ⭐ Reviews & Ratings
- Create and manage reviews
- 1–5 star ratings
- Associate reviews with users and listings
- Protect review operations with authorization

### 🛡️ Backend & Validation
- Joi schema validation
- Centralized error handling
- Flash messages for user feedback
- Modular Express Router
- MVC architecture
- RESTful routing
- MongoDB relationships using Mongoose

### 📱 User Interface
- Responsive design using Bootstrap 5
- Dynamic EJS templates
- Interactive listing pages
- Map-based property discovery

## 🔐 Authentication Flow

```text
Signup / Login
      ↓
Password Verification
      ↓
Passport.js Authentication
      ↓
Session Creation
      ↓
User Authentication
      ↓
Authorization Checks
      ↓
Protected Routes
```

## 🗺️ Map Integration Flow

```text
Listing Location
      ↓
Geocoding
      ↓
Latitude & Longitude
      ↓
Store Coordinates in MongoDB
      ↓
Display Interactive Map
      ↓
Map Marker & Popup
```

## 📂 Project Structure

```text
Roamly/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── init/
├── app.js
├── schema.js
└── package.json
```

## 🚀 Learning Journey

Roamly is a hands-on project built to strengthen my full-stack development skills by implementing real-world web application features.

## 👨‍💻 Developer

**Vidit Pandey**

Built with ❤️ while learning and building through **#100DaysOfCode**.

⭐ If you like Roamly, consider giving the repository a star!

---
