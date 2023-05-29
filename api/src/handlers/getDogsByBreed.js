const filterByBreed = require('../controllers/filterByBreed');

const getDogsByBreed = async (req, res) => {
  const { q } = req.query;
  try {
    const filtered = await filterByBreed(q);
    res.status(200).json(filtered);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getDogsByBreed;
