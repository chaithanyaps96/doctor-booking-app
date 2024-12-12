const express = require('express');
const {
  showPrescriptions,
  addPrescription,
} = require('../controllers/prescription-controller');

const router = express.Router();

router.post('/', addPrescription);
router.get('/:appointmentId', showPrescriptions);

module.exports = router;
