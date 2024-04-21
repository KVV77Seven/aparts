require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/errorMiddleware');
// Creating an Express application

const PORT = process.env.PORT || 5001;

const start = async () => {
  console.log(process.env.DB_URL );
    const app = express();
    await mongoose.connect(process.env.DB_URL || '').then(() => {
      console.log('successfully connected to db');
    });
    app.use(
      cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
      })
    );
    app.use(express.json());
    app.use(cookieParser());
    app.use('/api', router);
    app.use(errorMiddleware);

    app.listen(PORT, () => {
      console.log(`> Ready on http://localhost:${PORT}`);
    });
}

start();