const express = require("express");
const dotenv = require("dotenv");
// const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require("./config/db");
const colors = require('colors');
const cors = require('cors');
const errorHandler = require('./middleware/error');



//Load env vars
dotenv.config({ path: "./config/config.env" });

//connect to Database
connectDB();

//Route files
const products = require('./routes/products');

const app = express();

// Body parser
app.use(express.json());

// CORS
app.use(
  cors({
    origin: "*",
  })
);

// app.use(logger);

//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/products/', products);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in 
    ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle unhangled promise rejections
process.on('unhandledRejection', (err, promise) =>{
  console.log(`Error : ${err.messge}`.red);
  //close server & exit process
  server.close(() => process.exit(1));
});