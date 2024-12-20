const  mongoose  = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    username: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;