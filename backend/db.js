const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://harihar:123@cluster0.ccylg.mongodb.net/";

const connectToMongo = () =>{
    mongoose.connect(mongoURI);
}

module.exports = connectToMongo;