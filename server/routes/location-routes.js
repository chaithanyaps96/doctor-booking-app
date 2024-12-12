const express = require('express');
const {
  addLocation,
  getLocations,
} = require('../controllers/location-controller');

const router = express.Router();

router.post('/', addLocation);
router.get('/', getLocations);

module.exports = router;
