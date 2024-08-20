# FSD-BE_URL
# Table of Contents
*   [Controllers](#controllers)
*   [Middleware](#middleware)
*   [Routers](#routers)
*   [Database](#database)
*   [Models](#models)
### User Controller (`user.controller.js`)

*   `createUser(req, res)`: Creates a new user.
*   `getUserAll(req, res)`: Retrieves all users.
*   `getUserById(req, res)`: Retrieves a user by ID.
*   `userLogin(req, res)`: Authenticates user login.
*   `verifyEmail(req, res)`: Verifies email and sends a verification mail.
*   `resetPassword(req, res)`: Resets user password.
*   `logOut(req, res)`: Logs out the user.

### URL Controller (`url.controller.js`)

*   `generateShortenUrl(req, res)`: Generates a shortened URL.
*   `getUrlAll(req, res)`: Retrieves all URLs.
*   `getShortUrl(req, res)`: Redirects to the original URL using a shortened URL.

Middleware
----------

### Authentication Middleware (`auth.controller.js`)

*   `authLogin(req, res, next)`: Middleware to authenticate user login using JWT token present in request cookies.

Routers
-------

### User Router (`user.router.js`)

*   `/userDetails`:
    *   `GET`: Retrieves all users.
    *   `POST`: Creates a new user.
*   `/userDetails/:id`:
    *   `GET`: Retrieves a user by ID.
*   `/login`:
    *   `POST`: Authenticates user login.
*   `/email`:
    *   `POST`: Verifies email and sends a verification mail.
*   `/reset`:
    *   `PUT`: Resets user password.
*   `/logout`:
    *   `POST`: Logs out the user.

### URL Router (`url.router.js`)

*   `/generateShortenUrl`:
    *   `POST`: Generates a shortened URL.
*   `/getUrlAll`:
    *   `GET`: Retrieves all URLs.
*   `/getShortUrl/:shortUrl`:
    *   `GET`: Redirects to the original URL using a shortened URL.

Database
--------

The project uses MongoDB as the database. It connects to the database using Mongoose.

Models
------

### User Model (`user.schema.js`)

*   Defines the schema for user data including `userId`, `firstName`, `lastName`, `email`, and `password`.

### URL Model (`url.schema.js`)

*   Defines the schema for URL data including `urlName`, `longUrl`, and `shortUrl`.