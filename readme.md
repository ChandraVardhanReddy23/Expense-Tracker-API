# Expense Tracker API

A RESTful Expense Tracker API built with Node.js, Express.js, MongoDB, and JWT Authentication. Users can securely register, log in, and manage their personal expenses with filtering capabilities.

## Features

* User Registration
* User Login
* JWT Authentication
* Create Expense
* Get All User Expenses
* Filter Expenses

  * Past Week
  * Past Month
  * Last 3 Months
  * Custom Date Range
* Update Expense
* Delete Expense
* Protected Routes
* Password Hashing with bcrypt

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt
* dotenv

## Project Structure

```text
expense-tracker-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── expenseController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Expense.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── expenseRoutes.js
│   │
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd expense-tracker-api
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/expense_tracker
JWT_SECRET=your_jwt_secret
```

### Start MongoDB

```bash
mongod
```

### Run Server

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "User registered successfully"
}
```

---

#### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

## Authorization

For all protected routes include:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## Expense APIs

### Create Expense

```http
POST /api/expenses
```

Request Body:

```json
{
  "title": "Pizza",
  "amount": 500,
  "category": "Leisure",
  "date": "2026-06-20"
}
```

---

### Get All Expenses

```http
GET /api/expenses
```

---

### Filter Expenses

#### Past Week

```http
GET /api/expenses?filter=week
```

#### Past Month

```http
GET /api/expenses?filter=month
```

#### Last 3 Months

```http
GET /api/expenses?filter=3months
```

#### Custom Date Range

```http
GET /api/expenses?startDate=2026-01-01&endDate=2026-06-30
```

---

### Update Expense

```http
PUT /api/expenses/:id
```

Request Body:

```json
{
  "amount": 800
}
```

---

### Delete Expense

```http
DELETE /api/expenses/:id
```

---

## Expense Categories

Supported categories:

* Groceries
* Leisure
* Electronics
* Utilities
* Clothing
* Health
* Others

## Security Features

* Password hashing using bcrypt
* JWT-based authentication
* Protected routes
* User-specific expense access
* Ownership validation for update and delete operations

## Future Improvements

* Pagination
* Sorting
* Expense Search
* Category-wise Analytics
* Monthly Expense Reports
* Swagger API Documentation
* Unit Testing
* Docker Support
* Cloud Deployment

## Learning Outcomes

This project demonstrates:

* REST API Development
* Authentication & Authorization
* Middleware Usage
* MongoDB Data Modeling
* CRUD Operations
* Route Protection
* Error Handling
* Query Filtering
* Backend Project Structure

## Author

Chandra Vardhan Reddy

Built as part of the Backend Developer Roadmap.
https://roadmap.sh/projects/expense-tracker-api
