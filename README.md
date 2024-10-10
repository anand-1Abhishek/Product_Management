# Product Management API

This project provides a RESTful API for managing products using **Node.js**, **Express.js**, **Sequelize ORM**, and **MySQL**. The API allows users to create, update, delete, and fetch products with optional pagination and search functionality.

## Features
- Create, read, update, and delete (CRUD) products.
- Pagination for retrieving products.
- Search products by name or category.

---

## Technologies
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building APIs.
- **Sequelize ORM**: Object-relational mapping (ORM) for interacting with MySQL database.
- **MySQL**: Relational database management system.

---

## Setup Instructions

### 1. Prerequisites
Before setting up the project, ensure the following software is installed:
- **Node.js** (v12 or higher)
- **MySQL** (v5.7 or higher)

### 2. Clone the Repository and install dependencies

Clone the project repository to your local machine:
```bash
git clone https://github.com/anand-1Abhishek/Product_Management.git
cd product-management-api
npm install
```

### 3. Set Up MySQL Database

Create a MySQL database:

```sql
CREATE DATABASE product_management_db;
```
Open the config/config.json file and update the MySQL credentials in the development section:
```

{
  "development": {
    "username": "your_mysql_username",
    "password": "your_mysql_password",
    "database": "product_management_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
### 4. Run Database Migrations

To create the Products table in the database, run:

```sql
npx sequelize-cli db:migrate
```
### 5. Start the Application

Start the Node.js server using nodemon:

```sql
npm start
```


