const { Schema, model } = require('mongoose');

const prescriptionSchema = Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: 'doctors',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    appointment: {
      type: Schema.Types.ObjectId,
      ref: 'appointments',
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
const Prescription = model('prescriptions', prescriptionSchema);
module.exports = Prescription;
