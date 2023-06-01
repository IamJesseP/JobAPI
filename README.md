# JobAPI
A CRUD api with authentication written with Nodejs, Expressjs, and Mongodb.

**A live server with documentation of the API for this project can be found [here](https://jobs-api-jesse.herokuapp.com/)**

### Technologies
* HTML/CSS/JS
* NodeJS
* ExpressJS
* MongoDB
* Heroku

### Tools
* Visual Studio
* Git and GitHub
* Windows 11
* NPM
* Postman


## Functionality

### Registration 
* Validation for name, email, and password
* Password hashing with bcryptjs
* Save user in mongoDB
* Generate a Json Web Token(JWT)

### Login
* Validation for email and password
* Find User in mongoDB
* Authentication with comparePasswords
* Generate JWT with correct login

### A Create, Read, Update, Delete(CRUD) API for tracking jobs:
* All job routes require authentication
* CRUD process intregrates with mongoDB

### Error Handling
* Custom error handlers for validation, duplicates, and casting
* BadRequestERROR
* UnauthenticatedError

### Security Packages
* helmet
* cors
* xss-clean
* express-rate-limit

### Documentation created with Swagger UI


## What I learned

* Backend fundamenetals
* Working with a NoSQL database, connecting it to an application
* Working with authentication and JWT
* Setting up a RESTful API structure
* Improved understanding of CRUD API
* Improved understanding code structure and readability

### Academic
This application was created as part of the John Smilga [NodeJS](https://johnsmilga.com/) curriculum
