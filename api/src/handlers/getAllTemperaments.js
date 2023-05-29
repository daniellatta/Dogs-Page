const { Temperament } = require("../db");

const getAllTemperaments = async (req, res) => {
  try {
    const temperaments = await Temperament.findAll();
    res.json(temperaments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllTemperaments;
