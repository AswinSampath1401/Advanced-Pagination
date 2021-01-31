require('dotenv').config({path: './config.env'});
const express = require('express');
const connectDB = require('./config/db');
const postRouter = require('./routes/postRoutes');
connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1/posts',postRouter);

const PORT = process.env.PORT;
app.listen(PORT , ()=> console.log(`Server is running on Port ${PORT} ✌`));
