require('dotenv').config({path : "./config.env"});
const express = require('express');
const connectDB = require('./config/db');
// Connect DB
connectDB();
const app = express();
app.use(express.json());
app.use('/api/auth',require('./routes/auth'));
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT , ()=>
    console.log('listening on port ${PORT}'));
// error handling with much more suitable syntax

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
  });