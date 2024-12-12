const { Schema, model } = require('mongoose');

const departmentSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      default: 'http://localhost:8888/img/department-icon.png',
    },
    about: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);
const Department = model('departments', departmentSchema);
module.exports = Department;
