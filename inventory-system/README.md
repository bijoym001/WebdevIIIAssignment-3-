# Inventory & Data Management System

A RESTful backend API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** to manage a store's product catalogue. This project was developed as part of the Web Dev III Lab (Unit 3) assignment.

## 🚀 Features

- **Complete CRUD Operations** for products
- **Schema Validation** with Mongoose (field-level constraints)
- **Advanced Querying**: Filtering, Sorting, and Pagination
- **Stock Management**: Safe increment/decrement endpoints
- **Aggregation Pipelines**: Low-stock alerts and category-wise inventory summaries
- **MVC Architecture**: Clean separation of Models, Views (Routes/Controllers), and logic
- **Centralized Error Handling**: Consistent API error responses
- **Environment Configuration**: Secure variable management via `dotenv`

## 📁 Project Structure

```text
inventory-system/
├── config/
│   └── db.js                  # MongoDB connection logic
├── controllers/
│   └── productController.js   # Business logic for all endpoints
├── middleware/
│   └── errorHandler.js        # Centralized error handling
├── models/
│   └── Product.js             # Mongoose schema & virtuals
├── routes/
│   └── productRoutes.js       # API route definitions
├── post-man-ss/               # Images for documentation
├── .env                       # Environment variables (not pushed to git)
├── server.js                  # Application entry point
└── package.json               # Dependencies & scripts


