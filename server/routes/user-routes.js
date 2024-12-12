const express = require('express');
const {
  signup,
  login,
  getUserByID,
} = require('../controllers/user-controller');
const { checkToken } = require('../middlewares/check-token');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/:id', getUserByID);

module.exports = router;
