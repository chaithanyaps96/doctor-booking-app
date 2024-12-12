const Slot = require('../db/models/slot-schema');
const Appointment = require('../db/models/appointment-schema');
const moment = require('moment');

module.exports.listSlotByDoctorId = async (req, res) => {
  try {
    const { date, doctor } = req.query;
    const query = {};
    if (doctor) {
      query.doctor = doctor;
    }
    if (date) {
      query.date = date;
    }

    const slots = await Slot.find(query);
    return res.status(200).json(slots);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.listSlots = async (req, res) => {
  try {
    const { doctorId } = req.params;

    const slots = await Slot.find({ doctor: doctorId });
    return res.status(200).json(slots);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.addSlot = async (req, res) => {
  try {
    const body = req.body;
    const slot = await Slot.create(body);
    return res.status(201).json({
      message: 'Slot added succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.bookSlot = async (req, res) => {
  try {
    const { slot, user, doctor } = req.body;

    const slotResponse = await Slot.findByIdAndUpdate(slot, { booked: true });
    const appointmentResponse = await Appointment.create({
      user: user,
      slot: slot,
      doctor: doctor,
      date: moment().format('yyyy-MM-DD'),
    });
    return res.status(201).json({
      message: 'Slot booked succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.cancelSlot = async (req, res) => {
  try {
    const { slotId } = req.params;

    const slotResponse = await Slot.findByIdAndUpdate(slotId, {
      booked: false,
    });
    const appointmentResponse = await Appointment.findOneAndDelete({
      slot: slotId,
    });
    return res.status(201).json({
      message: 'Slot booking cancelled',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

// module.exports.listSlot = async (req, res) => {
//   try {
//     const { date, doctor } = req.query;
//     const query = {};
//     if (doctor) {
//       query.doctor = doctor;
//     }
//     if (date) {
//       query.date = date;
//     }
//     const slots = await Slot.find(query);
//     console.log(slots);
//     return res.status(200).json(slots);
//   } catch (e) {
//     console.log(e.message);
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };

// module.exports.listSlotsByDocId = async (req, res) => {
//   try {
//     const { doctorId } = req.params;

//     const slots = await Slot.find({ doctor: doctorId });
//     return res.status(200).json(slots);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };

// module.exports.addSlot = async (req, res) => {
//   try {
//     const body = req.body;
//     const slot = await Slot.create(body);
//     return res.status(200).json({
//       message: 'Slot added successfully',
//       success: true,
//       error: false,
//     });
//   } catch (e) {
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };

// module.exports.bookSlot = async (req, res) => {
//   try {
//     const { slot, user, doctor } = req.body;

//     const slotResponse = await Slot.findByIdAndUpdate(slot, { booked: true });
//     const appointmentResponse = await Appointment.create({
//       user: user,
//       slot: slot,
//       doctor: doctor,
//       date: moment().format('yyyy-MM-DD'),
//     });
//     return res.status(201).json({
//       message: 'Slot booked succesfully',
//       success: true,
//       error: false,
//     });
//   } catch (e) {
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };

// module.exports.cancelSlot = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const slotResponse = await Slot.findByIdAndUpdate(id, { booked: false });
//     const Appointmentresponse = await Slot.findOneAndDelete({ slot: Slot });
//     return res.status(200).json({
//       message: 'Appointment deleted ',
//       success: true,
//       error: false,
//     });
//   } catch (e) {
//     console.log(e.message);
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };

// // // delete by id
// module.exports.deleteSlot = async (req, res) => {
//   try {
//     const { slotid } = req.params;
//     const slots = await Slot.findOneAndDelete({ slot: slotid });
//     return res.status(200).json({
//       message: 'Slot deleted successfully',
//       error: false,
//       success: true,
//     });
//   } catch (e) {
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };
