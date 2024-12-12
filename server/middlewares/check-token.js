const jwt = require('jsonwebtoken');
module.exports.checkToken = roles => {
  return (req, res, next) => {
    try {
      const bearerToken = req.headers.authorization;

      if (!bearerToken) {
        return res.status(403).json({ message: 'You are not authorized a' });
      }
      const token = bearerToken.split(' ')[1];
      console.log(token);
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log(decoded);

      if (!roles.includes(decoded.role)) {
        console.log(message);
        return res.status(403).json({ message: 'You are not authorized b' });
      }
      next();
    } catch (e) {
      console.log(e.message);
      return res.status(403).json({ message: 'You are not authorized' });
    }
  };
};
