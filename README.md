# Backend Project 3 - Secure Authentication System
This project is built using Node.js, Express.js, MongoDB, and JWT as part of Backend Development Project 3.

## Features
- User registration with bcrypt password hashing
- User login with JWT token generation
- Protected routes using JWT middleware
- MongoDB Atlas cloud database connection
- Proper HTTP status codes
- Postman API testing

---

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- jsonwebtoken (JWT)
- dotenv
- Postman
- Git & GitHub

---

## Installation
Clone the repository:
```bash
git clone https://github.com/hetpatoliya0206/backend-project-3.git
```
Move into project folder:
```bash
cd backend-project-3
```
Install dependencies:
```bash
npm install
```
Create `.env` file:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_jwt_secret_key
```
Start server:
```bash
npm run dev
```

---

## Server Runs On
```bash
http://localhost:3000
```

---

## API Endpoints

### Home Route
```http
GET /
```

### Register User
```http
POST /api/auth/register
```
Example Request Body:
```json
{
  "name": "Het Patoliya",
  "email": "het@test.com",
  "password": "het123"
}
```

### Login User
```http
POST /api/auth/login
```
Example Request Body:
```json
{
  "email": "het@test.com",
  "password": "het123"
}
```

### Get Profile (Protected)
```http
GET /api/auth/profile
```
Required Header:
