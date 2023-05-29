const filterById = require("../controllers/filterById");

const getDogById = async (req, res) => {
  const { id } = req.params;
  try {
    const breedById = await filterById(id);
    res.json(breedById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDogById;
