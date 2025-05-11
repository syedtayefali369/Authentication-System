# Authentication-System
# User Authentication System (Node.js + Express + MongoDB)

A simple user authentication system using Node.js, Express, MongoDB, JWT, and bcrypt.

---

## 🚀 Features

* User Registration
* User Login
* Password Hashing with bcrypt
* JWT Authentication
* Protected Routes

---

## 🗂️ Project Structure

```
auth-system/
├── config/
│   └── db.js                # MongoDB connection setup
├── controllers/
│   └── authController.js     # Authentication logic (register, login)
├── middleware/
│   └── authMiddleware.js     # Middleware to protect routes (JWT verification)
├── models/
│   └── User.js              # User schema and model
├── routes/
│   └── authRoutes.js        # API routes for authentication (register, login)
├── .env                      # Environment variables (DB URI, JWT secret)
├── server.js                 # Entry point of the app
├── package.json              # Dependencies and scripts
```

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT**
* **bcryptjs**
* **dotenv**

---

## ⚙️ Setup Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/auth-system.git
cd auth-system
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Run the server:

```bash
npm run dev
```

If not using nodemon:

```bash
node server.js
```

---

## 🧪 API Endpoints

### ➕ Register

**POST** `/api/auth/register`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### 🔐 Login

**POST** `/api/auth/login`

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### 🔒 Protected Route Example (Optional)

Include this in headers:

```
Authorization: Bearer <your_jwt_token>
```

---

## 📝 License

This project is open-source and available under the MIT License.
