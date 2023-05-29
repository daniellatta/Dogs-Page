const allDogs = require('../controllers/allDogs');

const getAllDogs = async (req, res) => {
  try {
    const dogs = await allDogs();
    res.status(200).json(dogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllDogs;
