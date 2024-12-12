const express = require('express');
const { upload } = require('../controllers/image-controller');
const uniqid = require('uniqid');
const multer = require('multer');
const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/');
  },
  filename: function (req, file, cb) {
    cb(null, uniqid() + '_' + file.originalname);
  },
});

const uploadMW = multer({ storage: storage });
router.post('/', uploadMW.single('image'), upload);
module.exports = router;
