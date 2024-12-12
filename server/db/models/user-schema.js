const { Schema, model } = require('mongoose');

const userSchema = Schema(
  {
    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      default: 'http://localhost:8888/img/user-icon.png',
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      trim: true,
    },
    phonenumber: {
      type: Number,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    weight: {
      type: String,
      trim: true,
    },
    height: {
      type: String,
      trim: true,
    },
    bloodgroup: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      default: 'USER',
    },
  },
  { timestamps: true }
);
const User = model('users', userSchema);
module.exports = User;
