const Admin = require('../db/models/admin-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//signup post method
module.exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });
    if (admin) {
      return res
        .status(400)
        .json({ message: 'Email already exists', error: true });
    }
    const hashedPassword = await bcrypt.hash(password, 2);
    const dbResponse = await Admin.create({ email, password: hashedPassword });
    return res
      .status(201)
      .json({ message: 'Admin added successfully', error: false });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

//login get method
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res
        .status(403)
        .json({ message: 'Email or Password Incorrect', error: true });
    }
    const isMatching = await bcrypt.compare(password, admin.password);
    if (!isMatching) {
      return res
        .status(403)
        .json({ message: 'Email or Password Incorrect', error: true });
    }
    const token = jwt.sign(
      { id: admin._id, role: 'ADMIN' },
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
