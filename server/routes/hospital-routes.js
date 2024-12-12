const express = require('express');
const { checkToken } = require('../middlewares/check-token');
const {
  listHospitals,
  addHospital,
  getHospitalByID,
  updateHospital,
  deleteHospital,
} = require('../controllers/hospital-controller');

const router = express.Router();

router.get('/', listHospitals);
router.post('/', addHospital);
router.get('/:id', getHospitalByID);
router.patch('/:id', checkToken(['ADMIN', 'DOCTOR']), updateHospital);
router.delete('/:id', checkToken(['ADMIN', 'DOCTOR']), deleteHospital);

module.exports = router;
