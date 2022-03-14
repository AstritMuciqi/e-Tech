const express = require("express");
const dotenv = require("dotenv");
// const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require("./config/db");
const colors = require('colors');
const cors = require('cors');
const errorHandler = require('./middleware/error');
const usersRoute = require('./routes/usersRoute');
const helmet = require('helmet');



//Load env vars
dotenv.config({ path: "./config/config.env" });

//connect to Database
connectDB();

//Route files
const products = require('./routes/products');
const categories = require('./routes/categories');
const getAuthToken = require("./middleware/getAuthToken");
const checkIfAuthenticated = require("./middleware/checkIfAuthenticated");

const app = express();

app.use(cors());

app.use(helmet());

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
app.use('/api/v1/categories', categories);

//users router
app.use('/users', usersRoute);


app.use(express.urlencoded({extended: true}));

// is declared up app.use(express.json());

app.use(getAuthToken);


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