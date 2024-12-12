const express = require('express');
const { verifyToken } = require('../controllers/token-controller');

const router = express.Router();

router.post('/', verifyToken);

module.exports = router;
