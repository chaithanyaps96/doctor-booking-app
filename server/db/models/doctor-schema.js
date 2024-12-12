const { Schema, model } = require('mongoose');

const doctorSchema = Schema(
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
      default: 'http://localhost:8888/img/doctor-icon.png',
    },
    about: {
      type: String,
      trim: true,
    },
    specialization: {
      type: String,
      trim: true,
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
    hospital: {
      type: Schema.Types.ObjectId,
      ref: 'hospitals',
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: 'departments',
    },

    role: {
      type: String,
      default: 'DOCTOR',
    },
    timeslots: [String],
  },
  { timestamps: true }
);
const Doctor = model('doctors', doctorSchema);
module.exports = Doctor;
