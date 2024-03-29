const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    city: String,
    street: String,
    isAdmin: Number
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = userSchema;