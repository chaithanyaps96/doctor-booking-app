// const Appointment = require('../db/models/appointment-schema');

// module.exports.listAppointmentsByUserId = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const appointments = await Appointment.find({ user: userId })
//       .populate('slot')
//       .populate('doctor');
//     console.log(userId);
//     return res.status(200).json(appointments);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };

// module.exports.listAppointmentsByDoctorId = async (req, res) => {
//   try {
//     const { doctorId } = req.params;

//     const appointments = await Appointment.find({ doctor: doctorId })
//       .populate('slot')
//       .populate('user');
//     return res.status(200).json(appointments);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };

const Appointment = require('../db/models/appointment-schema');

module.exports.listAppointmentsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const appointments = await Appointment.find({ user: userId })
      .populate('slot')
      .populate('doctor');
    console.log(userId);
    return res.status(200).json(appointments);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.listAppointmentsByDoctorId = async (req, res) => {
  try {
    const { doctorId } = req.params;

    const appointments = await Appointment.find({ doctor: doctorId })
      .populate('slot')
      .populate('user');
    return res.status(200).json(appointments);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
