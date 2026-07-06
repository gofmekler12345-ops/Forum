import  express from 'express';
import mongoose from "mongoose";
import postRoutes from './routes/forumRoutes.js';

const app = express();

app.use(express.json());

app.use('/forum', postRoutes)

app.use((req, res) => res.status(404).type('text/plain; charset=utf-8').send('Not Found'));

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME
        })
        console.log('Connected to MongoDB');
        app.listen(port, () => console.log(`Server running on port ${port}. Press Ctrl+C to stop.`));
    } catch (e) {
        console.log('Failed connection to MongoDB: ', e);
    }
}

startServer();