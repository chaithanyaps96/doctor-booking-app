const User = require('../db/models/user-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(400)
        .json({ message: 'Email already exists', error: true });
    }
    const hashedPassword = await bcrypt.hash(password, 2);
    const dbResponse = await User.create({ email, password: hashedPassword });
    res.status(201).json({ message: 'User added successfully', error: false });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(403)
        .json({ message: 'Email or Password Incorrect', error: true });
    }
    const isMatching = await bcrypt.compare(password, user.password);
    if (!isMatching) {
      return res
        .status(403)
        .json({ message: 'Email or Password Incorrect', error: true });
    }
    const token = jwt.sign(
      { id: user._id, role: 'USER' },
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

// get by id
module.exports.getUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    console.log(user);
    return res.status(200).json(user);
  } catch (e) {
    //console.log(e.message);
    return res.status(500).json({ message: e.message, error: true });
  }
};
