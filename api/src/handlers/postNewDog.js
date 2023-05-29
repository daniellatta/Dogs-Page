const createDog = require('../controllers/createDog');

const postNewDog = async (req, res) => {
  const dog = req.body;
  try {
    const newInstance = await createDog(dog);
    res.status(201).json({ new_dog: newInstance });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postNewDog;
