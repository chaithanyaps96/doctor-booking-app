module.exports.upload = async (req, res) => {
  try {
    res
      .status(201)
      .json({ url: `http://localhost:8888/img/${req.file.filename}` });
  } catch (e) {
    res.status(500).json({ error: true, message: e.message });
  }
};
