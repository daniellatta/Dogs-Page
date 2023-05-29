const { Dog } = require('../db');

const createDog = async (dog) => {
  const { name, height, weight, life_span, temperaments, image, price } = dog;

  const exists = await Dog.findAll({ where: { name: name } });

  if (exists.length) throw new Error('Ya existe un perro con este nombre');

  const newInstance = await Dog.create({
    name,
    height,
    weight,
    life_span,
    temperaments,
    image,
    price,
  });

  newInstance.addTemperaments(temperaments);

  return newInstance;
};

module.exports = createDog;
