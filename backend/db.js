const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://badri:5BC3bmkN8MOY85Hh@healthcarebooking.qvc2zih.mongodb.net/";

const connectToMongo = () =>{
    mongoose.connect(mongoURI);
}

module.exports = connectToMongo;