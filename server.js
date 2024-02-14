// const express = require("express"); // puedo importarlo así en cada modulo, pero puedo aplicar otra forma para exportar

import express from 'express';
import bodyParser from 'body-parser'; 
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import billsRouter from './routes/billsRoutes.js';
//require('colors');

dotenv.config();

//Connección con mongoDB
mongoose.connect(process.env.URI).then(() =>{
    console.log("Conneceted to DB");
}).catch((err) => {
    console.log(err.message);
});

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));

// routes
app.use('/api/products/', productRouter); // Con esto se crea la ruta a los productos de la BD
app.use('/api/users/', userRouter);
app.use('/api/bills/', billsRouter);

//Create Port
const PORT = process.env.PORT || 8000;

//Listen PORT
app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
})

