const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

function connectDB() {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('connected to db successfully'))
    .catch((error) => console.log(error))
}

module.exports = connectDB;