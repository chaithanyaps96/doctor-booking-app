const Location = require('../db/models/location-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// post method
module.exports.addLocation = async (req, res) => {
  try {
    const body = req.body;
    const dbResponse = await Location.create(body);
    return res
      .status(201)
      .json({ message: 'You have successfully added location', error: false });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

// get method
module.exports.getLocations = async (req, res) => {
  try {
    const dbResponse = await Location.find();

    return res.status(200).json(dbResponse);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
