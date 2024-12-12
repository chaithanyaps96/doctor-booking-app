const express = require('express');
const {
  signup,
  login,
  profile,
  getDoctorByID,
  getDoctor,
  addDoctor,

  // updateDoctor,
  // deleteDoctor,
} = require('../controllers/doctor-controller');
const { checkToken } = require('../middlewares/check-token');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile/:id', profile);
router.get('/:id', getDoctorByID);

router.get('/', getDoctor);
router.post('/', addDoctor);

// router.patch('/:id', updateDoctor);
// router.delete('/:id', deleteDoctor);

module.exports = router;
