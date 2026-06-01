# 🏠 ApnaGhar

ApnaGhar is a full-stack real estate web application that enables users to discover, list, and manage properties seamlessly. Built with Node.js, Express.js, MongoDB, and EJS, the platform provides a secure and user-friendly experience for property buyers and sellers.

## 🚀 Features

* 🔐 Secure User Authentication & Authorization using Passport.js
* 🏡 Create, Update, and Delete Property Listings
* 📷 Property Image Uploads with Multer and Cloudinary
* 📍 Location-Based Property Listings using LocationIQ
* 🗺️ Interactive Property Location Display
* 👤 User-Specific Listing Management
* 📱 Responsive and User-Friendly Interface
* 🛡️ Input Validation and Error Handling
* ☁️ Cloud-Based Image Storage

## 🛠️ Tech Stack

### Frontend

* EJS
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* Passport.js
* Express Session

### File Upload & Storage

* Multer
* Cloudinary

### Location Services

* LocationIQ

### Version Control

* Git
* GitHub

## 📂 Project Structure

```plaintext
ApnaGhar/
│
├── controllers/      # Business Logic
├── init/             # Database Initialization Scripts
├── models/           # MongoDB Models
├── public/           # Static Assets (CSS, JS, Images)
├── routes/           # Application Routes
├── utils/            # Utility Functions & Middleware
├── views/            # EJS Templates
│
├── app.js            # Main Application Entry Point
├── .gitignore
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Buddha-18/ApnaGhar.git
cd ApnaGhar
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
MAP_TOKEN=your_locationiq_api_token
SECRET=your_secret_key
```

### Run the Application

nodemon app.js

### Open in Browser

```plaintext
http://localhost:8080
```

## 🎯 Key Features Implemented

* MVC Architecture
* RESTful Routing
* User Authentication & Sessions
* Cloud Image Management
* Geocoding with LocationIQ
* Form Validation
* CRUD Operations
* Error Handling Middleware

## 📚 What I Learned

* Full-Stack Web Development
* Authentication with Passport.js
* File Upload Handling with Multer
* Cloud Storage Integration using Cloudinary
* MongoDB Data Modeling
* Geolocation and Geocoding APIs
* MVC Project Architecture

## 🔮 Future Enhancements

* Advanced Property Search & Filtering
* Property Reviews and Ratings
* Real-Time Chat Between Buyers and Sellers
* Wishlist/Favorites System
* Admin Dashboard
* Property Recommendation Engine

## 👨‍💻 Author

**Budhyadeb Manna**

MERN Stack Developer passionate about building scalable, secure, and user-friendly web applications.

GitHub: https://github.com/Buddha-18
