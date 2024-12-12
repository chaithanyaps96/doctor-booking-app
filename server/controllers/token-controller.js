const jwt = require('jsonwebtoken');
module.exports.verifyToken = async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return res
      .status(201)
      .json({ message: 'Token verified', error: false, valid: true });
  } catch (e) {
    return res
      .status(500)
      .json({ message: e.message, error: true, valid: false });
  }
};
