require('dotenv').config({path : "./config.env"});
const express = require('express');
const connectDB = require('./config/db');
// Connect DB
connectDB();
const app = express();
app.use(express.json());
app.use('/api/auth',require('./routes/auth'));
const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>
    console.log('listening on port ${PORT}'));