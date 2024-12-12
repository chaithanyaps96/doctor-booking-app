const { Schema, model } = require('mongoose');

const locationSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
const Location = model('locations', locationSchema);
module.exports = Location;
