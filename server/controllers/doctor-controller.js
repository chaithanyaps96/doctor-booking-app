const Doctor = require('../db/models/doctor-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const generator = require('generate-password');
const nodemailer = require('nodemailer');
const e = require('express');
module.exports.signup = async (req, res) => {
  try {
    const body = req.body;
    const { email } = body;

    const doctor = await Doctor.findOne({ email: email });
    if (doctor) {
      return res
        .status(400)
        .json({ message: 'Email already exist', error: true });
    }
    const password = generator.generate({
      length: 10,
      numbers: true,
    });

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'myworkspace702@gmail.com',
        pass: 'rbft grrj alqf oysd',
      },
    });

    const hashedPassword = await bcrypt.hash(password, 2);
    const dbResponse = await Doctor.create({
      ...body,
      password: hashedPassword,
    });

    var mailOptions = {
      from: 'myworkspace702@gmail.com',
      to: body.email,
      subject: 'DOCTOR BOOKING APP PASSWORD',
      text: `password for your email is ${password}`,
    };

    transporter.sendMail(mailOptions, () => {
      if (e) throw e;
      else
        return res
          .status(201)
          .json({ message: 'Doctor mail sent', error: false });
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email: email });
    if (!doctor) {
      return res
        .status(403)
        .json({ message: 'Email or Password Incorrect a', error: true });
    }
    const isMatching = await bcrypt.compare(password, doctor.password);
    console.log(isMatching);
    console.log(password);
    console.log(doctor.password);
    if (!isMatching) {
      return res
        .status(403)
        .json({ message: 'Email or Password Incorrect b', error: true });
    }
    const token = jwt.sign(
      { id: doctor._id, role: 'DOCTOR' },
      process.env.SECRET_KEY,
      { expiresIn: '5d' }
    );
    return res
      .status(200)
      .json({ message: 'You are logged in', error: false, token });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.profile = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const doctor = await Doctor.findByIdAndUpdate(id, body);
    console.log(doctor);
    return res.status(200).json({ message: 'Profile updated' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message, error: true });
  }
};

// get by id
module.exports.getDoctorByID = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    return res.status(200).json(doctor);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

//get method (view)
module.exports.getDoctor = async (req, res) => {
  try {
    const { hos, dep } = req.query;
    if (hos && dep) {
      const doctors = await Doctor.find({ hospital: hos, department: dep });
      return res.status(200).json(doctors);
    } else {
      const doctors = await Doctor.find();
      return res.status(200).json(doctors);
    }
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

//get
// module.exports.getDoctor = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const doctor = await Doctor.findById(id);
//     console.log(doctor);
//     return res.status(200).json(doctor);
//   } catch (e) {
//     console.log(e.message);
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };

//post
module.exports.addDoctor = async (req, res) => {
  try {
    const body = req.body;
    const doctor = await Doctor.create(body);
    return res.status(200).json({
      message: 'Doctor added successfully',
      success: true,
      error: false,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message, error: true });
  }
};

// // patch by id
// module.exports.updateDoctor = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const body = req.body;
//     const doctor = await Doctor.findByIdAndUpdate(id, body);
//     return res.status(200).json({
//       message: 'Doctor updated successfully',
//       error: false,
//       success: true,
//     });
//   } catch (e) {
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };

// // delete by id
// module.exports.deleteDoctor = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const body = req.body;
//     const doctor = await Doctor.findByIdAndDelete(id);
//     return res.status(200).json({
//       message: 'Doctor deleted successfully',
//       error: false,
//       success: true,
//     });
//   } catch (e) {
//     return res.status(500).json({ message: e.message, error: true });
//   }
// };
