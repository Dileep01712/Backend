import dotenv from "dotenv";
import connectDB from './db/index.js';
import { app } from './app.js'

dotenv.config({
    path: './.env',
});


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed!! ", err);
    });








/* EFI: First approach is to connect with database

import mongoose from 'mongoose';
import { DB_NAME } from './constants';
import express from 'express';
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error', (error) => {
            console.log("App failed to connect with Database!!", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("Mongoose failed to connect with Database!! ", error);
        throw error;
    }
})()
*/