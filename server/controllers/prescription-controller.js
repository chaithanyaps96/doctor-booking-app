const Prescription = require('../db/models/prescription-schema');

module.exports.addPrescription = async (req, res) => {
  try {
    const body = req.body;
    const prescription = await Prescription.create(body);
    return res.status(201).json({
      message: 'Prescription added succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.showPrescriptions = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const prescriptions = await Prescription.findOne({
      appointment: appointmentId,
    }).populate('doctor');
    return res.status(200).json(prescriptions);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
