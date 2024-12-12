const express = require('express');
const {
  listDepartments,
  addDepartment,
  getDepartmentByID,
  updateDepartment,
  deleteDepartment,
} = require('../controllers/department-controller');

const router = express.Router();

router.get('/', listDepartments);
router.post('/', addDepartment);
router.get('/:id', getDepartmentByID);
router.patch('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);

module.exports = router;
