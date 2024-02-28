# Backend Engineer Work Sample

This project skeleton contains a basic Express setup one endpoint to create a user and one endpoint to fetch all users, as well as a basic empty unit test.


## DB 
* This project is built on the top of Mongoose, a mongoDB driver for NodeJS, so in your .env file, please make sure to provide your DB_URL.
* You can run a MongoDB instance using Docker, or a more practical solution would be [MongoAtlas](https://www.mongodb.com/atlas/database), a cloud DB from Mongo with a free tier.

## Scripts 
`npm start` starts the server

`npm test` executes the tests

## Structure
- This is a microservice to handle users. All the routes are defined in `src/user/user.router.ts`
- Separation of concern is followed as well, a Router delegates to a Service, which in return calls the repository to handle DB operations.
- DB/DTO folders are there just in case we added new schemas or validators, to avoid big files. We can also create service/router/repository folders to follow the same pattern. But at the moment, it is not needed.


## Notes
- To Run the app locally, please run `npm install` to install all the modules.
- Make sure your MongoDB is running and accessible.
- Clone .env.example to .env and make sure to fill the data.
- Passwords are hashed on the saving level using Mongoose Hooks.