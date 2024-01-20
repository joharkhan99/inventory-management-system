# Inventory Management System

A very basic app for Inventory Management system. Fors frontend I have used React with Redux Toolkit. For backend I have used Node JS, Express and Sequelize for MYSQL. Sequelize is npm package that helps in creating Schemas for MYSQL database just like Mongoose for mongodb or like laravel has its own ORM. So it is very helpful and powerful for creating models and relations and its helps us avoid the usage of Raw SQL Queries. WHich can be complex sometimes.

## Installation Guidelines

- clone this repo into your local machine

### Backend

- cd into the cloned repo on your machine using `cd backend`
- run `npm i` to install all the dependencies
- create a new file `.env` and copy paste the content from `.env.example`
- replace the content in `.env` file with your own
- make sure the database mentioned in `.env` file exists on your local
- Create Models/Tables
  - run below commands one by one sequentially to add Tables to your database
    - `node .\models\Category.model.js`
    - `node .\models\Supplier.model.js`
    - `node .\models\Product.model.js`
- finally run `npm run dev` to start the backend server

### Frontend

- cd into the cloned repo on your machine using `cd frontend`
- run `npm i` to install dependencies
- finally run `npm start` to start your frotnend app
