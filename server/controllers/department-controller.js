const Department = require('../db/models/department-schema');

//get method (view)
module.exports.listDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    return res.status(200).json(departments);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

//post
module.exports.addDepartment = async (req, res) => {
  try {
    const body = req.body;
    const departments = await Department.create(body);
    return res.status(200).json({
      message: 'Department added successfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

// get by id
module.exports.getDepartmentByID = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findById(id);
    console.log(id);
    return res.status(200).json(department);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

// patch by id
module.exports.updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const department = await Department.findByIdAndUpdate(id, body);
    return res.status(200).json({
      message: 'Department updated successfully',
      error: false,
      success: true,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

// delete by id
module.exports.deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const department = await Department.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'Department deleted successfully',
      error: false,
      success: true,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
