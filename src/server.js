import express, {Router} from 'express';
import mongoose from "mongoose";
import postRoutes from './routes/forumRoutes.js';
import config from './configuretion/config.js';
import errorMiddleware from "./middlewares/error.middleware.js";
import errorHandler from "./middlewares/error.middleware.js";
import accountRoutes from "./routes/accountRoutes.js";
import authentication from "./middlewares/authentication.middleware.js";
import {createAdmin} from "./configuretion/initAdmin.js";
import authenticationMiddleware from "./middlewares/authentication.middleware.js";
import authenticationRouter from "bcrypt/promises.js";
import {hasRole} from "./middlewares/authorization.middleware.js";
import authorizationRouter from "./routes/authorizationRoutes.js";
const app = express();

app.use(express.json());
app.use(authentication)
// const authorizationRouter = Router();
// authorizationRouter.all('/account/user/:login/role/:role', hasRole('ADMIN'));
app.use(authorizationRouter)
// app.use('/account/user/:login/role/:role', hasRole('ADMIN'))

app.use('/forum', postRoutes)
app.use('/account', accountRoutes)

app.use(errorHandler);

app.use((req, res) => res.status(404).type('text/plain; charset=utf-8').send('Not Found'));

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME
        })
        await createAdmin();
        console.log('Connected to MongoDB');
    } catch (e) {
        console.log('Failed connection to MongoDB: ', e);
    }
}

async function startServer() {
    await connectDB();
    app.listen(config.port, () => console.log(`Server running on port ${config.port}. Press Ctrl+C to stop.`));

}

startServer();