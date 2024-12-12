const { Schema, model } = require('mongoose');

const hospitalSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    image: {
      type: String,
      default: 'http://localhost:8888/img/hospital-icon.png',
    },
    about: {
      type: String,
      trim: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    review: [
      {
        rate: Number,
        comment: String,
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
      },
    ],
    location: {
      type: String,
      required: true,
    },
    department: [
      {
        type: Schema.Types.ObjectId,
        ref: 'departments',
      },
    ],
  },
  { timestamps: true }
);
const Hospital = model('hospitals', hospitalSchema);
module.exports = Hospital;
