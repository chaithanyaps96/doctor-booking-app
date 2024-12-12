const Hospital = require('../db/models/hospital-schema');

// module.exports.listHospitals = async (req, res) => {
//   try {
//     const { location } = req.query;
//     if (location) {
//       const hospitals = await Hospital.find({ location: location });
//       console.log(hospitals);
//       return res.status(200).json(hospitals);
//     } else {
//       const hospitals = await Hospital.find();
//       return res.status(200).json(hospitals);
//     }
//   } catch (e) {
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };

module.exports.listHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    return res.status(200).json(hospitals);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.addHospital = async (req, res) => {
  try {
    const body = req.body;
    const hospitals = await Hospital.create(body);
    return res.status(200).json({
      message: 'Hospital added successfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getHospitalByID = async (req, res) => {
  try {
    const { id } = req.params;
    const hospital = await Hospital.findById(id).populate('department');
    console.log(hospital);
    return res.status(200).json(hospital);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.updateHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const hospital = await Hospital.findByIdAndUpdate(id, body);
    return res.status(200).json({
      message: 'Hospital updated successfully',
      error: false,
      success: true,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const hospital = await Hospital.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'Hospital deleted successfully',
      error: false,
      success: true,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
