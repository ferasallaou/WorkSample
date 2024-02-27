# Backend Engineer Work Sample

This project skeleton contains a basic Express setup one endpoint to create a user and one endpoint to fetch all users, as well as a basic empty unit test.


## DB 
* This project is built on the top of Mongoose, a mongoDB driver for NodeJS, so in your .env file, please make sure to provide your DB_URL.
* You can run a MongoDB instance using Docker, or a more practical solution would be [MongoAtlas](https://www.mongodb.com/atlas/database), a cloud DB from Mongo with a free tier.

## Scripts 
`npm start` starts the server

`npm test` executes the tests

## Goal
1. Adjust POST /users that it accepts a user and stores it in a database.
    * The user should have a unique id, a name, a unique email address and a creation date
2. Adjust GET /users that it returns (all) users from the database.
   * This endpoint should be able to receive a query parameter `created` which sorts users by creation date ascending or descending.

Feel free to add or change this project as you like.


