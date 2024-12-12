const express = require('express');
// const {
//   listSlot,
//   listSlotsByDocId,
//   addSlot,
//   bookSlot,
//   cancelSlot,
//   deleteSlot,
// } = require('../controllers/slot-controller');

// const router = express.Router();

// router.get('/', listSlot);
// router.get('/:doctorId', listSlotsByDocId);
// router.post('/', addSlot);
// router.post('/book', bookSlot);
// router.patch('/:id', cancelSlot);
// router.delete('/:id', deleteSlot);

// module.exports = router;

const {
  listSlotByDoctorId,
  addSlot,
  bookSlot,
  cancelSlot,
  listSlots,
} = require('../controllers/slot-controller');

const router = express.Router();

router.get('/', listSlotByDoctorId);
router.get('/:doctorId', listSlots);
router.post('/', addSlot);
router.post('/book', bookSlot);
router.delete('/:slotId', cancelSlot);

module.exports = router;
