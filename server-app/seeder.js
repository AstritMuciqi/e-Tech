const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/config.env'});

//Load models
const Product = require('./models/Product');
const Category = require('./models/Category');

//Connect to DB
mongoose.connect(process.env.MONGO_URI);

//Read JSON files
const products = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/products.json`, 'utf-8')
);
const categories = JSON.parse(fs.readFileSync(`${__dirname}/_data/categories.json`, 'utf-8'));

//import into DB

const importData = async () => {
    try {
        await Product.create(products);

        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
},
const importData = async () => {
    try {
        await Category.create(categories);

        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

//delete Data

const deleteData = async () => {
    try {
        await Product.deleteMany();

        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
},
const deleteData = async () => {
    try {
        await Category.deleteMany();

        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

if(process.argv[2]==='-i'){
    importData();
}else if(process.argv[2]==='-d'){
    deleteData();
}

